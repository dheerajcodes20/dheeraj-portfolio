import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Server, Database, Cloud, Settings, GitBranch } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/20",
      skills: ["JavaScript", "TypeScript"]
    },
    {
      title: "Front-End",
      icon: Palette,
      color: "text-secondary",
      bgColor: "bg-secondary/20",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "TailwindCSS", "Bootstrap", "Shadcn/UI", "Radix UI"]
    },
    {
      title: "Back-End",
      icon: Server,
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/20",
      skills: ["Node.js", "Express.js", "RESTful API Development"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/20",
      skills: ["MongoDB", "SQL (MySQL)", "Convex"]
    },
    {
      title: "Cloud/DevOps",
      icon: Cloud,
      color: "text-blue-400",
      bgColor: "bg-blue-400/20",
      skills: ["Docker", "Vercel"]
    },
    {
      title: "Tools & APIs",
      icon: Settings,
      color: "text-pink-400",
      bgColor: "bg-pink-400/20",
      skills: ["REST API", "Postman", "AssemblyAI", "Stripe", "Sanity CMS", "Amazon Polly", "StackAuth"]
    },
    {
      title: "Version Control & Design",
      icon: GitBranch,
      color: "text-purple-400",
      bgColor: "bg-purple-400/20",
      skills: ["Git", "GitHub", "Responsive Design", "Mobile-First Development"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Technical <span className="text-primary">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                data-testid={`card-skill-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl ${category.bgColor} mr-4`}>
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-xs font-medium"
                        data-testid={`badge-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
