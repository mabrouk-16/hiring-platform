// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
  apiKey: "AIzaSyDrqHTgQ8B4V6TCeVEMuar1WsUeApFcPKU",
  authDomain: "hiring-app-47535.firebaseapp.com",
  projectId: "hiring-app-47535",
  storageBucket: "hiring-app-47535.firebasestorage.app",
  messagingSenderId: "309132100227",
  appId: "1:309132100227:web:36041513bd92ac687f91b6",
  measurementId: "G-4ZRYNHWKMF",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);

  self.addEventListener("notificationclick", function (event) {
    event.notification.close();

    const routeToNavigate = payload.data.route || "/";

    event.waitUntil(
      clients
        .matchAll({
          type: "window",
          includeUncontrolled: true,
        })
        .then((clientList) => {
          for (const client of clientList) {
            if ("focus" in client) {
              return client.focus();
            }
          }

          return clients.openWindow("https://hiring-app.com");
        })
    );
  });
});
