import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Backend & AI/ML",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "YOLOv8",
      "Transformers",
      "LLaMA",
      "Gemma",
      "BanglaBERT",
      "Gemini API",
    ],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "React"],
  },
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "Java", "JavaScript"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "JWT", "Stripe", "Next-auth", "REST APIs", "Socket.io"],
  },
  {
    title: "Competitive Programming",
    skills: ["Codeforces", "CodeChef", "AtCoder", "VJudge", "Algorithm Design", "Data Structures"],
  },
  {
    title: "Research & ML",
    skills: ["PyTorch", "Hugging Face", "scikit-learn", "pandas", "NumPy", "CNNs", "RNNs", "BERT"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Full-stack development expertise with competitive programming excellence and AI/ML research experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors"
            >
              <h3 className="text-lg font-bold text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary/50 text-foreground border-primary/10 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
