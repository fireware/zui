import './src/main';
import {domReady} from '@zui/browser-helpers/src/dom-ready';
import icons from './fonts/icons.json';

domReady(() => {
    setTimeout(() => {
        const $ul = document.querySelector('#icons-wrapper');
        let ulChildrenStr = '';
        for (const icon in icons) {
            ulChildrenStr += `<li class="w-1/6 p-2 m-2 bg-slate-200 flex items-center -flex-col light-pale rounded "><i class="icon icon-${icon}"></i>icon-${icon}</li>`;
        }
        $ul.innerHTML = ulChildrenStr;
    }, 100);
});
