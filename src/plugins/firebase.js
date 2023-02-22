import Vue from 'vue'
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC_pyOKMKUJaH8MCF_Jn245Vm_BjBM6574",
    authDomain: "pheonix-bc365.firebaseapp.com",
    projectId: "pheonix-bc365",
    storageBucket: "pheonix-bc365.appspot.com",
    messagingSenderId: "378208194064",
    appId: "1:378208194064:web:c063074d4b52e6a81e4495",
    measurementId: "G-KPQV66P42R"
};
const app = initializeApp(firebaseConfig);
Vue.prototype.$FBAUTH = getAuth(app)
Vue.prototype.$createUserWithEmailAndPassword = createUserWithEmailAndPassword
Vue.prototype.$signInWithEmailAndPassword = signInWithEmailAndPassword

