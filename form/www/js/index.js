function redirectTo(location) {
    window.open = cordova.InAppBrowser.open;
    var d = setInterval(function () {
        window.open(location, '_self',
            'location=no,zoom=no,toolbar=no');
        clearInterval(d);
    }, 1500);
}

var app = {
        initialize: function () {
            document.addEventListener('deviceready',
                this.onDeviceReady.bind(this), false);
        },
        onDeviceReady: function () {
            this.receivedEvent('deviceready');
        },
        receivedEvent: function (id) {
            if (navigator.connection.type == Connection.NONE) {
                navigator.notification.alert('An internet connection is required to continue ');
                }
                else {
                    redirectTo("http://systemcrud.42web.io/");
                }
            }
        };
        app.initialize();