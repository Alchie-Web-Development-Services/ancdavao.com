import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { Invoice } from "@/types/invoice";

export const getInvoicesByUid = async (uid: string): Promise<Invoice[]> => {
  const invoicesRef = collection(db, "invoices");
  const q = query(
    invoicesRef,
    where("external_id", "==", uid),
    orderBy("paid_at", "desc"),
  );
  const snapshot = await getDocs(q);
  const invoices: Invoice[] = snapshot.docs.map((d) => {
    const data = d.data() as Invoice;
    // Ensure the returned object contains the Firestore doc id
    return { ...data, id: d.id };
  });
  return invoices;
};
