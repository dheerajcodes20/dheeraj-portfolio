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
      // In a real application, you would serve the actual resume PDF
      // For now, we'll create a simple response
      const resumeData = {
        message: "Resume download would be implemented here",
        contact: "Please contact dheeraj2082dk@gmail.com for the latest resume",
        timestamp: new Date().toISOString()
      };
      
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Content-Disposition', 'attachment; filename="DheerajKumar_Contact.json"');
      res.send(JSON.stringify(resumeData, null, 2));
      
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
