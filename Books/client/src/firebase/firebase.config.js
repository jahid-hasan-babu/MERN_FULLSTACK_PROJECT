// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK12FQVm7yzdweMHzGDQ0xZ9sISQFbIEE",
  authDomain: "mern-book-inventory-b43b6.firebaseapp.com",
  projectId: "mern-book-inventory-b43b6",
  storageBucket: "mern-book-inventory-b43b6.appspot.com",
  messagingSenderId: "808079915102",
  appId: "1:808079915102:web:9f649922acb8e017fadccf",
  measurementId: "G-KRSY4LDTWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
