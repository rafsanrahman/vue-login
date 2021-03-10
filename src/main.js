import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCen17Z8Lh1O-0pqGsX9LPSZYTBODnr6VA",
    authDomain: "vue-login-b5fcb.firebaseapp.com",
    projectId: "vue-login-b5fcb",
    storageBucket: "vue-login-b5fcb.appspot.com",
    messagingSenderId: "18792788044",
    appId: "1:18792788044:web:35a528e07c12b90f2b04e9"
  };

  firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')

