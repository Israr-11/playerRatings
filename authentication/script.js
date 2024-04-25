import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js';
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCXtfvVEYBGIGJJsi12kPUKwjpmOy4FtWQ",
    authDomain: "authorization-1-63f5b.firebaseapp.com",
    projectId: "authorization-1-63f5b",
    storageBucket: "authorization-1-63f5b.appspot.com",
    messagingSenderId: "908216980624",
    appId: "1:908216980624:web:f7f45cc38a42ef1bb73415"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const signupForm = document.getElementById('signup-form');
  const loginForm = document.getElementById('login-form');

  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const fname = signupForm['fname'].value;
        const lname = signupForm['lname'].value;
        const email = signupForm['email'].value;
        const password = signupForm['password'].value;

        try {
            // Create the user
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update user profile with first and last name
            await updateProfile(user, { displayName: `${fname} ${lname}` });

            console.log('User created with display name:', user.displayName);
            window.location.href = 'index.html';
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        }
    });
}




  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = loginForm['email'].value;
      const password = loginForm['password'].value;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("The user in the loginForm:", user)
          const fname = user.displayName; // Access the display name
          console.log('User logged in:', user);
          window.location.href = 'Dashboard.html?username=' + fname;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
        });
    });
  }
});
