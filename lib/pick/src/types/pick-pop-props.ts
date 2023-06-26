import type {JSX, ComponentChildren} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {PickState, PickerStateChanger} from './pick-state';
import type {PickPopPlacement} from './pick-pop-placement';

export interface PickPopProps<S extends PickState = PickState> {
    id: string;
    state: S;
    changeState: PickerStateChanger<S>;
    togglePop: (open?: boolean, state?: Partial<S>) => Promise<S>;

    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    children?: ComponentChildren;

    placement?: PickPopPlacement;
    container?: string | HTMLElement;
    width?: number | 'auto' | '100%' | (() => number | 'auto');
    height?: number | 'auto' | (() => number | 'auto');
    minHeight?: number | string;
    maxHeight?: number | string;
    maxWidth?: number | string;
    minWidth?: number | string;
}