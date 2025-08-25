import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { name, email, subject, message }: ContactFormData = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: "All fields are required" 
        });
      }
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Please provide a valid email address" 
        });
      }
      
      // In a real application, you would:
      // 1. Send email using a service like SendGrid, AWS SES, or Nodemailer
      // 2. Store the message in a database
      // 3. Send notifications
      
      // For now, we'll log the contact form submission
      console.log("Contact form submission:", {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      });
      
      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      res.status(200).json({ 
        message: "Thank you for your message! I'll get back to you soon." 
      });
      
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Sorry, there was an error sending your message. Please try again later." 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/download-resume", (req: Request, res: Response) => {
    try {
      const resumePath = path.join(process.cwd(), "attached_assets", "DheerajKumar_FullStackDev_Resume_1756133073743.pdf");
      
      // Check if file exists
      if (fs.existsSync(resumePath)) {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="DheerajKumar_FullStackDev_Resume.pdf"');
        
        // Stream the file
        const fileStream = fs.createReadStream(resumePath);
        fileStream.pipe(res);
        
        fileStream.on('error', (err) => {
          console.error("File stream error:", err);
          res.status(500).json({ 
            message: "Error streaming resume file" 
          });
        });
      } else {
        // Fallback: provide contact information
        res.status(404).json({
          message: "Resume file not found. Please contact dheeraj2082dk@gmail.com for the latest resume.",
          contact: "dheeraj2082dk@gmail.com",
          phone: "+91 9640760915"
        });
      }
      
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ 
        message: "Sorry, there was an error downloading the resume. Please contact dheeraj2082dk@gmail.com directly." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
