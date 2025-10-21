import { useAuth } from "@/context/AuthContext";
import { getInvoicesByEmail } from "@/services/firebase/invoiceService";
import { Invoice } from "@/types/invoice";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import { PaymentCard } from "./PaymentCard";

export const DonationsList = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      setLoading(true);
      const invoices = await getInvoicesByEmail(user?.email || "");
      setInvoices(invoices);
      setLoading(false);
    };
    fetchInvoices();
  }, [user]);

  if (loading) return <Loading className="!min-h-fit" />;

  return (
    <div>
      {invoices.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <p>No donations found.</p>
        </div>
      ) : (
        invoices.map((invoice) => (
          <PaymentCard key={invoice.id} invoice={invoice} />
        ))
      )}
    </div>
  );
};
