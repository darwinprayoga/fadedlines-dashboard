"use client";

import Navbar from "@/components/ui/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar>{children}</Navbar>
    </main>
  );
}
