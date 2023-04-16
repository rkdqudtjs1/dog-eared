import admin from "firebase-admin";
const serviceAccount = require(`../../../service-account.json`);

if (admin.apps.length === 0) {
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}

export const db = admin.firestore();

export const ReadingBook = db.collection("ReadingBook");
export const ReadingBookLog = db.collection("ReadingBookLog");
export const BookComment = db.collection("BookComment");

import { QueryDocumentSnapshot } from "@google-cloud/firestore";

export const docToData = <T>(doc: QueryDocumentSnapshot<T>) => {
  const base: ModelBase = {
    id: doc.id,
    createdAt: String(doc.createTime.toMillis()),
    updatedAt: String(doc.updateTime.toMillis()),
  };

  return {
    ...doc.data(),
    ...base,
  };
};
