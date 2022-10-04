import type { App } from "vue";
import consola from "consola";
import { initializeApp, getApps } from "firebase/app";
import type { FirebaseApp } from "firebase/app";

export let firebaseApp: FirebaseApp;

export default {
  install(app: App) {
    const firebaseConfig = {
      apiKey: "AIzaSyCL2LshO2WHcEdVgDrlNLXUOaIDGXh1BAg",
      authDomain: "wins-3a54f.firebaseapp.com",
      databaseURL: "https://wins-3a54f.firebaseio.com",
      projectId: "wins-3a54f",
      storageBucket: "wins-3a54f.appspot.com",
      messagingSenderId: "296924241168",
      appId: "1:296924241168:web:1acbb402f661c497d29995",
      measurementId: "G-ZJVWXX9C8Z",
    };
    // Initialize Firebase
    consola.info("Initializing Firebase", getApps());
    firebaseApp = getApps()[0] || initializeApp(firebaseConfig);

    app.config.globalProperties.$firebaseApp = firebaseApp;
  },
};
