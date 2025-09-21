import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I'm a fresh graduate from{" "}
              <span className="text-primary font-semibold">Shahjalal University of Science and Technology (SUST)</span>{" "}
              with hands-on full-stack and AI/ML experience. My journey in competitive programming and software
              development has shaped me into a problem-solver who thrives on building innovative solutions.
            </p>

            <p>
              As an <span className="text-primary font-semibold">ICPC Asia Dhaka Regionalist 2024 (Top 4%)</span> and{" "}
              <span className="text-primary font-semibold">Codeforces Specialist</span>, I've solved over 3000+
              algorithm problems across various platforms. This competitive programming background has given me a strong
              foundation in data structures, algorithms, and efficient problem-solving approaches.
            </p>

            <p>
              I specialize in building production-style MERN applications with features like Stripe payments, real-time
              sockets, and JWT authentication. My AI/ML expertise includes working with YOLOv8, Transformers (LLaMA,
              Gemma, BanglaBERT), and developing hackathon-winning NLP projects.
            </p>

            <p>
              Currently working on my thesis involving{" "}
              <span className="text-primary font-semibold">Intent Categorization in Bengali Chatbot Prompts</span> using
              BERT and Transformers, and developing a{" "}
              <span className="text-primary font-semibold">Weed Detection system with YOLOv8</span>. I'm passionate
              about clean code, collaborative teamwork, and leveraging technology to solve real-world problems.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
