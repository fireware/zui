import {Component, createRef, type RefObject, type ComponentChildren, type RenderableProps} from 'preact';
import {$, classes, mergeProps} from '@zui/core';
import {Listitem} from '@zui/list/src/component';
import {Kanban} from './kanban';
import {mergeList, sortByOrder} from '../helpers/kanban-helpers';
import type {KanbanProps, KanbanRegionProps, KanbanRegionState} from '../types';

export class KanbanRegion extends Component<KanbanRegionProps, KanbanRegionState> {
    protected _kanbanRefs = new Map<string, RefObject<Kanban>>();

    constructor(props: KanbanRegionProps) {
        super(props);
        this.state = {
            ...this.state,
            collapsed: props.collapsed,
        };
    }

    getKanban(key: unknown) {
        return this._kanbanRefs.get(String(key))?.current;
    }

    toggle(expanded?: boolean) {
        this.setState(prevState => ({collapsed: expanded === undefined ? !prevState.collapsed : !expanded}));
    }

    update(state: Partial<KanbanRegionState>) {
        return new Promise(resolve => {
            this.setState(state, resolve as () => void);
        });
    }

    _handleClickHeading = (event: MouseEvent) => {
        if ($(event.target as HTMLElement).closest('a,.btn,button').not('.kanban-region-toggle').length) {
            return;
        }
        this.setState(prevState => ({collapsed: !prevState.collapsed}));
    };

    _buildItems(props: RenderableProps<KanbanRegionProps>): ComponentChildren[] {
        const {items = [], kanbanProps: kanbanPropsSetting} = props;
        let {items: stateItems} = this.state;
        if (stateItems) {
            stateItems = mergeList(items, stateItems).filter(x => !(x as {deleted?: boolean}).deleted);
            stateItems.sort(sortByOrder as ((a: KanbanProps, b: KanbanProps) => number));
        } else {
            stateItems = items;
        }
        const kanbanRefs = this._kanbanRefs;
        const refKeys = new Set<string>(kanbanRefs.keys());
        const children = stateItems.map((item, index) => {
            const kanbanProps = mergeProps(
                {className: 'kanban-region-item', key: index},
                typeof kanbanPropsSetting === 'function' ? kanbanPropsSetting.call(this, item, index) : kanbanPropsSetting,
                item,
            );
            const key = String(kanbanProps.key);
            let ref = kanbanRefs.get(key);
            if (!ref) {
                ref = createRef<Kanban>();
                kanbanRefs.set(key, ref);
            }
            refKeys.delete(key);
            return <Kanban {...kanbanProps} />;
        });
        refKeys.forEach(key => {
            kanbanRefs.delete(key);
        });
        return children;
    }

    render(props: RenderableProps<KanbanRegionProps>) {
        const {heading, toggleFromHeading} = props;
        const {collapsed, heading: headingState} = this.state;
        const headingProps = mergeProps({className: 'kanban-heading', onClick: toggleFromHeading ? this._handleClickHeading : undefined}, typeof heading === 'function' ? heading.call(this) : heading, headingState);
        return (
            <div className={classes('kanban-region', collapsed ? 'is-collapsed' : 'is-expanded', heading ? 'has-heading' : '')}>
                {heading && <Listitem key="heading" {...headingProps} />}
                {collapsed ? null : this._buildItems(props)}
            </div>
        );
    }
}
