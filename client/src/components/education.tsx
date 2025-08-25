import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Education() {
  const [modalImg, setModalImg] = useState<string | null>(null);
  const certifications = [
    {
      title: "Introduction to Web Development",
      issuer: "Microsoft & Coursera",
      date: "April 2025",
      img: "/coursera-microsoft-WebDev_certificate.jpeg",
      link: "https://www.coursera.org/account/accomplishments/verify/K8J67ALK86QU?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
    },
    {
      title: "ReactJS for Beginners",
      issuer: "Simplilearn",
      date: "May 2025",
      img: "/simplilearn-certificate.jpeg"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-0 flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="relative w-full flex flex-col items-center">
                      {cert.link ? (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group w-full flex flex-col items-center"
                        >
                          <img
                            src={cert.img}
                            alt={cert.title}
                            className="rounded-lg object-cover w-full h-48 sm:h-56 md:h-60 border-2 border-white cursor-pointer transition-transform duration-200 group-hover:scale-105 group-hover:shadow-xl"
                            style={{ display: 'block' }}
                          />
                          <span className="absolute top-2 right-2 bg-primary text-white rounded-full p-1 opacity-80 group-hover:opacity-100">
                            <ExternalLink className="w-4 h-4" />
                          </span>
                        </a>
                      ) : (
                        <img
                          src={cert.img}
                          alt={cert.title}
                          className="rounded-lg object-cover w-full h-48 sm:h-56 md:h-60 border-2 border-white cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl"
                          style={{ display: 'block' }}
                          onClick={() => setModalImg(cert.img)}
                        />
                      )}
                    </div>
                    <h4 className="font-semibold text-primary mt-4 text-center">{cert.title}</h4>
                    <p className="text-white/80 text-sm text-center mb-1">{cert.issuer}</p>
                    <p className="text-white/60 text-sm text-center">{cert.date}</p>
                  </div>
                ))}
              </div>
              {/* Modal for certificate preview */}
              {modalImg && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setModalImg(null)}>
                  <img
                    src={modalImg}
                    alt="Certificate Preview"
                    className="max-w-full max-h-[90vh] rounded-2xl border-4 border-secondary shadow-2xl"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        
        </div>
      </div>
    </section>
  );
}
