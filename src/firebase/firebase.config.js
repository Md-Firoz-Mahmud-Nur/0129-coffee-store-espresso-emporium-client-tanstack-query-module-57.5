// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvSdUr0VWF8HWiaiOWj8SvLiaWKez3kKs",
  authDomain: "s0122-coffee-store-mod-56-5.firebaseapp.com",
  projectId: "s0122-coffee-store-mod-56-5",
  storageBucket: "s0122-coffee-store-mod-56-5.appspot.com",
  messagingSenderId: "120532249227",
  appId: "1:120532249227:web:f66c6dac7e782ce7f4828e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
