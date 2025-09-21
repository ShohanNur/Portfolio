import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Service Xpress - Household Service Marketplace",
    description:
      "Built MERN marketplace linking customers to vetted professionals. Shipped 25+ REST APIs with JWT authentication and Stripe payment integration for seamless transactions.",
    image: "/service-marketplace-platform.jpg",
    technologies: ["Node.js", "Express", "React", "MongoDB", "Stripe", "JWT"],
    github: "#",
    demo: "#",
  },
  {
    title: "BanglaBuddy - Banglish to Bangla Platform",
    description:
      "Top 20/100+ teams at KUET Bitfest 2025. Banglish to Bangla content management platform with PDF export functionality and user profile dashboard.",
    image: "/bangla-language-processing-platform.jpg",
    technologies: ["Next.js", "Gemini API", "Next-auth", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "House Booking Platform",
    description:
      "Architected 3-workspace MERN codebase (Guest UI, Admin UI, API) with JWT refresh-token rotation and role-based access control for guest/host/admin roles.",
    image: "/house-booking-platform-interface.jpg",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind", "JWT"],
    github: "#",
    demo: "#",
  },
  {
    title: "Game of Thrones - Strategy Game",
    description:
      "Single-player strategy-puzzle game with decision-based mechanics. Designed modular JavaFX architecture applying OOP best practices and design patterns.",
    image: "/strategy-game-interface.jpg",
    technologies: ["Java", "JavaFX", "Maven", "OOP", "Design Patterns"],
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my key projects, featuring full-stack applications, AI/ML solutions, and hackathon winners
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/20 hover:border-primary hover:bg-primary/10 bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
