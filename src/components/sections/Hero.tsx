import { Code2, MapPin, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
      <div className="flex items-center gap-4 space-y-6">
        <Image
          src="/pustamrai.png"
          alt="pustamrai"
          width={500}
          height={500}
          className="rounded-full w-30 h-30"
        />

        {/* Name and Title  */}
        <div className="flex flex-col items-center gap-2 justify-center ">
          <h1 className="text-2xl sm:text-4xl font-bold text-black">
            Pustam Rai
          </h1>
          <p className="text-base sm:text-lg text-slate-400 ">
            FullStack Developer
          </p>
        </div>
      </div>

      {/* Personal Info Box */}
      <div className="w-full bg-white-800/50 border border-gray-300 rounded-2xl p-4 space-y-3">
        <div className="flex items-center gap-3">
          <div className="border-2 rounded-lg bg-gray-200 flex items-center justify-center h-8 w-8 px-1">
            <Code2 className="w-4 h-4 text-gray-600" />
          </div>
          <p className="text-black text-base ">FullStack Developer</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="border-2 rounded-lg bg-gray-200 flex items-center justify-center h-8 w-8 px-1">
            <MapPin className="w-4 h-4 text-gray-600" />
          </div>
          <p className="text-black text-base">Kathmandu, Nepal</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="border-2 rounded-lg bg-gray-200 flex items-center justify-center h-8 w-8 px-1">
            <Linkedin className="w-4 h-4 text-gray-600" />
          </div>
          <p className="text-black text-base">LinkedIn</p>
        </div>
      </div>
    </div>
  );
}
