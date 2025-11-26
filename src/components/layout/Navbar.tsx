"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
  ];

  const navLinks = (
    <>
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition-colors ${
              isActive ? "text-cyan-600" : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );

  return (
    <header>
      <nav className="px-6 py-4 flex items-center justify-between">
        <div className="md:hidden text-lg font-bold text-gray-900">PR</div>

        {/* desktop navigation - right side */}
        <div className="hidden md:flex justify-end ml-auto">
          <div className="hidden md:flex rounded-4xl border border-gray-200 py-3 px-6 items-center gap-8 ">
            {navLinks}
          </div>
        </div>

        {/* mobile menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {open ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-10 pl-3">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-medium transition-colors ${
                        isActive
                          ? "text-cyan-600"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
