import { apps, initializeApp, credential, firestore } from "firebase-admin";

const serviceAccount = require("../../service-account.json");

if (apps.length === 0) {
  initializeApp({ credential: credential.cert(serviceAccount) });
}

export const db = firestore();

export const ReadingBook = db.collection("ReadingBook");
export const ReadingBookLog = db.collection("ReadingBookLog");
export const BookComment = db.collection("BookComment");
