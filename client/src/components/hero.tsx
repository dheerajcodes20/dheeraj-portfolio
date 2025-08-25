import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@assets/mypic_1756133943930.jpeg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const downloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/api/download-resume';
    link.download = 'DheerajKumar_FullStackDev_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 opacity-10"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1 mb-6">
            <img
              src={profileImage}
              alt="Dheeraj Kumar - Full Stack Developer"
              className="w-full h-full rounded-full object-cover"
              data-testid="profile-image"
            />
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Dheeraj Kumar</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
          Full Stack Developer passionate about building scalable web applications and innovative digital solutions
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            data-testid="button-view-work"
          >
            View My Work
          </Button>
          <Button
            onClick={downloadResume}
            variant="outline"
            className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            data-testid="button-download-resume"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/dheerajcodes20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white text-2xl transition-colors duration-300"
            data-testid="link-github"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/dheeraj-kumar-86bb96269/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white text-2xl transition-colors duration-300"
            data-testid="link-linkedin"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="mailto:dheeraj2082dk@gmail.com"
            className="text-white/70 hover:text-white text-2xl transition-colors duration-300"
            data-testid="link-email"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
