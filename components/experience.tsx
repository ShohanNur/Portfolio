import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2020 — 2025",
    title: "BSc in Computer Science & Engineering",
    company: "Shahjalal University of Science and Technology",
    description:
      "Graduated with CGPA 3.85. Specialized in AI/ML, full-stack development, and competitive programming. Active participant in programming contests and hackathons.",
    technologies: ["C++", "Python", "Java", "Data Structures", "Algorithms", "Machine Learning"],
  },
  {
    period: "2024 — PRESENT",
    title: "Research Assistant (Thesis)",
    company: "SUST CSE Department",
    description:
      "Working on Intent Categorization in Bengali Chatbot Prompts using BERT and Transformers. Building multi-class classification models for 30+ intent classes with PyTorch and Hugging Face.",
    technologies: ["PyTorch", "Transformers", "BERT", "scikit-learn", "pandas", "NumPy"],
  },
  {
    period: "2024 — PRESENT",
    title: "AI/ML Research Project",
    company: "Independent Research",
    description:
      "Developing YOLOv8 model trained on 8,000 images to detect 12 weed species. Implementing computer vision solutions for agricultural applications.",
    technologies: ["YOLOv8", "Computer Vision", "OpenCV", "Python", "Deep Learning"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Research</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <p className="text-sm text-primary font-mono font-semibold">{exp.period}</p>
                </div>
                <div className="md:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
