  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCZniVDutLapZr3A6tu0qEYKButKT5QjTI",
    authDomain: "login-ba250.firebaseapp.com",
    projectId: "login-ba250",
    storageBucket: "login-ba250.appspot.com",
    messagingSenderId: "808923379443",
    appId: "1:808923379443:web:737c1735f034bd1042a986"
  };

  const app = initializeApp(firebaseConfig);
  const auth= getAuth(app);
  auth.languageCode='en';
  const provider = new GoogleAuthProvider();

  const SignWithGoogleBtn= document.getElementById('googleBtn');
  SignWithGoogleBtn.addEventListener('click', function(){
    // alert("5");

    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href="/jjj.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });

  });
