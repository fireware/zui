import {createRef, render} from 'preact';
import {DTableOptions} from './types/options';
import {DTable as DTableReact} from './dtable-react';
import {getDefaultOptions} from './helpers/default-options';
import {removePlugin, addPlugin} from './helpers/shared-plugins';

export class DTable {
    static addPlugin = addPlugin;

    static removePlugin = removePlugin;

    element: HTMLElement;

    options: DTableOptions;

    ref = createRef();

    constructor(element: HTMLElement, options?: Partial<DTableOptions>) {
        this.element = element;
        this.options = {...getDefaultOptions(), ...options} as DTableOptions;
        if (this.options.cols?.length) {
            this.render();
        }
    }

    render(options?: Partial<DTableOptions>) {
        this.options = Object.assign(this.options, options);
        render((
            <DTableReact ref={this.ref} {...this.options} />
        ), this.element);
    }
}
