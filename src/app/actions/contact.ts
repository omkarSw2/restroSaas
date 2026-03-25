"use server";

import { Resend } from "resend";
import { contactFormSchema, ContactFormValues } from "@/lib/validations/contact";
import connectDB from "@/lib/db/mongodb";
import { Contact } from "@/models/Contact";

export async function submitContactForm(data: ContactFormValues) {
  // Validate data server-side
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please check your inputs.",
    };
  }

  const { fullName, email, businessType, message } = validatedFields.data;

  try {
    // Connect to MongoDB
    await connectDB();
    
    // Save to database
    await Contact.create({
      fullName,
      email,
      businessType,
      message,
    });

    // Send Email alert via Resend if API key exists
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["delivered@resend.dev"], // Replace with actual recipient
        subject: `New Lead: ${businessType || fullName}`,
        text: `Name: ${fullName}\nEmail: ${email}\nBusiness Type: ${businessType}\nMessage: ${message}`,
      });
    }

    return { success: true, message: "Thank you! Your request has been submitted." };
  } catch (err) {
    console.error("Save to DB or Email send error", err);
    return { success: false, message: "Failed to submit form. Please try again later." };
  }
}
