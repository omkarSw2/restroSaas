"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { submitContactForm } from "@/app/actions/contact";
import {
  contactFormSchema,
  ContactFormValues,
} from "@/lib/validations/contact";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      hotelName: "",
      email: "",
      phone: "",
      outlets: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await submitContactForm(data);
      if (result.success) {
        setSubmitStatus({ success: true, message: result.message });
        form.reset();
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || "Something went wrong.",
        });
        if (result.errors) {
          Object.entries(result.errors).forEach(([key, messages]) => {
            if (messages && messages.length > 0) {
              form.setError(key as keyof ContactFormValues, {
                type: "server",
                message: messages[0],
              });
            }
          });
        }
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus({ success: false, message: "A network error occurred." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-slate-100">
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Get a Free Demo
              </h2>
              <p className="mt-2 text-slate-600">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>
            </div>

            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-md ${submitStatus.success ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
              >
                {submitStatus.message}
              </div>
            )}

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="hotelName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hotel/Restaurant Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Dining" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@example.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+1 (555) 000-0000"
                            type="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="outlets"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Outlets</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select locations" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1-5">1-5 Locations</SelectItem>
                          <SelectItem value="6-20">6-20 Locations</SelectItem>
                          <SelectItem value="20+">20+ Locations</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How can we help you?"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            </Form>
          </div>

          <div className="lg:pl-10 pt-10 lg:pt-0 flex flex-col justify-center h-full">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Ready to upgrade your POS?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Join over 500+ boutique hotels and restaurants streamlining their
              operations with our platform.
            </p>
            <dl className="mt-10 space-y-8 text-base leading-7 text-slate-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                </dt>
                <dd>
                  500 Howard Street
                  <br />
                  San Francisco, CA 94105
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <span className="material-symbols-outlined text-primary">
                    call
                  </span>
                </dt>
                <dd>
                  <a
                    className="hover:text-primary"
                    href="tel:+1 (555) 234-5678"
                  >
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                </dt>
                <dd>
                  <a
                    className="hover:text-primary"
                    href="mailto:hello@pos-saas.com"
                  >
                    hello@pos-saas.com
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-10 rounded-xl overflow-hidden shadow-lg h-64 bg-slate-200 relative">
              <div
                className="absolute inset-0 flex items-center justify-center bg-slate-200"
                data-location="San Francisco"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Map showing office location in San Francisco"
                  className="w-full h-full object-cover grayscale opacity-75"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAklDAp9WDa3mvzrbA1bnBdlNaFIhvFCtm0XBwRY1Yn-4oDEpNRrS9I8wE_VJ94UcqVWe7EMe-FtNlZBZwzHpHzj3nsLXmUrptVWtG8EjzBqLBqEq4CoGvzQ4jwPWG0l-wJ7QIgj-DBTWKKdxwnIYuyNskk3j5GOrGXvJeUoEbeDxbNry7lVW_07_TsHqKOpNf3X41mN5bM4DZKtdRGW1AfnHyII6QJNMcUrn16O_zV4VNCRvRRaYK4znmj6oTfnne72m2dYgsif25Y"
                />
                <div className="absolute inset-0 bg-slate-300 animate-pulse flex items-center justify-center text-slate-500 font-medium">
                  Map Loading...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
