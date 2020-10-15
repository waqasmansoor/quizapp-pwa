importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBcAkUDNd66Brh9oYbBImBRYtkO7V9wJkg",
    authDomain: "quiz-app-d8536.firebaseapp.com",
    databaseURL: "https://quiz-app-d8536.firebaseio.com",
    projectId: "quiz-app-d8536",
    storageBucket: "quiz-app-d8536.appspot.com",
    messagingSenderId: "443364745994",
    appId: "1:443364745994:web:95e18d6d4209b7fcbd90f3"
  };

  firebase.initializeApp(firebaseConfig)

  firebase.messaging();