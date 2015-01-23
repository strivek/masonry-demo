function getViewportH() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

function scrollY() {
    return window.pageYOffset || document.scrollTop;
}

//http://stackoverflow.com/a/5598797/989439
function getOffset(el) {
    var offsetTop = 0,
        offsetLeft = 0;
    do {
        if (!isNaN(el.offsetTop)) {
            offsetTop += el.offsetTop;
        }
        if (!isNaN(el.offsetLeft)) {
            offsetLeft += el.offsetLeft;
        }
    } while (el = el.offsetParent)

    return {
        top: offsetTop,
        left: offsetLeft
    }
}

function getDocumentHeight() {
    return window.document.documentElement.offsetHeight;
}

function inViewport(el, h) {
    var docH = getDocumentHeight(),
        elH = el.offsetHeight,
        viewPort = getViewportH(),
        scrolled = scrollY(),
        elTop = getOffset(el).top,
        windowBottomToBottom = 1 - (docH - scrolled - viewPort) / elH;
    return windowBottomToBottom;
}

function inViewport1(el, h) {
    var elNavToBottom = el.offsetHeight,
        elNavToRoot = getOffset(el).top,
        scrolled = scrollY(),
        viewPort = getViewportH(),
        windowBottomToBottom = 1 - (elNavToBottom + elNavToRoot - scrolled - viewPort) / elNavToBottom;

    return windowBottomToBottom >= 0.7 && windowBottomToBottom <= 0.98;

}

var elem = document.querySelector(".list2");
window.addEventListener('scroll', function() {
    console.log(inViewport1(elem));
})
