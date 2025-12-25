import { aboutData } from "../data/about";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
      {/* Header */}
      <div className="mb-8">
        <p className="text-gray-400 text-sm mb-2">About</p>
        <h1 className="text-4xl font-bold">Me</h1>
      </div>

      {/* Main Content */}
      <Card className="">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row gap-8 p-8">
            {/* Avatar Section */}
            <div className="hrink-0">
              <div className="w-60 h-60 bg-yellow-400 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>

            {/* Info Section */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">{aboutData.name}</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {aboutData.description}
              </p>

              {/* Skills Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {aboutData.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-zinc-800 hover:bg-zinc-700 transition-colors px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
