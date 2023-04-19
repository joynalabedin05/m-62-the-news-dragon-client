// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm5hreBlCFw8Bq3a9JdVHkZ6MuB-O0N68",
  authDomain: "the-news-dragon-c1cca.firebaseapp.com",
  projectId: "the-news-dragon-c1cca",
  storageBucket: "the-news-dragon-c1cca.appspot.com",
  messagingSenderId: "841224429780",
  appId: "1:841224429780:web:0b9753521dc93cd6971b41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;