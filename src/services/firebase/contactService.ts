import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  FieldValue,
} from "firebase/firestore";

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: FieldValue;
}

export const createContactMessage = async (
  messageData: Omit<ContactMessage, "createdAt">,
) => {
  try {
    const docRef = await addDoc(collection(db, "contactMessages"), {
      ...messageData,
      createdAt: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};
