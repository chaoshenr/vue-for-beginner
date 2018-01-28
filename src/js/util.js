function dateFormat(fmt, date) { //author: meizz   
    var o = {
        "M+": date.getMonth() + 1,               //月份   
        "d+": date.getDate(),                    //日   
        "h+": date.getHours(),                   //小时   
        "m+": date.getMinutes(),                 //分   
        "s+": date.getSeconds(),                 //秒   
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
        "S": date.getMilliseconds()             //毫秒   
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
function getScrollTop() {
    if( document.documentElement && document.documentElement.scrollTop ) {
        return document.documentElement.scrollTop;
    } else if ( document.body ) {
        return document.body.scrollTop
    }
    return new Error("environment")
}

function getClientHeight() {
    if( document.body.clientHeight && document.documentElement.clientHeight ) {
        return Math.min(document.body.clientHeight, document.documentElement.clientHeight);        
    } else {
        return Math.max(document.body.clientHeight, document.documentElement.clientHeight);   
    }
}
function getScrollHeight() {
    return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
}

function scroll(callback) {
    if(window.onscroll) {
        window.onscroll = function () {
            callback();
        }
    }else if (window.addEventListener) {
        window.addEventListener("scroll", function () {
            callback();
        })
    }else {
        window.attactEvent("onscroll", function () {
            callback();
        })
    }
}
export default {
    dateFormat: dateFormat,
    getScrollTop: getScrollTop,
    getClientHeight: getClientHeight,
    getScrollHeight: getScrollHeight,
    scroll: scroll
}