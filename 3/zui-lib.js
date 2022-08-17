export default [
    {
        "name": "@zui/avatar",
        "shortName": "avatar",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "control",
        "order": 2,
        "dependencies": {},
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "displayName": "头像",
        "hasUserDocs": true
    },
    {
        "name": "@zui/avatar-group",
        "shortName": "avatar-group",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "control",
        "order": 2,
        "dependencies": {
            "@zui/avatar": "workspace:0.0.1"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "displayName": "头像组",
        "hasUserDocs": true
    },
    {
        "name": "@zui/base",
        "shortName": "base",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "css-base",
        "order": 1,
        "displayName": "基础",
        "hasUserDocs": false
    },
    {
        "name": "@zui/breadcrumb",
        "shortName": "breadcrumb",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "component",
        "order": 4,
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "displayName": "面包屑",
        "hasUserDocs": true
    },
    {
        "name": "@zui/browser-helpers",
        "shortName": "browser-helpers",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "js-helpers",
        "order": 3,
        "displayName": "浏览器工具方法",
        "hasUserDocs": true
    },
    {
        "name": "@zui/btn-group",
        "shortName": "btn-group",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "control",
        "order": 2,
        "dependencies": {
            "@zui/button": "workspace:^0.0.1"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/dropdown": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "displayName": "按钮组",
        "hasUserDocs": true
    },
    {
        "name": "@zui/button",
        "shortName": "button",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "control",
        "order": 2,
        "dependencies": {},
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "displayName": "按钮",
        "hasUserDocs": true
    },
    {
        "name": "@zui/checkbox",
        "shortName": "checkbox",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "component",
        "order": 4,
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*",
            "@zui/form": "workspace:*"
        },
        "displayName": "单选框和复选框",
        "hasUserDocs": true
    },
    {
        "name": "@zui/dropdown",
        "shortName": "dropdown",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "control",
        "order": 2,
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "displayName": "下拉菜单",
        "hasUserDocs": true
    },
    {
        "name": "@zui/dtable",
        "shortName": "dtable",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "component",
        "order": 4,
        "dependencies": {
            "@zui/browser-helpers": "workspace:^0.0.1",
            "@zui/scrollbar": "workspace:^0.0.1",
            "nanoid": "^4.0.0",
            "preact": "^10.10.0"
        },
        "displayName": "数据表格",
        "hasUserDocs": false
    },
    {
        "name": "@zui/form",
        "shortName": "form",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "component",
        "order": 4,
        "dependencies": {
            "@zui/utilities": "workspace:*",
            "@zui/base": "workspace:*"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "displayName": "表单",
        "hasUserDocs": true
    },
    {
        "name": "@zui/helpers",
        "shortName": "helpers",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "js-helpers",
        "order": 3,
        "displayName": "JS 辅助方法",
        "hasUserDocs": true
    },
    {
        "name": "@zui/input",
        "shortName": "input",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "control",
        "order": 2,
        "dependencies": {},
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*",
            "@zui/form": "workspace:0.0.1"
        },
        "displayName": "输入框",
        "hasUserDocs": true
    },
    {
        "name": "@zui/input-group",
        "shortName": "input-group",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "control",
        "order": 2,
        "dependencies": {
            "@zui/form": "workspace:^0.0.1"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:^0.0.1",
            "@zui/dropdown": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "displayName": "输入组",
        "hasUserDocs": true
    },
    {
        "name": "@zui/label",
        "shortName": "label",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "control",
        "order": 2,
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "displayName": "标签",
        "hasUserDocs": true
    },
    {
        "name": "@zui/modal",
        "shortName": "modal",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "control",
        "order": 2,
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "displayName": "对话框",
        "hasUserDocs": true
    },
    {
        "name": "@zui/nav",
        "shortName": "nav",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "component",
        "order": 4,
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "displayName": "导航",
        "hasUserDocs": true
    },
    {
        "name": "@zui/panel",
        "shortName": "panel",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "control",
        "order": 2,
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/table": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "displayName": "面板",
        "hasUserDocs": true
    },
    {
        "name": "@zui/scrollbar",
        "shortName": "scrollbar",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "component",
        "order": 4,
        "dependencies": {
            "preact": "^10.10.0",
            "@zui/browser-helpers": "workspace:^0.0.1"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "displayName": "滚动条",
        "hasUserDocs": false
    },
    {
        "name": "@zui/store",
        "shortName": "store",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "js-lib",
        "order": 6,
        "dependencies": {
            "nanoid": "^4.0.0"
        },
        "displayName": "本地存储",
        "hasUserDocs": true
    },
    {
        "name": "@zui/table",
        "shortName": "table",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "component",
        "order": 4,
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "displayName": "表格",
        "hasUserDocs": true
    },
    {
        "name": "@zui/utilities",
        "shortName": "utilities",
        "version": "0.0.1",
        "workspaceVersion": "workspace:^0.0.1",
        "type": "css-utilities",
        "order": 5,
        "devDependencies": {
            "@zui/base": "workspace:*"
        },
        "displayName": "工具类",
        "hasUserDocs": true
    }
];