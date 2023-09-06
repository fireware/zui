import type {JSX, ComponentType} from 'preact';
import type {ClassNameLike, CustomContentType, IconType} from '@zui/core';
import type {AvatarOptions} from '@zui/avatar';
import type {CheckboxProps, CheckedType} from '@zui/checkbox/src/types';
import type {ButtonProps} from '@zui/button';
import type {Item} from './item';

export interface ListItemProps extends Item {
    innerComponent?: ComponentType | keyof JSX.IntrinsicElements;
    multiline?: boolean;
    checked?: CheckedType;
    checkbox?: CheckboxProps;
    disabled?: boolean;
    active?: boolean;
    divider?: boolean;
    toggleIcon?: CustomContentType;
    icon?: IconType;
    hover?: boolean;
    avatar?: AvatarOptions;
    leading?: CustomContentType;
    leadingClass?: ClassNameLike;
    url?: string;
    target?: string;
    text?: CustomContentType;
    textClass?: ClassNameLike;
    title?: CustomContentType;
    titleClass?: ClassNameLike;
    subtitle?: CustomContentType;
    subtitleClass?: ClassNameLike;
    trailing?: CustomContentType;
    trailingClass?: ClassNameLike;
    trailingIcon?: IconType;
    actions?: ButtonProps[];
    actionsClass?: ClassNameLike;
    actionsAttrs?: Record<string, unknown>;
}
