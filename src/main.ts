import '@zui/base';
import '@zui/scrollbar/src/scrollbar-css.css';
import 'highlight.js/styles/github.css';
import './style.css';
import {LibInfo} from '../scripts/libs/lib-info';

async function loadLibs() {
    const response = await fetch('/libs/');
    const libs: Record<string, LibInfo> = await response.json();
    const groupedLibs = Object.values(libs).reduce<Record<string, LibInfo[]>>((map, lib) => {
        const {type} = lib.zui;
        if (!map[type]) {
            map[type] = [];
        }
        map[type].push(lib);
        return map;
    }, {});

    const libTypeOrders: Record<string, number> = {
        'css-base': 1,
        'control': 2,
        'js-helpers': 3,
        'component': 4,
        'css-utilities': 5,
        'js-lib': 6,
    };

    return Object.entries(groupedLibs).sort(([type1], [type2]) => {
        return libTypeOrders[type1] - libTypeOrders[type2];
    });
}

async function loadLibPage(libName: string) {
    const response = await fetch(`/lib/${libName}/README.md`);
    const content = await response.text();
    const libPage = document.getElementById('libPage');
    if (libPage) {
        libPage.innerHTML = content;
    }
    document.title = `${libName.toUpperCase()} - ZUI3`;
}

const currentLibName = window.location.pathname.split('/')[1] ?? '';
const libNav = document.querySelector<HTMLDivElement>('#libNav');
if (libNav) {
    const groupedLibs = await loadLibs();
    const html: string[] = [];
    let count = 0;
    for (const [type, libs] of groupedLibs) {
        if (!libs.length) {
            continue;
        }
        count += libs.length;
        libs.sort((a, b) => a.zui.name.localeCompare(b.zui.name));

        html.push(`<li class="lib-type -text-white/50 -text-sm -font-bold -pt-2">${type.toUpperCase()}<span class="-text-sm -ml-1 -bg-white/30 -text-primary-900 -px-1 -rounded-full" id="libsCount">${libs.length}</span></li>`);
        for (const lib of libs) {
            const {name} = lib.zui;
            html.push(`<a href="/${name}/" class="-flex -items-center -justify-between -px-1 -py-2 -text-base -font-normal -rounded ${name === currentLibName ? '-text-white -font-bold -bg-young-600' : '-text-gray-200'} hover:-bg-young-700 hover:-text-white">`);
            html.push(`<span class="-ml-1">${lib.zui.displayName ?? name}</span>`);

            if (lib.zui.sourceType === 'exts') {
                html.push(`<span class="-text-sm -ml-1 -bg-black/30 -text-white/90 -px-1 -rounded-full -font-normal">${lib.zui.extsName}</span>`);
            }

            html.push('</a>');
        }
    }

    libNav.innerHTML = html.join('\n');
    const countElement = document.querySelector<HTMLElement>('#libsCount');
    if (countElement) {
        countElement.innerText = `${count}`;
    }

    const currentNavItem = document.querySelector<HTMLElement>(`a[href="/${currentLibName}/"]`);
    if (currentNavItem) {
        currentNavItem.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
}

if (import.meta.hot) {
    import.meta.hot.on('zui:lib-page-updated', (data) => {
        if (data.libName === currentLibName) {
            const libPage = document.getElementById('libPage');
            if (libPage) {
                libPage.innerHTML = data.content;
            }
        }
    });

    if (currentLibName) {
        loadLibPage(currentLibName);
    }
}