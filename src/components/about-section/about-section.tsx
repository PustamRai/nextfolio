"use client";

import { motion, Variants } from "framer-motion";

interface AboutProps {
   heading: string;
   subheading: string;
   details: string;
}

export default function About({ heading, subheading, details }: AboutProps) {
   const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
         },
      },
   };

   const itemVariants: Variants = {
      hidden: {
         opacity: 0,
         y: 30,
      },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.6,
            ease: "easeOut",
         },
      },
   };

   return (
      <div className="w-full">
         <section id="about" className="py-20 w-full">
            <div className="container px-4 md:px-6 mx-auto">
               <motion.div
                  className="space-y-12"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
               >
                  {/* Heading */}
                  <motion.div
                     className="space-y-4 text-center"
                     variants={itemVariants}
                  >
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        {heading}
                     </h2>
                     <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {subheading}
                     </p>
                  </motion.div>

                  {/* Details */}
                  <motion.div
                     className="mx-auto max-w-3xl text-center"
                     variants={itemVariants}
                  >
                     <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                        {details}
                     </p>
                  </motion.div>
               </motion.div>
            </div>
         </section>
      </div>
   );
}
