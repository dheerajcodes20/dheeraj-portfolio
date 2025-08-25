import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  // Compose mailto link for Gmail web compose (works for most users)
  const gmailComposeUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=dheeraj2082dk@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20Dheeraj,%20I%20would%20like%20to%20connect%20with%20you.";
  // Fallback mailto for non-Gmail users
  const mailtoUrl =
    "mailto:dheeraj2082dk@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Dheeraj,%20I%20would%20like%20to%20connect%20with%20you.";
  const handleMailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const win = window.open(gmailComposeUrl, "_blank");
    setTimeout(() => {
      if (!win || win.closed || typeof win.closed === "undefined") {
        window.location.href = mailtoUrl;
      }
    }, 500);
  };

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
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1 mb-6 cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => setShowModal(true)}
            data-testid="profile-image-container"
          >
            <img
              src="/mypic_1756133943930.jpeg"
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
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white text-2xl transition-colors duration-300"
            data-testid="link-email"
            onClick={handleMailClick}
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
      {/* Modal for enlarged profile photo */}
      {showModal && (
        <div
          className="fixed top-20 left-0 w-full flex justify-center z-50 animate-fade-in-up"
          style={{ pointerEvents: 'auto' }}
          onClick={() => setShowModal(false)}
        >
          <div
            className={clsx(
              "bg-white/10 backdrop-blur-lg border-4 border-primary shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-500",
              "rounded-full",
              "w-80 h-80 sm:w-[28rem] sm:h-[28rem]"
            )}
            style={{ marginTop: 0 }}
          >
            <img
              src="/mypic_1756133943930.jpeg"
              alt="Dheeraj Kumar - Full Stack Developer"
              className="w-full h-full rounded-full object-cover"
              data-testid="profile-image-modal"
            />
          </div>
        </div>
      )}
    </section>
  );
}
