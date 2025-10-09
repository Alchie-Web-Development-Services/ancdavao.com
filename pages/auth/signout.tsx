import Loading from "@/components/Loading";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function SignOut() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const signOutUser = async () => {
      await signOut(auth);
      router.push("/auth/login");
    };
    signOutUser();
  }, [user, loading, router]);

  return (
    <div className="min-h-fit flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Loading />
    </div>
  );
}
