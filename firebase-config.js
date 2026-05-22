import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app-check.js";

const firebaseConfig = {
  apiKey: "AIzaSyDLWiR6cC8Meo9BouqswEyWG4tA3otKk88",
  authDomain: "cyberhax-game.firebaseapp.com",
  databaseURL: "https://cyberhax-game-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cyberhax-game",
  storageBucket: "cyberhax-game.firebasestorage.app",
  messagingSenderId: "655375801626",
  appId: "1:655375801626:web:ee2a97b84a3fc01ae560a3"
};

const app = initializeApp(firebaseConfig);

// Initialize App Check with your reCAPTCHA Enterprise Site Key
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider('6Lf4t_YsAAAAAItA1Po0WeidfKYeSgqmf_FoSf0Y'),
  isTokenAutoRefreshEnabled: true
});

export const db = getDatabase(app);
