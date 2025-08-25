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
              <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">DK</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Full Stack Developer</h3>
                  <p className="text-white/70">Passionate about innovation</p>
                </div>
              </div>
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
