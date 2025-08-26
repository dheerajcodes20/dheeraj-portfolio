import path from "path";
import fs from "fs";

// Vercel serverless function for downloading the resume PDF
export default function handler(req: any, res: any) {
  try {
    // Absolute path to the PDF in the attached_assets directory
    const resumePath = path.join(process.cwd(), "attached_assets", "DheerajKumar_FullStackDev_Resume_1756133073743.pdf");

    if (fs.existsSync(resumePath)) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="DheerajKumar_FullStackDev_Resume.pdf"');
      const fileStream = fs.createReadStream(resumePath);
      fileStream.pipe(res);
    } else {
      res.status(404).json({ message: "Resume file not found. Please contact dheeraj2082dk@gmail.com directly." });
    }
  } catch (error) {
    res.status(500).json({ message: "Sorry, there was an error downloading the resume. Please contact dheeraj2082dk@gmail.com directly." });
  }
}
