self.addEventListener('push', function(event) {
    var options = {
        body: event.data.text(),
        icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Chrome_icon_%282013-2019%29.png',
        badge: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Chrome_icon_%282013-2019%29.png',
    };

    event.waitUntil(
        self.registration.showNotification('الوقت انتهى!', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://plants0.github.io/00-00-00/')  // استبدل بعنوان موقعك
    );
});