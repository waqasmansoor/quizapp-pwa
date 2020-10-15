// import firebase from 'firebase';
import * as firebase from 'firebase/app'
import 'firebase/messaging'



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

const messaging = firebase.messaging();

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // [START_EXCLUDE]
  // Update the UI to include the received message.

  // [END_EXCLUDE]
});

function resetUI(){
  messaging.getToken().then((currentToken) => {
    if (currentToken) {
      console.log(currentToken)
    } else {
      // Show permission request.
      console.log('No Instance ID token available. Request permission to generate one.');
      // Show permission UI.
      
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    
  });
}

function InitNotification(){
  
  console.log('Requesting permission...');
    // [START request_permission]
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // TODO(developer): Retrieve an Instance ID token for use with FCM.
        // [START_EXCLUDE]
        // In many cases once an app has been granted notification permission,
        // it should update its UI reflecting this.
        resetUI();
        // [END_EXCLUDE]
      } else {
        console.log('Unable to get permission to notify.');
      }
    });

}

export default InitNotification

