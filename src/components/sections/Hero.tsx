import { Code2, MapPin, Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { heroData } from "../data/hero";

export default function Home() {
  const socials = [
    { icon: Linkedin, url: heroData.socials.linkedin, label: "LinkedIn" },
    { icon: Github, url: heroData.socials.github, label: "GitHub" },
  ];

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
            {heroData.name}
          </h1>
          <p className="text-base sm:text-lg text-slate-400 ">
            {heroData.title}
          </p>
        </div>
      </div>

      {/* Personal Info Card */}
      <div className="w-full bg-white-800/50 border border-gray-300 rounded-2xl p-4 space-y-3">
        <div className="flex items-center gap-3">
          {/*<div className="border-2 rounded-lg bg-gray-200 flex items-center justify-center h-8 w-8 px-1">
            <Bookmark className="w-4 h-4 text-gray-600" />
          </div>*/}
          <p className="text-black text-base ">{heroData.description}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="border-2 rounded-lg bg-gray-200 flex items-center justify-center h-8 w-8 px-1">
            <Code2 className="w-4 h-4 text-gray-600" />
          </div>
          <p className="text-black text-base ">{heroData.title}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="border-2 rounded-lg bg-gray-200 flex items-center justify-center h-8 w-8 px-1">
            <MapPin className="w-4 h-4 text-gray-600" />
          </div>
          <p className="text-black text-base">{heroData.location}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="border-2 rounded-lg bg-gray-200 flex items-center justify-center h-8 w-8 px-1">
            <Mail className="w-4 h-4 text-gray-600" />
          </div>
          <a
            href="mailto:pustamrai82@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:underline"
          >
            {heroData.email}
          </a>
        </div>
      </div>

      {/* social links */}
      <div className="mt-8 flex gap-4">
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 bg-gray-200 rounded-xl hover:bg-gray-100 transition"
            >
              <social.icon className="w-5 h-5 text-gray-700" />
              <span className="text-gray-800 font-medium">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
