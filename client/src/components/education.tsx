import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const certifications = [
    {
      title: "Introduction to Web Development",
      issuer: "Microsoft & Coursera",
      date: "April 2025"
    },
    {
      title: "ReactJS for Beginners",
      issuer: "Simplilearn",
      date: "May 2025",
      credentialId: "8390160"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Education & <span className="text-secondary">Certifications</span>
        </h2>
        
        <div className="space-y-8">
          {/* Education */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-primary text-2xl mt-1" />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 md:mb-0">Bachelor of Computer Applications</h3>
                    <span className="text-primary font-semibold" data-testid="text-education-date">July 2021 - July 2024</span>
                  </div>
                  <p className="text-white/80 mb-2" data-testid="text-education-institution">University College of Science, Saifabad, Telangana</p>
                  <p className="text-secondary font-semibold" data-testid="text-education-cgpa">CGPA: 8.38/10.00</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Certifications */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Award className="text-secondary text-2xl" />
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4" data-testid={`cert-${index}`}>
                    <h4 className="font-semibold text-primary mb-2">{cert.title}</h4>
                    <p className="text-white/80 text-sm mb-1">{cert.issuer}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-white/60 text-sm">{cert.date}</p>
                      {cert.credentialId && (
                        <p className="text-white/60 text-sm">ID: {cert.credentialId}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
