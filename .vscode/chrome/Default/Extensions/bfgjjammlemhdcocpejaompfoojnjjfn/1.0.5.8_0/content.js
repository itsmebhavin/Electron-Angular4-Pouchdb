'use strict';

(function () {
    var printerLogicClient = $('#printerLogicClientInterface');
    if (printerLogicClient.length > 0 && typeof printerLogicClient.attr('chrome') === 'undefined') {
        printerLogicClient.attr('chrome', '');
        var port = chrome.runtime.connect();
        port.onMessage.addListener(function (message) {
            window.postMessage({
                type: 'PrinterLogicClientResponse',
                state: message.state,
                message: message.message,
                id: message.id
            }, '*');
        });
        window.addEventListener('message', function (e) {
            if (e.source !== window || !e.data.type || e.data.type !== 'PrinterLogicClientRequest')
                return;
            port.postMessage(e.data);
        });
    }
})();
