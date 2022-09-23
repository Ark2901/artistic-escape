import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAbo_SLCuHBK44ciay6YYxwgNBsFXvoTh8",
    authDomain: "artistic-escape-af3a1.firebaseapp.com",
    projectId: "artistic-escape-af3a1",
    storageBucket: "artistic-escape-af3a1.appspot.com",
    messagingSenderId: "333248630316",
    appId: "1:333248630316:web:9cdb308716a09b61af0b89"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const loginForm = document.getElementsByClassName('form')[0];
const modal = document.getElementById("myModal");
const modalTxt = document.getElementById("modalText");
const span = document.getElementsByClassName("close1")[0];
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const pass = event.target[1].value;

    createUserWithEmailAndPassword(auth, email, pass)
        .then(async (userCredential) => {
            // Sign up
            const user = userCredential.user;
            console.log(user)
            modalTxt.innerText = 'Sign-Up Successful\nPlease Wait, redirecting to home page'
            modal.style.display = "block";
            await delay(2000);
            window.location.href = './index.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            modalTxt.innerText = `An error occured, Please try again!\nERROR CODE: ${errorCode.split('/')[1]}`
            modal.style.display = "block";
        });
})

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}