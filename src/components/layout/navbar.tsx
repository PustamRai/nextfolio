"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Header() {
   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const [activeSection, setActiveSection] = useState("home");

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 10);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   useEffect(() => {
      const observerOptions = {
         root: null,
         rootMargin: "-20% 0px -60% 0px",
         threshold: 0.1,
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               setActiveSection(entry.target.id);
            }
         });
      };

      const observer = new IntersectionObserver(
         observerCallback,
         observerOptions
      );

      const sections = ["home", "about", "skills", "projects"];
      sections.forEach((sectionId) => {
         const element = document.getElementById(sectionId);
         if (element) {
            observer.observe(element);
         }
      });

      return () => observer.disconnect();
   }, []);

   const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
         const headerHeight = 64; // Fixed header height
         const offsetTop = element.offsetTop - headerHeight;

         // Close mobile menu immediately to prevent interference
         setIsOpen(false);

         // Small delay to ensure menu closes before scrolling
         setTimeout(() => {
            window.scrollTo({
               top: offsetTop,
               behavior: "smooth",
            });
         }, 50);
      } else {
         setIsOpen(false);
      }
   };

   const navItems = [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
   ];

   return (
      <header
         className={cn(
            "fixed top-0 z-50 w-full transition-all duration-300 ",
            scrolled
               ? "bg-slate-950 backdrop-blur-lg shadow-sm border-b border-border/40"
               : "bg-transparent"
         )}
      >
         <div className="max-w-7xl mx-auto flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Button
               onClick={() => scrollToSection("home")}
               className="flex items-center space-x-2 border-0 bg-transparent px-2 sm:px-3 py-1 sm:py-2 min-h-[44px] min-w-[44px]"
            >
               <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
               >
                  <span className="text-xl sm:text-2xl font-bold gradient-text">
                     PR
                  </span>
               </motion.div>
            </Button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2 xl:space-x-6">
               <div className="relative flex space-x-1 xl:space-x-4 items-center">
                  {navItems.map((link, index) => {
                     const isActive =
                        activeSection === link.href.replace("#", "");
                     return (
                        <motion.div
                           key={link.name}
                           initial={{ opacity: 0, y: -10 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.3, delay: index * 0.1 }}
                           className="relative"
                        >
                           <button
                              onClick={(e) => {
                                 e.preventDefault();
                                 scrollToSection(link.href.replace("#", ""));
                              }}
                              className={cn(
                                 "text-xs sm:text-sm font-medium transition-colors px-2 xl:px-3 py-2 rounded-md relative bg-transparent border-none cursor-pointer hover:text-cyan-200 min-h-[44px] flex items-center",
                                 isActive ? "text-cyan-500" : ""
                              )}
                           >
                              {link.name}
                              {isActive && (
                                 <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500"
                                    layoutId="activeTab"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                 />
                              )}
                           </button>
                        </motion.div>
                     );
                  })}
               </div>
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center lg:hidden space-x-4">
               <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle Menu"
                  className="relative min-h-[44px] min-w-[44px] p-2"
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
                        <X className="h-5 w-5 sm:h-6 sm:w-6" />
                     ) : (
                        <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                     )}
                  </motion.div>
               </Button>
            </div>
         </div>

         {/* Mobile Navigation Menu */}
         <motion.div
            className="lg:hidden overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: isOpen ? "auto" : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
         >
            <div className="px-4 sm:px-6 py-4 bg-slate-900 backdrop-blur-md border-t border-border/20">
               <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => {
                     const isActive =
                        activeSection === item.href.replace("#", "");
                     return (
                        <button
                           key={item.name}
                           onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(item.href.replace("#", ""));
                           }}
                           className={cn(
                              "text-base font-medium transition-colors py-3 px-4 rounded-lg bg-transparent border-none cursor-pointer hover:text-primary hover:bg-cyan-200 text-left relative min-h-[44px] flex items-center",
                              isActive ? "text-cyan-500 " : ""
                           )}
                        >
                           {item.name}
                           {isActive && (
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 rounded-r" />
                           )}
                        </button>
                     );
                  })}
               </nav>
            </div>
         </motion.div>
      </header>
   );
}
