import { useAuth } from "@/context/AuthContext";
import { getInvoicesByUid } from "@/services/invoiceService";
import { Invoice } from "@/types/invoice";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";

export const DonationsList = () => {

    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const [invoices, setInvoices] = useState<Invoice[]>([]);
  
    useEffect(() => {
      const fetchInvoices = async () => {
        setLoading(true);
        const invoices = await getInvoicesByUid(user?.uid || "");
        setInvoices(invoices);
        setLoading(false);
      };
      fetchInvoices();
    }, [user]);

    if(loading) return <Loading className="!min-h-fit" />;
console.log(invoices)
    return (
        <div>
        {invoices.length === 0 ? (
          <p>No invoices found.</p>
        ) : (
          invoices.map((invoice) => (
            <div key={invoice.id} className="bg-white rounded-lg shadow p-4 mb-6">
              <p><strong>Date:</strong> {new Date(invoice.updated).toLocaleDateString()}</p>
              <p><strong>Amount:</strong> ₱{invoice.amount.toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    );
};