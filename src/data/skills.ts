export interface SkillCategory {
  category: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: ["Next.js", "TypeScript", "React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git"],
  },
]
