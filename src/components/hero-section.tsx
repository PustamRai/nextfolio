"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

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

   return (
      <section
         id="home"
         className="relative py-12  md:py-20 flex flex-col items-center justify-center min-h-[90vh] tech-pattern overflow-hidden"
      >
         <div className="container px-4 md:px-6 mx-auto relative z-10">
            <motion.div
               className="flex flex-col items-center space-y-8 text-center"
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.3 }}
            >
               <div className="relative">
                  <Image
                     src="/pustamrai.png"
                     alt="Pustam Rai"
                     width={600}
                     height={600}
                     className="w-30 h-30 md:w-32 md:h-32 object-cover rounded-full transition-all duration-300"
                  />
               </div>

               <motion.div className="space-y-4" variants={itemVariants}>
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
                     className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl font-medium"
                     variants={itemVariants}
                  >
                     <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-300 bg-clip-text text-transparent font-semibold">
                        Full Stack Developer | MERN & Next.js Enthusiast
                     </span>{" "}
                  </motion.p>
               </motion.div>

               <motion.div
                  className="max-w-[700px] text-gray-200 space-y-4"
                  variants={itemVariants}
               >
                  <p className="text-lg leading-relaxed">
                     I build fast, scalable, and user-friendly web applications
                     using{" "}
                     <span className="text-blue-300 font-medium">Next.js</span>,{" "}
                     <span className="text-blue-300 font-medium">React</span>,{" "}
                     <span className="text-blue-300 font-medium">
                        TypeScript
                     </span>
                     ,{" "}
                     <span className="text-blue-300 font-medium">Node.js</span>,{" "}
                     <span className="text-blue-300 font-medium">Express</span>,
                     and
                     <span className="text-blue-300 font-medium"> MongoDB</span>
                     . From crafting smooth frontend experiences to architecting
                     robust backend systems, I turn ideas into functional
                     digital solutions.
                  </p>
               </motion.div>

               {/* social media */}
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
                        className="hover:scale-110 hover:bg-blue-500 hover:text-gray-50 transition-all duration-300 rounded-full"
                     >
                        <Link
                           href="https://github.com/PustamRai"
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
                        className="hover:scale-110 hover:bg-blue-500 hover:text-gray-50 transition-all duration-300 rounded-full"
                     >
                        <Link
                           href="https://www.linkedin.com/in/pustamrai"
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
                        className="hover:scale-110 hover:bg-blue-500 hover:text-gray-50 transition-all duration-300 rounded-full"
                     >
                        <Link href="mailto:">
                           <Mail className="h-5 w-5" />
                           <span className="sr-only">Email</span>
                        </Link>
                     </Button>
                  </motion.div>
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
}
