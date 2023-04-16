import admin from "firebase-admin";

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || "{}")
    ),
  });
}

export const db = admin.firestore();

export const ReadingBook = db.collection("ReadingBook");
export const ReadingBookLog = db.collection("ReadingBookLog");
export const BookComment = db.collection("BookComment");

import { QueryDocumentSnapshot } from "@google-cloud/firestore";

export const docToData = <T>(doc: QueryDocumentSnapshot<T>) => {
  const base: ModelBase = {
    id: doc.id,
    createdAt: doc.createTime.toMillis(),
    updatedAt: doc.updateTime.toMillis(),
  };

  return {
    ...doc.data(),
    ...base,
  };
};
