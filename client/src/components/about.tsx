import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          About <span className="text-secondary">Me</span>
        </h2>
        
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div className="relative">
            
          </div>
          
          <div className="space-y-6">
            <Card className="bg-slate-900/80 border-2 border-primary/40 shadow-xl backdrop-blur-lg animate-fade-in-up">
              <CardContent className="p-8">
                <p className="text-white font-semibold text-lg leading-relaxed mb-6 drop-shadow-lg">
                  <span className="text-primary font-bold">Results-driven</span> Full Stack Developer with experience in building scalable web applications using modern JavaScript frameworks and cloud tools. Strong in front-end (<span className="text-primary">React</span>, <span className="text-primary">Next.js</span>, <span className="text-primary">TailwindCSS</span>) and back-end (<span className="text-secondary">Node.js</span>, <span className="text-secondary">Express.js</span>, <span className="text-secondary">MongoDB</span>, <span className="text-secondary">MySQL</span>).
                </p>
                
                <p className="text-white font-semibold text-lg leading-relaxed mb-6 drop-shadow-lg">
                  Delivered impactful projects like <span className="text-primary font-bold">Askly</span> (AI-powered Q&A voice app) and <span className="text-secondary font-bold">NextBuy</span> (e-commerce platform). Skilled in <span className="text-primary">Docker</span>, <span className="text-primary">Git</span>, <span className="text-primary">Vercel</span>, and API integrations. Passionate about delivering <span className="text-secondary font-bold">clean code</span>, <span className="text-secondary font-bold">optimized APIs</span>, and <span className="text-primary font-bold">innovative digital solutions</span>.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 border-l-4 border-primary shadow-md">
                    <h4 className="font-semibold text-primary mb-2">Location</h4>
                    <p className="text-white/80" data-testid="text-location">Hyderabad, India</p>
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
