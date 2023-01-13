import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { initializeApp } from "firebase/app";

//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals())
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_sdYoW6Dt4U3t5B-5w991e-fIbDMKjq8",
  authDomain: "dylon43625.firebaseapp.com",
  projectId: "dylon43625",
  storageBucket: "dylon43625.appspot.com",
  messagingSenderId: "27796603014",
  appId: "1:27796603014:web:9089be7a3f423bb6ea5107"
};

// Initialize Firebase
initializeApp(firebaseConfig);