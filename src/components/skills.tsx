"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";
import { skillCategories } from "../data/skills";

const containerVariants: Variants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.1,
         delayChildren: 0.2,
      },
   },
};

const itemVariants: Variants = {
   hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
   },
   visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
         duration: 0.5,
         ease: "easeOut",
      },
   },
};

const headerVariants: Variants = {
   hidden: { opacity: 0, y: 20 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
   },
};

export default function Skills() {
   return (
      <section id="skills" className="py-12 ">
         <div className="w-full mx-auto px-4 sm:px-6 md:px-8">
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
               <motion.div
                  className="space-y-4 text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={headerVariants}
               >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                     Skills
                  </h2>
                  <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed px-4">
                     My expertise and technical proficiencies
                  </p>
               </motion.div>

               <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={containerVariants}
               >
                  {skillCategories.map((category, index) => (
                     <motion.div
                        key={index}
                        className="skill-card"
                        variants={itemVariants}
                        whileHover={{
                           scale: 1.02,
                           transition: { duration: 0.2 },
                        }}
                     >
                        <Card className="h-full border-0 border-t-4 border-t-[#d69281] bg-neutral-900 text-gray-50  shadow-lg hover:shadow-xl transition-all duration-300 transform">
                           <CardContent className="p-4 sm:p-6">
                              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                                 {category.category}
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                 {category.skills.map((skill, i) => (
                                    <Badge
                                       key={i}
                                       variant="secondary"
                                       className="text-xs sm:text-sm font-bold bg-neutral-800 text-gray-50 hover:bg-neutral-700 transition-colors duration-200"
                                    >
                                       {skill}
                                    </Badge>
                                 ))}
                              </div>
                           </CardContent>
                        </Card>
                     </motion.div>
                  ))}
               </motion.div>
            </div>
         </div>
      </section>
   );
}
