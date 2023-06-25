// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzYtUBIHQZ_U51i-cxepQO4p9itilh6vc",
  authDomain: "job-otp.firebaseapp.com",
  projectId: "job-otp",
  storageBucket: "job-otp.appspot.com",
  messagingSenderId: "379895858268",
  appId: "1:379895858268:web:90a8404bf8f703d95a1299"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


















// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import 'firebase/auth';
// import {getAuth} from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB5otsMNi_KTZluI7I8cDin8RLVZZxjD9o",
//   authDomain: "otp-app-2f63c.firebaseapp.com",
//   projectId: "otp-app-2f63c",
//   storageBucket: "otp-app-2f63c.appspot.com",
//   messagingSenderId: "321692034778",
//   appId: "1:321692034778:web:a336bc4251ac820ebde7e3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export default app;