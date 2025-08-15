"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 10);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const scrollToSection = (sectionId: string) => {
      setIsOpen(false);
      const element = document.getElementById(sectionId);
      if (element) {
         const offsetTop =
            element.getBoundingClientRect().top + window.pageYOffset;
         window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
         });
      }
   };

   const navItems = [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Education", href: "#education" },
      { name: "Contact Me", href: "#contact" },
   ];

   return (
      <header
         className={cn(
            "fixed top-0 z-50 w-full transition-all duration-300 ",
            scrolled
               ? "bg-background/70 backdrop-blur-lg shadow-sm border-b border-border/50"
               : "bg-transparent"
         )}
      >
         <div className="max-w-7xl mx-auto flex h-16 items-center justify-between">
            <Button
               onClick={() => scrollToSection("home")}
               className="flex items-center space-x-2 bg-blue-400"
            >
               <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
               >
                  <span className="text-2xl font-bold gradient-text">PR</span>
               </motion.div>
            </Button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
               <div className="relative flex space-x-4 items-center">
                  {navItems.map((link, index) => {
                     return (
                        <motion.div
                           key={link.name}
                           initial={{ opacity: 0, y: -10 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.3, delay: index * 0.1 }}
                           className="relative"
                        >
                           <Link
                              href={link.href}
                              onClick={() => scrollToSection(link.href)}
                              className={cn(
                                 "text-sm font-medium transition-colors px-3 py-2 rounded-md relative"
                              )}
                           >
                              {link.name}
                           </Link>
                        </motion.div>
                     );
                  })}
               </div>
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center md:hidden space-x-4">
               <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle Menu"
                  className="relative"
               >
                  <motion.div
                     initial={false}
                     animate={isOpen ? "open" : "closed"}
                     variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 },
                     }}
                     transition={{ duration: 0.3 }}
                  >
                     {isOpen ? (
                        <X className="h-6 w-6" />
                     ) : (
                        <Menu className="h-6 w-6" />
                     )}
                  </motion.div>
               </Button>
            </div>
         </div>

         {/* Mobile Navigation Menu */}
         <motion.div
            className="md:hidden overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: isOpen ? "auto" : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
         >
            <div className="container py-4 bg-background/95 backdrop-blur-sm">
               <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => {
                     return (
                        <Link
                           key={item.name}
                           href={item.href}
                           onClick={() => scrollToSection(item.href)}
                           className={cn(
                              "text-sm font-medium transition-colors py-2 px-3 rounded-md"
                           )}
                        >
                           {item.name}
                        </Link>
                     );
                  })}
               </nav>
            </div>
         </motion.div>
      </header>
   );
}
