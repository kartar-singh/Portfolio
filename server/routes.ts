import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real implementation, you would:
      // 1. Send an email using a service like Nodemailer
      // 2. Store the message in a database
      // 3. Send a confirmation email to the user
      
      // For now, we'll just log the message and return success
      console.log("Contact form submission:", validatedData);
      
      // Simulate async email sending
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
