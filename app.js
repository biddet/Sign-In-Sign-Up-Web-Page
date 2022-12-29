const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
  container.classList.remove("sign-up-mode");
});

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCgRSmjw1iWIcAVMXg5cd6Yic7cW69G15c",
  authDomain: "onid-1.firebaseapp.com",
  projectId: "onid-1",
  storageBucket: "onid-1.appspot.com",
  messagingSenderId: "23407192164",
  appId: "1:23407192164:web:7bb33752c48b7cf1769771",
  measurementId: "G-R6Z1SPWMJV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  const auth = firebase.auth();

// Sign Up function
  function signUp(){
    var  email = document.getElementById("sign_up_email");
    var  password = document.getElementById("sign_up_password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value)
    promise.catch(e => alert(e.message));

    alert("Signed Up");
    email.value='';
    password.value='';
  }

// Sign In function
  function signIn(){
   var  email = document.getElementById("sign_in_email").value;
   var  password = document.getElementById("sign_in_password");
    
   const promise = auth.signInWithEmailAndPassword(email.value, password.value);
promise.then(() => {
  // Sign-in was successful, so redirect the user to a different page
 window.location.href = 'welcome.html';
}).catch(e => {
  // Sign-in was unsuccessful, so display an error message
  alert(e.message);
});

   email.value='';
   password.value='';
 }

// Sign Out function
 function signOut(){

 		auth.signOut();
 		alert("Signed Out");

 	}
