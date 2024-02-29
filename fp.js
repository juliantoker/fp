const generateBrowserFingerprint = () => {
    let fingerprint = {
        userAgent: navigator.userAgent,
        appVersion: navigator.appVersion,
        appName: navigator.appName,
        langage: navigator.language,
        languages: navigator.languages,
        platform: navigator.platform,
        productSub: navigator.productSub,
        maxTouchPoints: navigator.maxTouchPoints,
        javaEnabled: navigator.javaEnabled,
        doNotTrack: navigator.doNotTrack,
        dateTimeFormat: window.Intl.DateTimeFormat().resolvedOptions(),
        gamePads: navigator.getGamepads(),
        screenWidth: screen.width,
        screenHeight: screen.height,
        screenAvailWidth: screen.availWidth,
        screenAvailHeight: screen.availHeight,
        pixelDepth: screen.pixelDepth,
        colorDepth: screen.colorDepth,
        deviceXDPI: screen.deviceXDPI,
        deviceYDPI: screen.deviceYDPI,
        windowScreenX: window.screenX,
        windowScreenY: window.screenY,
        windowInnerWidth: window.innerWidth,
        windowInnerHeight: window.innerHeight,
        windowOutterWidth: window.outerWidth,
        windowOuterHeight: window.outerHeight,
        windowDevicePixelRatio: window.devicePixelRatio,
        screenOrientatoion: screen.orientation,
        screenOrientationType: screen.orientation.type,
        screenOrientationAngle: screen.orientation.angle,
        windowLocalStorageSupport: window.localStorage,
        windowSessionStorageSupport: window.sessionStorage,
        tanLargeNeg: Math.tan(-1e300),
        windowMenuBarVisible: window.menubar.visible,
        windowIsSecureContext: window.isSecureContext,
        screenFontSmoothEnabled: screen.screenFontSmoothEnabled,
        date1: new Date(0),
        date2: new Date("0001-1-1"),
        date3: new Date(0).setFullYear(),
        navigatorPlugins: navigator.plugins,
        navigatorNumPlugins: navigator.plugins.length,
        navigatorMimeTypes: navigator.mimeTypes
    };
    console.log(fingerprint);
    let ta = document.getElementById("display");
    ta.innerHTML = JSON.stringify(fingerprint);
    ta.style = "width: 100vw; height: 1000px;"
    document.body.append(ta);
    return fingerprint;
}