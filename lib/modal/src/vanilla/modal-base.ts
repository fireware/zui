import {$, JSX} from '@zui/core';
import {Component} from '@zui/core';
import type {ModalBaseOptions, ModalEvents, ModalPositionSetting, ModalSizeSetting} from '../types';

const CLASS_SHOW = 'show';

const CLASS_SHOWN = 'in';

const DISMISS_SELECTOR = '[data-dismiss="modal"]';

export class ModalBase<T extends ModalBaseOptions = ModalBaseOptions> extends Component<T, ModalEvents, HTMLElement> {
    static NAME = 'Modal';

    static DEFAULT = {
        position: 'fit',
        show: true,
        keyboard: true,
        animation: true,
        backdrop: true,
        responsive: true,
        transTime: 300,
    } as Partial<ModalBaseOptions>;

    static zIndex = 2000;

    #transitionTimer = 0;

    #rob?: ResizeObserver;

    #lastDialogSize?: [width: number, height: number];

    get modalElement() {
        return this.element;
    }

    get isShown() {
        return this.modalElement.classList.contains(CLASS_SHOW);
    }

    get dialog(): HTMLElement | null {
        return this.modalElement.querySelector('.modal-dialog');
    }

    afterInit() {
        this.on('click', this.#handleClick);

        if (this.options.responsive) {
            if (typeof ResizeObserver !== 'undefined') {
                const {dialog} = this;
                if (dialog) {
                    const rob = new ResizeObserver(() => {
                        if (!this.isShown) {
                            return;
                        }
                        const width = dialog.clientWidth;
                        const height = dialog.clientHeight;
                        if (!this.#lastDialogSize || this.#lastDialogSize[0] !== width || this.#lastDialogSize[1] !== height) {
                            this.#lastDialogSize = [width, height];
                            this.layout();
                        }
                    });
                    rob.observe(dialog);
                    this.#rob = rob;
                }
            }
        }

        if (this.options.show) {
            this.show();
        }
    }

    destroy(): void {
        super.destroy();
        this.#rob?.disconnect();
    }

    show(options?: Partial<T>) {
        if (this.isShown) {
            return false;
        }

        this.setOptions(options);

        const {modalElement} = this;
        const {animation, backdrop, className, style} = this.options;
        $(modalElement).setClass({
            'modal-trans': animation,
            'modal-no-backdrop': !backdrop,
        }, CLASS_SHOW, className).css({
            zIndex: `${ModalBase.zIndex++}`,
            ...style,
        });


        this.layout();
        this.emit('show');

        this.#resetTransTimer(() => {
            $(modalElement).addClass(CLASS_SHOWN);
            this.#resetTransTimer(() => {
                this.emit('shown');
            });
        }, 50);
        return true;
    }

    hide() {
        if (!this.isShown) {
            return false;
        }

        $(this.modalElement).removeClass(CLASS_SHOWN);
        this.emit('hide');

        this.#resetTransTimer(() => {
            $(this.modalElement).removeClass(CLASS_SHOW);
            this.emit('hidden');
        });
        return true;
    }

    layout(position?: ModalPositionSetting, size?: ModalSizeSetting) {
        if (!this.isShown) {
            return;
        }

        const {dialog} = this;
        if (!dialog) {
            return;
        }

        size = size ?? this.options.size;
        $(dialog).removeAttr('data-size');
        const sizeStyle: Record<string, number | string> = {width: '', height: ''};
        if (typeof size === 'object') {
            sizeStyle.width = size.width;
            sizeStyle.height = size.height;
        } else if (typeof size === 'string' && ['md', 'sm', 'lg', 'full'].includes(size)) {
            $(dialog).attr('data-size', size);
        } else if (size) {
            sizeStyle.width = size;
        }
        $(dialog).css(sizeStyle);

        position = position ?? this.options.position ?? 'fit';
        const width = dialog.clientWidth;
        const height = dialog.clientHeight;
        this.#lastDialogSize = [width, height];
        if (typeof position === 'function') {
            position = position({width, height});
        }

        const style: JSX.CSSProperties = {
            top: null,
            left: null,
            bottom: null,
            right: null,
            alignSelf: 'center',
        };

        if (typeof position === 'number') {
            style.alignSelf = 'flex-start';
            style.top = position;
        } else if (typeof position === 'object' && position) {
            style.alignSelf = 'flex-start';
            Object.assign(style, position);
        } else if (position === 'fit') {
            style.alignSelf = 'flex-start';
            style.top = `${Math.max(0, Math.floor((window.innerHeight - height) / 3))}px`;
        } else if (position === 'bottom') {
            style.alignSelf = 'flex-end';
        } else if (position === 'top') {
            style.alignSelf = 'flex-start';
        } else if (position !== 'center' && typeof position === 'string') {
            style.alignSelf = 'flex-start';
            style.top = position;
        }

        $(dialog).css(style);
        $(this.modalElement).css('justifyContent', style.left ? 'flex-start' : 'center');
    }

    #handleClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (target.closest(DISMISS_SELECTOR) || (this.options.backdrop === true && !target.closest('.modal-dialog') && target.closest('.modal'))) {
            this.hide();
        }
    };

    #resetTransTimer(callback?: () => void, time?: number) {
        if (this.#transitionTimer) {
            clearTimeout(this.#transitionTimer);
            this.#transitionTimer = 0;
        }
        if (callback) {
            if (this.options.animation) {
                this.#transitionTimer = window.setTimeout(callback, time ?? this.options.transTime);
            } else {
                callback();
            }
        }
    }

    static hide(target?: HTMLDivElement | string) {
        ModalBase.query(target)?.hide();
    }

    static show(target?: HTMLDivElement | string) {
        ModalBase.query(target)?.show();
    }
}

$(window).on('resize', () => {
    ModalBase.getAll().forEach((modal) => {
        const m = (modal as ModalBase);
        if (m.isShown && m.options.responsive) {
            m.layout();
        }
    });
});

$(document).on('zui.modal.hide', (_: Event, data?: {target?: HTMLDivElement | string}) => {
    ModalBase.hide(data?.target);
});