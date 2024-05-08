
  // Import the functions you need from the SDKs you need
//   import firebase from "firebase/compat/app";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// contactForm.js
// import { firebase } from '/contactForm'; // Example import statement

// Your JavaScript code goes here

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

// const { onValue } = require("firebase/database");

  // Your web app's Firebase configuration















  const firebaseConfig = {
    apiKey: "AIzaSyDUoSTHNNscg3L-Ab9CjS_uAnvIqX-rFEE",
    authDomain: "contactform-ed105.firebaseapp.com",
    databaseURL: "https://contactform-ed105-default-rtdb.firebaseio.com",
    projectId: "contactform-ed105",
    storageBucket: "contactform-ed105.appspot.com",
    messagingSenderId: "248466849662",
    appId: "1:248466849662:web:bcb3c94ef03a1590da3d2f"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var contactFormDB= firebase.database().ref('contactForm');
  document.getElementById('contactForm').addEventListener("submit",submitForm);

//   import { getDatabase, ref, onValue } from "firebase/database";

// // Assuming contactFormDB is your database reference
// const dbRef = ref(getDatabase(), "https://contactform-ed105-default-rtdb.firebaseio.com/");

// // Attach an asynchronous callback to read the data at our posts reference
// onValue(dbRef, (snapshot) => {
//   const data = snapshot.val();
//   if (data) {
//     // Iterate over each child element
//     for (const key in data) {
//       if (Object.hasOwnProperty.call(data, key)) {
//         const element = data[key];
//         console.log(element); // Log the element value
//         // Here you can use element as needed
//       }
//     }
//   }
// }, {
//   // Optional cancellation callback in case of unsubscription
//   cancelCallback: (error) => {
//     console.error("Error during value retrieval:", error);
//   }
// });






















// //////////////////////////////////////////////////////////////////////////////////////////////////////

  function submitForm(e){
    e.preventDefault();
    var msgcontent = getElementVal('msgcontent');
    saveMessages(msgcontent);
  }
  const saveMessages = (msgcontent) =>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        msgcontent: msgcontent
    })


    // contactFormDB.on("value",function(snapshot){
    //   snapshot.forEach(function(element){
    //     console.log(element.val());
    //     //  label2.appendChild(element.val());
    //   })

    // });

  };



  const getElementVal = (id) =>{

    return document.getElementById(id).value;
  };

  // ------------------------------------------------------------------------------


var msgsuccess = document.getElementById('msgsuccess');

  function sendMsg(){
    msgsuccess.style.display='block';
    
  }
  // -----------------------------------------------------------------------------------




  







