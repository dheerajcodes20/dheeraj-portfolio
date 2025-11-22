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
                  <span className="text-primary font-bold">Results-driven</span> Full Stack Developer with expertise in JavaScript frameworks (<span className="text-primary">React</span>, <span className="text-primary">Next.js</span>, <span className="text-secondary">Node.js</span>, <span className="text-secondary">Express.js</span>), API integration (<span className="text-primary">AssemblyAI</span>, <span className="text-primary">Amazon Polly</span>, <span className="text-secondary">Stripe</span>), RESTful API development, responsive design, version control (<span className="text-primary">Git</span>/<span className="text-primary">GitHub</span>), database management (<span className="text-secondary">MongoDB</span>, <span className="text-secondary">SQL</span>, <span className="text-primary">Convex</span>), and deployment on <span className="text-secondary">Vercel</span>.
                </p>
                
                <p className="text-white font-semibold text-lg leading-relaxed mb-6 drop-shadow-lg">
                  Passionate about building scalable web applications and innovative digital solutions. Experienced in creating modern, responsive user interfaces with <span className="text-primary">React.js</span> and <span className="text-primary">Next.js</span>, developing robust backend services with <span className="text-secondary">Node.js</span> and <span className="text-secondary">Express.js</span>, and integrating third-party APIs to enhance application functionality. Skilled in working with both SQL and NoSQL databases, implementing RESTful APIs, and deploying applications to cloud platforms.
                </p>
                
                <p className="text-white font-semibold text-lg leading-relaxed mb-6 drop-shadow-lg">
                  Strong foundation in front-end technologies including <span className="text-primary">HTML5</span>, <span className="text-primary">CSS3</span>, <span className="text-primary">TailwindCSS</span>, and modern UI libraries like <span className="text-secondary">Shadcn/UI</span> and <span className="text-secondary">Radix UI</span>. Proficient in version control with <span className="text-primary">Git</span> and <span className="text-primary">GitHub</span>, following best practices for code collaboration and project management. Committed to writing clean, maintainable code and delivering high-quality software solutions.
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
