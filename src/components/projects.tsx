"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { projectsData } from "@/data/projects";

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
      scale: 0.95,
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
      transition: {
         duration: 0.6,
         ease: "easeOut",
      },
   },
};

export default function Projects() {
   return (
      <section id="projects" className="py-20 md:py-20  min-h-[90vh]">
         <div className=" px-4 sm:px-6 md:px-8 mx-auto max-w-7xl">
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
               <motion.div
                  className="space-y-3 sm:space-y-4 text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={headerVariants}
               >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                     Projects
                  </h2>
                  <p className="mx-auto max-w-[600px] lg:max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed px-4">
                     A selection of my personal and professional projects
                  </p>
               </motion.div>

               <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10 md:mt-12"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={containerVariants}
               >
                  {projectsData.map((project, index) => (
                     <motion.div
                        key={index}
                        className="project-card h-full"
                        variants={itemVariants}
                        whileHover={{
                           transition: { duration: 0.2 },
                        }}
                     >
                        <Card className="overflow-hidden h-full flex flex-col bg-neutral-950 text-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-800/20 border-0 group">
                           <CardContent className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                              <motion.h3
                                 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors duration-200"
                                 whileHover={{ scale: 1.02 }}
                              >
                                 {project.title}
                              </motion.h3>

                              <p className="text-xs sm:text-sm md:text-base text-muted-foreground flex-1 leading-relaxed mb-3 sm:mb-4">
                                 {project.description}
                              </p>

                              <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-5">
                                 {project.tags.map((tag, i) => (
                                    <motion.span
                                       key={i}
                                       className="text-xs sm:text-sm bg-neutral-800 text-gray-50 hover:bg-neutral-700 transition-colors duration-200 px-2 sm:px-3 py-1 rounded-full"
                                       whileHover={{ scale: 1.05 }}
                                       whileTap={{ scale: 0.95 }}
                                    >
                                       {tag}
                                    </motion.span>
                                 ))}
                              </div>

                              <div className="flex  gap-2 sm:gap-3 mt-auto">
                                 <Button
                                    size="sm"
                                    className="bg-blue-400 hover:bg-blue-300 text-black  text-xs sm:text-sm flex-1 xs:flex-none"
                                    asChild
                                 >
                                    <Link
                                       href={project.codeLink}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                    >
                                       <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                       Code
                                    </Link>
                                 </Button>
                                 {project.liveLink && (
                                    <Button
                                       size="sm"
                                       className="bg-blue-400 hover:bg-blue-300 text-black text-xs sm:text-sm flex-1 xs:flex-none"
                                       asChild
                                    >
                                       <Link
                                          href={project.liveLink}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                       >
                                          <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                          Live
                                       </Link>
                                    </Button>
                                 )}
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
