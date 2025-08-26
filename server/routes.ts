import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Email configuration
const createEmailTransporter = () => {
  // Using Gmail SMTP - in production you'd use environment variables
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dheeraj2082dk@gmail.com', // Your email
      pass: process.env.EMAIL_APP_PASSWORD // App password from Gmail (set this in your environment)
    }
  });
};

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
      
      try {
        // Create email transporter
        const transporter = createEmailTransporter();
        
        // Email content
        const emailContent = {
          from: email,
          to: 'dheeraj2082dk@gmail.com',
          subject: `Portfolio Contact: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #6366f1;">New Portfolio Contact Message</h2>
              <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
              </div>
              <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
                <h3 style="color: #334155; margin-top: 0;">Message:</h3>
                <p style="line-height: 1.6; color: #475569;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              <p style="color: #64748b; font-size: 14px; margin-top: 20px;">
                This message was sent from your portfolio website contact form.
              </p>
            </div>
          `,
          text: `
New Portfolio Contact Message

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio website contact form.
          `
        };
        
        // Send email
        await transporter.sendMail(emailContent);
        
        console.log("Contact form email sent successfully:", {
          to: 'dheeraj2082dk@gmail.com',
          from: email,
          subject: subject,
          timestamp: new Date().toISOString()
        });
        
        res.status(200).json({ 
          message: "Thank you for your message! I'll get back to you soon." 
        });
        
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        
        // Log the contact form submission even if email fails
        console.log("Contact form submission (email failed):", {
          name,
          email,
          subject,
          message,
          timestamp: new Date().toISOString()
        });
        
        // Still respond positively to user but log the issue
        res.status(200).json({ 
          message: "Thank you for your message! I'll get back to you soon." 
        });
      }
      
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Sorry, there was an error sending your message. Please try again later." 
      });
    }
  });

  // REMOVE: /api/download-resume route (migrated to Vercel serverless function)

  const httpServer = createServer(app);
  return httpServer;
}

// Note: This file is now obsolete if all logic is migrated to serverless functions.
// You may safely delete this file and the server directory if not using Express for anything else.
// If you keep this, just return a dummy server for compatibility:
