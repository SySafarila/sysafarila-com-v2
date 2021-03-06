import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// legacy : v8
// if (!firebase.apps.length) {
//   firebase.initializeApp(clientCredentials)
//   // Check that `window` is in scope for the analytics module!
//   if (typeof window !== 'undefined') {
//     // Enable analytics. https://firebase.google.com/docs/analytics/get-started
//     if ('measurementId' in clientCredentials) {
//       firebase.analytics()
//       firebase.performance()
//     }
//   }
// }

// latest : v9
let analytics;
if (!getApps().length) {
  const app = initializeApp(clientCredentials);
  if (typeof window !== "undefined") {
    // Enable analytics. https://firebase.google.com/docs/analytics/get-started
    if ("measurementId" in clientCredentials) {
      const analytics2 = getAnalytics(app);
      analytics = analytics2;
    }
  }
}

const db = getFirestore();

export {
  db,
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  analytics,
};
