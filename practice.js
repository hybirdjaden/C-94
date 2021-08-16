 var firebaseConfig = {

    apiKey: "AIzaSyDgLSEbT2Sevn20P6qHkxBFXbY0NzKHfv4",

    authDomain: "kwitter-e1ded.firebaseapp.com",

    databaseURL: "https://kwitter-e1ded-default-rtdb.firebaseio.com",

    projectId: "kwitter-e1ded",

    storageBucket: "kwitter-e1ded.appspot.com",

    messagingSenderId: "1036441011186",

    appId: "1:1036441011186:web:4f23b5bd7933ef43c8e16b"

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding the username"
    });
}
