'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Overview from "@/components/routes/overview";
import Loading from "@/components/loading";

export default function Page() {
  const router = useRouter();
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/signin');
    } else {
      setIsToken(true);
    }
  }, [router]);

  return isToken ? <Overview /> : null;
}
