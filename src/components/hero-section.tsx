"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpCircle, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function HeroSection() {
   const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
         },
      },
   };

   const itemVariants: Variants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.6,
            ease: "easeOut",
         },
      },
   };

   const socialVariants: Variants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
         opacity: 1,
         scale: 1,
         transition: {
            duration: 0.4,
            ease: "easeOut",
         },
      },
   };

   const floatingVariants: Variants = {
      animate: {
         y: [0, -10, 0],
         transition: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
         },
      },
   };

   return (
      <section
         id="home"
         className="py-20 md:py-32 flex flex-col items-center justify-center min-h-[90vh]"
      >
         <div className="container px-4 md:px-6 mx-auto">
            <motion.div
               className="flex flex-col items-center space-y-4 text-center"
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.3 }}
            >
               <motion.div className="space-y-2" variants={itemVariants}>
                  <motion.h1
                     className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
                     variants={itemVariants}
                  >
                     Hi, I&apos;m{" "}
                     <motion.span
                        className="gradient-text"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                     >
                        Pustam Rai
                     </motion.span>
                  </motion.h1>
                  <motion.p
                     className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl"
                     variants={itemVariants}
                  >
                     <span className="mt-4">
                        <span>
                           Full Stack Developer | MERN & Next.js Enthusiast
                        </span>
                     </span>
                     <noscript>
                        <span>Full Stack Developer | JavaScript Expert</span>
                     </noscript>
                  </motion.p>
               </motion.div>

               <motion.div
                  className="max-w-[700px] text-muted-foreground"
                  variants={itemVariants}
               >
                  <p className="text-lg">
                     I build fast, scalable, and user-friendly web applications
                     using Next.js, React, TypeScript, Node.js, Express, and
                     MongoDB. From crafting smooth frontend experiences to
                     architecting robust backend systems, I turn ideas into
                     functional digital solutions.
                  </p>
               </motion.div>

               <motion.div
                  className="flex gap-4 mt-6"
                  variants={{
                     hidden: {},
                     visible: {
                        transition: {
                           staggerChildren: 0.1,
                        },
                     },
                  }}
               >
                  <motion.div variants={socialVariants}>
                     <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:scale-110 transition-transform"
                     >
                        <Link
                           href="https://github.com/maskeynihal"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <Github className="h-5 w-5" />
                           <span className="sr-only">GitHub</span>
                        </Link>
                     </Button>
                  </motion.div>
                  <motion.div variants={socialVariants}>
                     <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:scale-110 transition-transform"
                     >
                        <Link
                           href="https://linkedin.com/in/maskeynihal"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <Linkedin className="h-5 w-5" />
                           <span className="sr-only">LinkedIn</span>
                        </Link>
                     </Button>
                  </motion.div>
                  <motion.div variants={socialVariants}>
                     <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:scale-110 transition-transform"
                     >
                        <Link href="mailto:t3w4e0rdaf6f@opayq.com">
                           <Mail className="h-5 w-5" />
                           <span className="sr-only">Email</span>
                        </Link>
                     </Button>
                  </motion.div>
               </motion.div>
            </motion.div>

            <motion.div
               className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block js-only"
               variants={floatingVariants}
               animate="animate"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 1.5, duration: 0.5 }}
            >
               <Link
                  href="#"
                  onClick={(e) => {
                     e.preventDefault();
                     window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
               >
                  <motion.div
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     <ArrowUpCircle className="h-10 w-10 text-primary" />
                  </motion.div>
               </Link>
            </motion.div>
         </div>
      </section>
   );
}
