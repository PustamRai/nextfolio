import type React from "react";
export default function WidthWrapper({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) {
   return (
      <div
         className={`max-w-7xl mx-auto px-4 py-5 sm:py-7 lg:py-14 sm:px-6 lg:px-8 ${
            className || ""
         }`}
      >
         {children}
      </div>
   );
}
