import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import asklyImage from "@assets/ASKly_1756133090627.png";
import nextbuyImage from "@assets/NEXTbuy_1756133090628.png";

export default function Projects() {
  const projects = [
    {
      title: "ASKly - AI Voice Q&A Platform",
      description: "Developed full-stack voice-interactive Q&A platform using Next.js 15.3, React 18, and Convex backend, enabling real-time AI conversations across 5 coaching modes. Integrated AssemblyAI for speech-to-text, OpenRouter for AI processing, and Amazon Polly via AWS SDK for text-to-speech conversion. Built RESTful API routes, implemented real-time data synchronization using Convex with React hooks (useQuery, useMutation), and created responsive UI with TailwindCSS v4. Deployed on Vercel with StackAuth authentication, Next.js middleware for protected routes, and React hooks (useState, useEffect, useMemo, useRef) for state management.",
      image: asklyImage,
      liveUrl: "https://askly-speak-learn-improve.vercel.app/",
      githubUrl: "https://github.com/dheerajcodes20/ASKly-Speak-Learn-Improve",
      technologies: ["React", "AssemblyAI", "Amazon Polly", "Convex"],
      category: "AI Platform"
    },
    {
      title: "NextBuy - E-Commerce Platform",
      description: "Built full-stack e-commerce platform using Next.js 15 App Router with TypeScript, implementing server-side rendering for product pages and dynamic routing for categories and individual products. Integrated Sanity CMS with GROQ queries to fetch product data, images, and categories, enabling content managers to update inventory without code changes. Implemented Stripe payment processing with use-shopping-cart library, including checkout flow, success/error pages, and cart persistence across sessions. Developed responsive shopping cart modal using Radix UI Sheet component with real-time cart count updates, item removal, and seamless checkout redirection, deployed on Vercel.",
      image: nextbuyImage,
      liveUrl: "https://next-buy-e-commerce-website.vercel.app/",
      githubUrl: "https://github.com/dheerajcodes20/NextBuy-E-Commerce-Website",
      technologies: ["Next.js", "Stripe", "Sanity CMS", "Docker"],
      category: "E-Commerce"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Featured <span className="text-secondary">Projects</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 group overflow-hidden"
              data-testid={`card-project-${index}`}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} application interface`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-testid={`img-project-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/20 text-primary border-primary/30 text-xs font-medium"
                      data-testid={`badge-tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    asChild
                    className="flex-1 bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    data-testid={`button-live-demo-${index}`}
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                    data-testid={`button-view-code-${index}`}
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
