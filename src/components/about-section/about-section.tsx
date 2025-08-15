interface AboutProps {
   heading: string;
   subheading: string;
   details: string;
}

export default function About({ heading, subheading, details }: AboutProps) {
   return (
      <div className="w-full">
         <section id="about" className="py-20 w-full">
            <div className="container px-4 md:px-6 mx-auto">
               <div className="space-y-12">
                  {/* Heading */}
                  <div className="space-y-4 text-center">
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        {heading}
                     </h2>
                     <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {subheading}
                     </p>
                  </div>

                  {/* Details */}
                  <div className="mx-auto max-w-3xl text-center">
                     <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                        {details}
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
