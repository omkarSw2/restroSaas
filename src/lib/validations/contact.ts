import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  businessName: z.string().min(2, { message: "Business name must be at least 2 characters." }),
  phoneNumber: z
    .string()
    .length(10, { message: "Phone number must be exactly 10 digits." })
    .regex(/^[6-9]\d{9}$/, {
      message: "Invalid Indian phone number. Must start with 6-9.",
    }),
  businessType: z.string().min(1, { message: "Please select your business type." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
