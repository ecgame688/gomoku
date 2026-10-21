(function () {
    'use strict';
    var ua = navigator.userAgent || navigator.vendor || '';
    var isIOS = /iPad|iPhone|iPod/i.test(ua) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    var isAndroid = /android/i.test(ua);
    var status = document.getElementById('status');
    var msg = window.installMessages || {};
    var el = isIOS ? document.getElementById('astore') : isAndroid ? document.getElementById('gplay') : null;
    if (!el) return;
    if (!el.href) {
        // App Store chưa có: không tự chuyển iPhone/iPad.
        if (isIOS && msg.soonIOS) status.textContent = msg.soonIOS;
        return;
    }
    status.textContent = isIOS ? msg.openingIOS : msg.opening;
    window.location.replace(el.href);
    // Giữ nút bấm được nếu trình duyệt trong app chặn chuyển trang.
    window.setTimeout(function () {
        status.textContent = msg.fallback;
    }, 1200);
}());
