import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
