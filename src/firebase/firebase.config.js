// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2v3u89AqxZh9j8BjDdsq8Xa01IOBI7zM",
  authDomain: "chef-recipe-hunter-397b0.firebaseapp.com",
  projectId: "chef-recipe-hunter-397b0",
  storageBucket: "chef-recipe-hunter-397b0.appspot.com",
  messagingSenderId: "919403164680",
  appId: "1:919403164680:web:ee031b28c77d15cc144dbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app