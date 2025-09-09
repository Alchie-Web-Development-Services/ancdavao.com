import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { UserProfile } from "@/types/user";

export const createUserProfile = async (
  uid: string,
  data: Partial<UserProfile>,
) => {
  await setDoc(doc(db, "users", uid), { ...data, uid });
};

export const getUserProfile = async (
  uid: string,
): Promise<UserProfile | null> => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data() as UserProfile;
  } else {
    return null;
  }
};

export const updateUserProfile = async (
  uid: string,
  data: Partial<UserProfile>,
) => {
  await updateDoc(doc(db, "users", uid), data);
};

export const deleteUserProfile = async (uid: string) => {
  await deleteDoc(doc(db, "users", uid));
};
