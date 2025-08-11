import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { Pledge } from "@/types/pledge";

export const createPledge = async (uid: string, data: Partial<Pledge>) => {
  await setDoc(doc(db, "pledges", uid), { ...data, uid });
};

export const getPledge = async (uid: string): Promise<Pledge | null> => {
  const docRef = doc(db, "pledges", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data() as Pledge;
  } else {
    return null;
  }
};

export const updatePledge = async (uid: string, data: Partial<Pledge>) => {
  await updateDoc(doc(db, "pledges", uid), data);
};

export const deletePledge = async (uid: string) => {
  await deleteDoc(doc(db, "pledges", uid));
};
