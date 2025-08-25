import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          About <span className="text-secondary">Me</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/20 p-8 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
                alt="Modern coding workspace with multiple monitors and clean setup"
                className="rounded-xl shadow-2xl w-full h-full object-cover"
                data-testid="img-workspace"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Results-driven Full Stack Developer with experience in building scalable web applications using modern JavaScript frameworks and cloud tools. Strong in front-end (React, Next.js, TailwindCSS) and back-end (Node.js, Express.js, MongoDB, MySQL).
                </p>
                
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Delivered impactful projects like Askly (AI-powered Q&A voice app) and NextBuy (e-commerce platform). Skilled in Docker, Git, Vercel, and API integrations. Passionate about delivering clean code, optimized APIs, and innovative digital solutions.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="font-semibold text-primary mb-2">Location</h4>
                    <p className="text-white/80" data-testid="text-location">Hyderabad, India</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="font-semibold text-secondary mb-2">Experience</h4>
                    <p className="text-white/80" data-testid="text-experience">2+ Years</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
