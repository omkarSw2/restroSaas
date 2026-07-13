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
    // Connect to MongoDB
    await connectDB();

    // Save to database
    await Contact.create({
      fullName,
      email,
      businessName,
      phoneNumber,
      businessType,
      message,
    });

    // Send email alert via Resend if fully configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactTo = process.env.CONTACT_TO_EMAIL;
    const contactFrom = process.env.CONTACT_FROM_EMAIL;

    if (resendApiKey && contactTo && contactFrom) {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: contactFrom,
          to: contactTo.split(",").map((address) => address.trim()),
          replyTo: email,
          subject: `New Lead: ${businessName || businessType || fullName}`,
          text: `Name: ${fullName}\nEmail: ${email}\nBusiness Name: ${businessName}\nPhone: ${phoneNumber}\nBusiness Type: ${businessType}\nMessage: ${message}`,
        });
      } catch (emailErr) {
        // The lead is already saved; a failed notification shouldn't fail the request
        console.error("Email send error (swallowed):", emailErr);
      }
    } else if (resendApiKey) {
      console.warn(
        "RESEND_API_KEY is set but CONTACT_TO_EMAIL/CONTACT_FROM_EMAIL are missing; skipping lead notification email.",
      );
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
