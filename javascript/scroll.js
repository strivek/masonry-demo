function getViewPortH() {
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
                console.log(offsetTop);
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
    var elem = document.querySelector("h1");
    
    getOffset(elem);