import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  // Compose mailto link for Gmail web compose (works for most users)
  const gmailComposeUrl =
    "https://mail.google.com/mail/?view=cm&fs=1&to=dheeraj2082dk@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20Dheeraj,%20I%20would%20like%20to%20connect%20with%20you.";

  // Fallback mailto for non-Gmail users
  const mailtoUrl =
    "mailto:dheeraj2082dk@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Dheeraj,%20I%20would%20like%20to%20connect%20with%20you.";

  const handleMailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Try to open Gmail compose in a new tab, fallback to mailto if blocked
    const win = window.open(gmailComposeUrl, "_blank");
    setTimeout(() => {
      if (!win || win.closed || typeof win.closed === "undefined") {
        window.location.href = mailtoUrl;
      }
    }, 500);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8">
          Contact <span className="text-primary">Me</span>
        </h2>
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:text-primary border border-white/20 hover:bg-white/20 transition-all duration-300"
            aria-label="Email"
            data-testid="contact-mail"
            onClick={handleMailClick}
          >
            <Mail className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/dheerajcodes20"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:text-primary border border-white/20 hover:bg-white/20 transition-all duration-300"
            aria-label="Github"
            data-testid="contact-github"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/dheeraj-kumar-86bb96269/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:text-secondary border border-white/20 hover:bg-white/20 transition-all duration-300"
            aria-label="LinkedIn"
            data-testid="contact-linkedin"
          >
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
        <div className="text-white/90 text-lg space-y-2">
          <div className="font-semibold text-2xl">Dheeraj Kumar</div>
          <div className="text-primary">dheeraj2082dk@gmail.com</div>
          <div className="text-secondary">+91 9640760915</div>
        </div>
      </div>
    </section>
  );
}
