

export default {
    isiOS,
    isAndroid
}

export const isiOS = function () {
    var u = navigator.userAgent,
        app = navigator.appVersion;
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
}

export const isAndroid = function () {
    var u = navigator.userAgent,
        app = navigator.appVersion;
    return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
}