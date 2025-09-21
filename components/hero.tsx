"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-4 border-primary animate-pulse-glow overflow-hidden">
                <img src="/Shohanur_Rahman.jpg" alt="Md. Shohanur Rahman" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float"></div>
              <div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary/60 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/40 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-balance">
                SHOHANUR
                <br />
                <span className="text-primary">RAHMAN</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-primary font-medium">Full Stack Developer & AI/ML Engineer</h2>
              <p className="text-lg text-muted-foreground">Fresh Graduate from SUST</p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Sylhet, Bangladesh 🇧🇩</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Button
                variant="outline"
                size="icon"
                className="border-primary/20 hover:border-primary hover:bg-primary/10 bg-transparent"
                onClick={() => window.open("https://github.com/ShohanNur", "_blank")}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary/20 hover:border-primary hover:bg-primary/10 bg-transparent"
                onClick={() => window.open("https://linkedin.com/in/shohanur-rahman", "_blank")}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary/20 hover:border-primary hover:bg-primary/10 bg-transparent"
                onClick={() => window.open("mailto:shohanur.rahman133883@gmail.com", "_blank")}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("#projects")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
              >
                ⚡ View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg"
              >
                ⚡ Contact Me
              </Button>
            </div>

            {/* Achievement Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge variant="secondary" className="bg-card border border-primary/20 text-foreground px-6 py-2 text-sm">
                🏆 ICPC Dhaka Regionalist 2024 • Codeforces Specialist • AI/ML Expert
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
