var TVwwwRender = function (payload) {

    var w = window,
        d = document,
        e = d.documentElement,
        b = d.getElementsByTagName('body')[0],
        width = w.innerWidth || e.clientWidth || b.clientWidth,
        height = w.innerHeight || e.clientHeight || b.clientHeight;

    this.TVwwwRender = {
        contents: [],
        categories: [],
        settings: {
            canvas: {
                w: width,
                h: height
            },
            categories: {
                position: 'left',
                columns: 1,
                rows: 5,
                w: Math.floor(width / 3) - 50 * 2,
                h: height - 50 * 2
            },
            contents: {
                position: 'right',
                columns: 4,
                rows: 2,
                w: width - Math.floor(width / 3) - 50 * 2,
                h: height - 50 * 2
            },
            blocks: ['categories', 'contents'],
            buttons: ['ok', 'left', 'right', 'up', 'down'],
            backgrounds: []
        },
        active: {
            current: '',
            display: '',
            key: ''
        }
    };

    var TVwww = this.TVwwwRender;

    if (payload) Object.deepExtend(TVwww, payload);

    function initActive() {
        if (TVwww.getProp([TVwww.active.current, 'settings'].j())) {
            var cache = [];
            var set = JSON.parse(JSON.stringify(TVwww.settings, function(key, value) {
                if (typeof value === 'object' && value !== null) {
                    if (cache.indexOf(value) !== -1) {
                        try {return JSON.parse(JSON.stringify(value));} catch (error) {return;}
                    }
                    cache.push(value);
                }
                return value;
            }));
            cache = null;
            Object.deepExtend(set, TVwww.getProp([TVwww.active.current, 'settings'].j()));
            TVwww.settings = set;
        }
        if (TVwww.active.key === 'ok') {
            TVwww.active.display = TVwww.active.router;
        }

        var blocks = TVwww.settings.blocks,
            r = blocks.slice().reverse(),
            settings = TVwww.settings,
            active = false;

        blocks.forEach(function (block, b) {
            var current = TVwww.getProp([TVwww.active.display, block].j())
                ? [TVwww.active.display, block].j()
                : [block].j();
            var current_r = TVwww.getProp([TVwww.active.display, r[b]].j())
                ? [TVwww.active.display, r[b]].j()
                : [r[b]].j();
            var items = TVwww.getProp(current);
            if (typeof items === 'object') {
                if (block === 'categories' && settings[block].rows >= items.length) {
                    settings[block].rows = items.length;
                }
                var setting = settings[block],
                    col = setting.columns,
                    row = setting.rows,
                    pos = setting.position,
                    len = items.length,
                    per = col * row;
                items.forEach(function (item, i) {
                    if (active) delete item.active;
                    if (item.active) {
                        var cache = [];
                        var act = JSON.parse(JSON.stringify(TVwww.active, function(key, value) {
                            if (typeof value === 'object' && value !== null) {
                                if (cache.indexOf(value) !== -1) {
                                    try {return JSON.parse(JSON.stringify(value));} catch (error) {return;}
                                }
                                cache.push(value);
                            }
                            return value;
                        }));
                        cache = null;
                        Object.deepExtend(act, item);
                        TVwww.active = act;
                        active = true;
                        TVwww.active[block] = {};
                        TVwww.active[block].page = Math.ceil((i + 1) / per);
                        TVwww.active[block].end = TVwww.active[block].page * per;
                        TVwww.active[block].begin = TVwww.active[block].end - per;
                        TVwww.active.current = [current, i].j();
                        TVwww.active.router = TVwww.getProp([current, i, 'ok'].j())
                            ? [current, i, 'ok'].j()
                            : '';
                        TVwww.settings.buttons.forEach(function (key) {
                            switch (key) {
                                case 'ok':
                                    TVwww.active.ok = item.ok
                                        ? item.ok
                                        : [current, i].j();
                                    break;
                                case 'left':
                                    if (pos === 'left') {
                                        if ((i + 1) < len) {
                                            TVwww.active.left = [current, i + 1].j();
                                        }
                                        else {
                                            TVwww.active.left = [current, i].j();
                                        }
                                    }
                                    else {
                                        if (!(i % col)) {
                                            TVwww.active.left = [current_r, TVwww.active[r[b]].begin].j();
                                        }
                                        else if ((i - 1) >= 0) {
                                            TVwww.active.left = [current, i - 1].j();
                                        }
                                        else {
                                            TVwww.active.left = [current, i].j();
                                        }
                                    }
                                    break;
                                case 'right':
                                    if (pos === 'right') {
                                        if ((i + 1) < len) {
                                            TVwww.active.right = [current, i + 1].j();
                                        }
                                        else {
                                            TVwww.active.right = [current, i].j();
                                        }
                                    }
                                    else {
                                        if (!(i % col)) {
                                            TVwww.active.right = [current_r, TVwww.active[r[b]].begin].j();
                                        }
                                        else if ((i - 1) >= 0) {
                                            TVwww.active.right = [current, i - 1].j();
                                        }
                                        else {
                                            TVwww.active.right = [current, i].j();
                                        }
                                    }
                                    break;
                                case 'up':
                                    if ((i - col) >= 0) {
                                        TVwww.active.up = [current, i - col].j();
                                    }
                                    else {
                                        TVwww.active.up = [current, i].j();
                                    }
                                    break;
                                case 'down':
                                    if ((i + col) < len) {
                                        TVwww.active.down = [current, i + col].j();
                                    }
                                    else {
                                        TVwww.active.down = [current, len - 1].j();
                                    }
                                    break;
                            }
                        });
                    }
                    else {
                        TVwww.active[block] = TVwww.active[block]
                            ? TVwww.active[block]
                            : {};
                        TVwww.active[block].page = TVwww.active[block].page
                            ? TVwww.active[block].page
                            : Math.ceil((i + 1) / per);
                        TVwww.active[block].end = TVwww.active[block].end
                            ? TVwww.active[block].end
                            : TVwww.active[block].page * per;
                        TVwww.active[block].begin = TVwww.active[block].begin
                            ? TVwww.active[block].begin
                            : TVwww.active[block].end - per;
                    }
                });
            }
        });
    }

    function renderPage(blocks) {

        blocks = blocks ? blocks : TVwww.settings.blocks;

        blocks.forEach(function (block) {

            var b = TVwww.getProp([TVwww.active.display, block].j())
                ? [TVwww.active.display, block].j()
                : [block].j();
            var items = TVwww.getProp(b);

            if (typeof items === 'object') {

                var clr = document.querySelector('#' + block);
                if (clr) clr.parentNode.removeChild(clr);

                var div = document.createElement('div');
                div.setAttribute('id', block);

                items
                    .slice(TVwww.active[block].begin, TVwww.active[block].end)
                    .forEach(function (item, id) {
                        if (id >= (TVwww.settings[block].columns * TVwww.settings[block].rows)) return;

                        var divContent = document.createElement('div');
                        divContent.setAttribute('class', block);

                        var divItem = document.createElement('div');
                        divItem.setAttribute('class', 'item' +
                            (item.active ? ' active' : '') +
                            (TVwww.active.display.indexOf([b, TVwww.active[block].begin+id].j())+1 ? ' current' : ''));

                        var divItemTitle = document.createElement('div');
                        divItemTitle.setAttribute('class', 'title');

                        var divItemBody = document.createElement('div');
                        divItemBody.setAttribute('class', 'body');

                        divItemBody.innerHTML = item.body || '';

                        var divItemTop = document.createElement('div');
                        divItemTop.setAttribute('class', 'top');

                        divItemTop.innerHTML = item.top || '';

                        var divItemBottom = document.createElement('div');
                        divItemBottom.setAttribute('class', 'bottom');

                        divItemBottom.innerHTML = item.bottom || '';

                        var divItemBg = document.createElement('div');
                        divItemBg.setAttribute('class', 'bg');

                        var divItemImage = document.createElement('div');
                        divItemImage.setAttribute('class', 'image');
                        divItemImage.setAttribute('style', '' +
                           (item.image ? 'background:#000 url(' + item.image + ') 100% 100% no-repeat; background-size: cover;' : ''));

                        divItemTitle.innerHTML = item.title || '';

                        divItem.appendChild(divItemTitle);
                        divItem.appendChild(divItemTop);
                        divItem.appendChild(divItemBody);
                        divItem.appendChild(divItemBottom);
                        divItem.appendChild(divItemBg);
                        divItem.appendChild(divItemImage);
                        divContent.appendChild(divItem);
                        div.appendChild(divContent);
                    });

                document.getElementsByTagName('body')[0].appendChild(div);

            }
        });

        var background = document.querySelector('#background');
        if (!background) {
            var div = document.createElement('div');
            div.setAttribute('id', 'background');
            document.getElementsByTagName('body')[0].appendChild(div);
        }

    }

    function keyDown(key) {
        key = typeof key === 'string'
            ? key.toLowerCase()
            : key;
        switch (key) {
            case 'enter':
            case 'ok':
            case 13:
                key = 'ok';
                break;
            case 'arrowleft':
            case 'leftarrow':
            case 'left':
            case 37:
                key = 'left';
                break;
            case 'arrowup':
            case 'uparrow':
            case 'up':
            case 38:
                key = 'up';
                break;
            case 'arrowright':
            case 'rightarrow':
            case 'right':
            case 39:
                key = 'right';
                break;
            case 'arrowdown':
            case 'downarrow':
            case 'down':
            case 40:
                key = 'down';
                break;
            default:
                key = '';
        }
        return key;
    }

    function setStyles() {
        var style = document.createElement('style');
        var styles = [
            '#background {' +
            'background: #000 url("' +
            TVwww.settings.backgrounds[Math.floor(Math.random()*TVwww.settings.backgrounds.length)] +
            '") center center no-repeat;' +
            'background-size: cover;' +
            '}',
            '#contents {' +
            'width:' + TVwww.settings.contents.w + 'px;' +
            TVwww.settings.contents.position + ': 50px;' +
            '}',
            '#contents .contents {' +
            'float:' + TVwww.settings.categories.position + ';' +
            '}',
            '#categories {' +
            'width:' + TVwww.settings.categories.w + 'px;' +
            TVwww.settings.categories.position + ': 50px;' +
            '}',
            '#categories .categories {' +
            'float:' + TVwww.settings.contents.position + ';' +
            '}',
            '#contents .contents .item {' +
            'width:' + Math.floor(TVwww.settings.contents.w / TVwww.settings.contents.columns) + 'px;' +
            'height:' + Math.floor(TVwww.settings.contents.h / TVwww.settings.contents.rows) + 'px;' +
            '}',
            '#contents .contents .item .title {' +
            'width:' + Math.floor(TVwww.settings.contents.w / TVwww.settings.contents.columns) + 'px;' +
            'height:' + Math.floor(TVwww.settings.contents.h / TVwww.settings.contents.rows) + 'px;' +
            'line-height:' + Math.floor(TVwww.settings.contents.h / TVwww.settings.contents.rows) + 'px;' +
            '}',
            '#categories .categories .item {' +
            'width:' + Math.floor(TVwww.settings.categories.w / TVwww.settings.categories.columns) + 'px;' +
            'height:' + Math.floor(TVwww.settings.categories.h / TVwww.settings.categories.rows) + 'px;' +
            '}',
            '#categories .categories .item .title {' +
            'width:' + Math.floor(TVwww.settings.categories.w / TVwww.settings.categories.columns) + 'px;' +
            'height:' + Math.floor(TVwww.settings.categories.h / TVwww.settings.categories.rows) + 'px;' +
            'line-height:' + Math.floor(TVwww.settings.categories.h / TVwww.settings.categories.rows) + 'px;' +
            '}',
            '#contents .contents .item.active .image {' +
            'top: -10px;' +
            'left: -10px;' +
            'width:' + Math.floor(TVwww.settings.contents.w / TVwww.settings.contents.columns + 20) + 'px;' +
            'height:' + Math.floor(TVwww.settings.contents.h / TVwww.settings.contents.rows + 20) + 'px;' +
            '}',
        ];
        style.innerHTML = styles.join('');
        document.getElementsByTagName('head')[0].appendChild(style);
    }

    document.addEventListener('keydown', function (event) {
        var key = event.key || event.keyCode;
        TVwww.active.key = key = keyDown(key);

        if (event.defaultPrevented || !key) {
            console.log(key);
            return;
        }

        var blocks = [];

        if (typeof TVwww.active[key] === 'string') {
            if (/^http|\//ig.test(TVwww.active[key])) {
                window.location.href = TVwww.active[key];
                return;
            }
            TVwww.setProp([TVwww.active.current, 'active'].j(), false);
            TVwww.setProp([TVwww.active[key], 'active'].j(), true);
            if (TVwww.active.current.indexOf('categories')+1 || TVwww.active[key].indexOf('categories')+1) {
                blocks.push('categories');
            }
            if (TVwww.active.current.indexOf('contents')+1 || TVwww.active[key].indexOf('contents')+1) {
                blocks.push('contents');
            }
        }
        else {
            TVwww.setProp([TVwww.active.current, 'active'].j(), false);
            TVwww.setProp([TVwww.active.display, 'contents', '0', 'active'].j(), true);
            if (TVwww.active.current.indexOf('categories')+1) blocks.push('categories');
            blocks.push('contents');
        }

        initActive();
        renderPage(blocks);

    }, false);

    initActive();
    renderPage();
    setStyles();

};

Object.deepExtend = function (destination, source) {
    for (var property in source) {
        if (source.hasOwnProperty(property) &&
            source[property] && source[property].constructor &&
            source[property].constructor === Object) {
            destination[property] = destination[property] || {};
            arguments.callee(destination[property], source[property]);
        } else {
            destination[property] = source[property];
        }
    }
    return destination;
};

Object.defineProperty(Object.prototype, 'getProp', {
    value: function (desc) {
        desc = typeof desc === 'string'
            ? desc
                .replace(/\s+/g, ' ')
                .replace(/(^\s*)|(\s*)$/g, '')
                .replace(/\.+/g, '.')
                .replace(/(^\.*)|(\.*)$/g, '')
            : desc;
        if (!desc) return this;
        var obj = this;
        var arr = desc.split('.');
        while (arr.length && (obj = obj[arr.shift()]));
        return obj;
    },
    enumerable: false
});

Object.defineProperty(Object.prototype, 'setProp', {
    value: function (desc, value) {
        desc = typeof desc === 'string'
            ? desc
                .replace(/\s+/g, ' ')
                .replace(/(^\s*)|(\s*)$/g, '')
                .replace(/\.+/g, '.')
                .replace(/(^\.*)|(\.*)$/g, '')
            : desc;
        if (!desc) return this;
        var obj = this;
        var arr = desc.split('.');
        var last = arr.pop();
        while (arr.length && (obj = obj[arr.shift()]));
        obj[last] = value;
        return obj;
    },
    enumerable: false
});

Object.prototype.j = function () {
    return this
        .map(function (s) {
            return (s + '')
                .replace(/\s+/g, ' ')
                .replace(/(^\s*)|(\s*)$/g, '')
                .replace(/\.+/g, '.')
                .replace(/(^\.*)|(\.*)$/g, '');
        })
        .filter(function (s) {
            return s && typeof s === 'string';
        })
        .join('.');
};

window.TVwwwDom = [];

window.TVwww = function (params) {
    TVwwwDom.push(new TVwwwRender(params));
};

window.TVwww.load = function (payload_json, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', payload_json);
    xhr.onreadystatechange = function (data) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var params = JSON.parse(data.currentTarget.response);
                window.TVwww(params);
                if (callback) callback();
            } else {
                console.log('Error TVwww - XMLHttpRequest status:', xhr.status);
                console.log('Error TVwww - File config not found');
            }
        }
    };
    xhr.send();
};