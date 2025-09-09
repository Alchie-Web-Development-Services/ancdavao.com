import { useAuth } from "@/context/AuthContext";
import { getPledgesByUid } from "@/services/firebase/pledgeService";
import { Pledge } from "@/types/pledge";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import { PledgeCard } from "./PledgeCard";

export const PledgeList = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [pledges, setPledges] = useState<Pledge[]>([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      setLoading(true);
      const pledges = await getPledgesByUid(user?.uid || "");
      setPledges(pledges);
      setLoading(false);
    };
    fetchInvoices();
  }, [user]);

  if (loading) return <Loading className="!min-h-fit" />;

  return (
    <div>
      {pledges.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <p>No pledges found.</p>
        </div>
      ) : (
        pledges.map((pledge) => (
          <PledgeCard key={pledge.id} pledge={pledge} />
        ))
      )}
    </div>
  );
};
