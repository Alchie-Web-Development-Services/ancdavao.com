import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { Pledge } from "@/types/pledge";

export const getPledgesByUid = async (uid: string): Promise<Pledge[]> => {
  const pledgesRef = collection(db, "pledges");
  const q = query(
    pledgesRef,
    where("external_id", "==", uid),
    orderBy("paid_at", "desc"),
  );
  const snapshot = await getDocs(q);
  const pledges: Pledge[] = snapshot.docs.map((d) => {
    const data = d.data() as Pledge;
    // Ensure the returned object contains the Firestore doc id
    return { ...data, id: d.id };
  });
  return pledges;
};
