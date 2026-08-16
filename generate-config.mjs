import { writeFileSync } from "node:fs";

const required = [
  "FIREBASE_API_KEY",
  "FIREBASE_AUTH_DOMAIN",
  "FIREBASE_PROJECT_ID",
  "FIREBASE_STORAGE_BUCKET",
  "FIREBASE_MESSAGING_SENDER_ID",
  "FIREBASE_APP_ID",
];

const missing = required.filter((key) => !process.env[key]);
if (missing.length) {
  console.warn(`Missing Firebase environment variables: ${missing.join(", ")}`);
  console.warn("The site will deploy, but Firebase features will not work until these are set in Vercel.");
}

const value = (key, fallback) => JSON.stringify(process.env[key] || fallback);
const js = `export const firebaseConfig = {
  apiKey: ${value("FIREBASE_API_KEY", "__FIREBASE_API_KEY__")},
  authDomain: ${value("FIREBASE_AUTH_DOMAIN", "__FIREBASE_AUTH_DOMAIN__")},
  projectId: ${value("FIREBASE_PROJECT_ID", "__FIREBASE_PROJECT_ID__")},
  storageBucket: ${value("FIREBASE_STORAGE_BUCKET", "__FIREBASE_STORAGE_BUCKET__")},
  messagingSenderId: ${value("FIREBASE_MESSAGING_SENDER_ID", "__FIREBASE_MESSAGING_SENDER_ID__")},
  appId: ${value("FIREBASE_APP_ID", "__FIREBASE_APP_ID__")}
};
`;
writeFileSync("firebase-config.js", js);
