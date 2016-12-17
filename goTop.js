function win(attr, val) {
    if (typeof val !== 'undefined') {
        document.documentElement[attr] = val;
        document.body[attr] = val;
    }
    return document.documentElement[attr] || document.body[attr];
}

function goTop(config) {
    config.speed = config.speed || 120;
    config.rate = config.rate || 8;
    config.effect = config.effect || false;
    config.dis = config.dis || win("clientHeight");
    var target=null;
    config.container.onclick = function () {
        config.container.timer && clearInterval(config.container.timer);
        config.container.timer = setInterval(function () {
            target = win("scrollTop");
            target -= config.effect ? Math.ceil(target / config.rate) : config.speed;
            if (target <= 0) {
                clearInterval(config.container.timer);
                win("scrollTop", 0);
                window.onscroll = fn;
                return;
            }
            win("scrollTop", target);
        }, 20);
        config.container.style.display = "none";
        window.onscroll = null;
        window.onmousewheel = function () {
            clearInterval(config.container.timer);
            window.onscroll = fn;
        }
    };
    window.onscroll = fn;
    function fn() {
        var scrollHeight = win("scrollTop");
        if (scrollHeight > config.dis) {
            config.container.style.display = "block";
        } else {
            config.container.style.display = "none";
        }
    }
}
