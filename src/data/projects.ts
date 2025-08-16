export interface Project {
  title: string
  description: string
  tags: string[]
  codeLink: string
  liveLink: string | null
}

export const projectsData: Project[] = [
  {
    title: "eBook",
    description:
      "Digital library platform for uploading, browsing, and reading PDF books with secure authentication.",
    tags: ["Nextjs", "Typescript", "MongoDB", "Cloudinary"],
    codeLink: "https://github.com/PustamRai/eBooks",
    liveLink: "https://ebook-digital.vercel.app",
  },
  {
    title: "Dokan (E-commerce)",
    description: "Full-stack e-commerce platform with product management, cart functionality, and admin dashboard.",
    tags: ["React", "Tailwid CSS", "Node.js", "MongoDB"],
    codeLink: "https://github.com/PustamRai/dokan",
    liveLink: "https://dokan-liart.vercel.app",
  },
  {
    title: "Todo App",
    description:
      "Task management tool for adding, updating, and organizing tasks with completion tracking.",
    tags: ["React", "Tailwid CSS", "Node.js", "MongoDB"],
    codeLink: "https://github.com/PustamRai/Todolist",
    liveLink: "https://todogoflow.vercel.app",
  },
  
]
