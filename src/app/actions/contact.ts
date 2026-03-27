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

  const { fullName, email, businessName, phoneNumber, businessType, message } = validatedFields.data;

  try {
    console.time("submitContactForm-db-connect");
    // Connect to MongoDB
    await connectDB();
    console.timeEnd("submitContactForm-db-connect");
    
    console.time("submitContactForm-db-create");
    // Save to database
    await Contact.create({
      fullName,
      email,
      businessName,
      phoneNumber,
      businessType,
      message,
    });
    console.timeEnd("submitContactForm-db-create");

    // Send Email alert via Resend if API key exists
    if (process.env.RESEND_API_KEY) {
      console.time("submitContactForm-email-send");
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Acme <onboarding@resend.dev>",
          to: ["delivered@resend.dev"], // Replace with actual recipient
          subject: `New Lead: ${businessName || businessType || fullName}`,
          text: `Name: ${fullName}\nEmail: ${email}\nBusiness Name: ${businessName}\nPhone: ${phoneNumber}\nBusiness Type: ${businessType}\nMessage: ${message}`,
        });
      } catch (emailErr) {
        console.error("Email send error (swallowed):", emailErr);
      } finally {
        console.timeEnd("submitContactForm-email-send");
      }
    }

    return { success: true, message: "Thank you! Your request has been submitted." };
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Save to DB error:", error.message || error);
    
    let errorMessage = "Failed to submit form. Please try again later.";
    if (error.name === "MongooseServerSelectionError") {
      errorMessage = "Database connection timeout. Please check your network or try again later.";
    }

    return { success: false, message: errorMessage };
  }
}
