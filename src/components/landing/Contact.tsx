"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
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
      email: "",
      businessName: "",
      phoneNumber: "",
      businessType: "",
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
    <section className="bg-background pt-24" id="contact">
      {/* Hero Header */}
      <div className="relative py-20 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-on-surface leading-tight mb-6"
          >
            Get in <span className="text-primary italic">Touch</span> with Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-xl text-secondary font-medium leading-relaxed"
          >
            Ready to accelerate your commerce? Our team is standing by to build
            your custom TechResto experience.
          </motion.p>
        </div>
        {/* Decorative background elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-8 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Request a Demo Form (Left Column) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-white"
        >
          <h2 className="text-3xl font-bold font-headline mb-8 flex items-center gap-4 text-on-surface">
            Request a Demo
            <span className="w-16 h-1 bg-primary rounded-full"></span>
          </h2>

          {submitStatus && (
            <div
              className={`mb-6 p-4 rounded-xl ${submitStatus.success ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined">
                  {submitStatus.success ? "check_circle" : "error"}
                </span>
                <span className="font-semibold">{submitStatus.message}</span>
              </div>
            </div>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="space-y-2 group">
                      <FormLabel className="font-label text-xs font-bold uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          autoComplete="name"
                          aria-required="true"
                          className="w-full bg-surface border-transparent focus:border-primary focus:ring-0 rounded-xl p-4 font-body transition-all outline-none border-2 text-on-surface"
                          placeholder="John Doe"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2 group">
                      <FormLabel className="font-label text-xs font-bold uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">
                        Work Email
                      </FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          type="email"
                          autoComplete="email"
                          aria-required="true"
                          className="w-full bg-surface border-transparent focus:border-primary focus:ring-0 rounded-xl p-4 font-body transition-all outline-none border-2 text-on-surface"
                          placeholder="john@business.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem className="space-y-2 group">
                      <FormLabel className="font-label text-xs font-bold uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">
                        Restaurant Name
                      </FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          className="w-full bg-surface border-transparent focus:border-primary focus:ring-0 rounded-xl p-4 font-body transition-all outline-none border-2 text-on-surface"
                          placeholder="Savory Garden"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="space-y-2 group">
                      <FormLabel className="font-label text-xs font-bold uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          type="tel"
                          autoComplete="tel"
                          aria-required="true"
                          maxLength={10}
                          onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) {
                              e.preventDefault();
                            }
                          }}
                          className="w-full bg-surface border-transparent focus:border-primary focus:ring-0 rounded-xl p-4 font-body transition-all outline-none border-2 text-on-surface"
                          placeholder="9876543210"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="businessType"
                render={({ field }) => (
                  <FormItem className="space-y-2 group">
                    <FormLabel className="font-label text-xs font-bold uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">
                      Business Type
                    </FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full bg-surface border-transparent focus:border-primary focus:ring-0 rounded-xl p-4 font-body transition-all outline-none border-2 text-on-surface appearance-none"
                      >
                        <option value="">Select Type</option>
                        <option value="Retail Boutique">Retail Boutique</option>
                        <option value="Quick Service Restaurant">
                          Quick Service Restaurant
                        </option>
                        <option value="Fine Dining">Fine Dining</option>
                        <option value="Enterprise Retail">
                          Enterprise Retail
                        </option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="space-y-2 group">
                    <FormLabel className="font-label text-xs font-bold uppercase tracking-widest text-secondary group-focus-within:text-primary transition-colors">
                      Your Message
                    </FormLabel>
                    <FormControl>
                      <textarea
                        {...field}
                        rows={4}
                        className="w-full bg-surface border-transparent focus:border-primary focus:ring-0 rounded-xl p-4 font-body transition-all outline-none border-2 text-on-surface"
                        placeholder="Tell us about your operational needs..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-zinc-900 hover:bg-black text-white rounded-xl font-bold text-lg shadow-xl shadow-zinc-200 hover:shadow-primary/20 active:scale-[0.98] transition-all flex justify-center items-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <span>Processing...</span>
                    {/* Optional: Add a small spinner or dots animation */}
                  </div>
                ) : (
                  <>
                    Request Your TechResto Demo
                    <span className="material-symbols-outlined icon-filled text-primary">
                      bolt
                    </span>
                  </>
                )}
              </button>
            </form>
          </Form>
        </motion.div>

        {/* Contact Info & Map (Right Column) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-8"
        >
          {/* Contact Details */}
          <div className="bg-white rounded-3xl p-8 space-y-10 shadow-sm border border-zinc-100">
            <div className="flex gap-6 items-start">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                <span className="material-symbols-outlined text-3xl icon-filled">
                  phone_in_talk
                </span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl mb-1 text-zinc-900">
                  Call Our Strategists
                </h4>
                <p className="text-secondary font-medium tracking-tight">
                  +1 (888) TECH-RESTO
                </p>
                <p className="text-zinc-400 text-sm mt-1">
                  Mon-Fri, 8am-8pm EST
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                <span className="material-symbols-outlined text-3xl icon-filled">
                  mail
                </span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl mb-1 text-zinc-900">
                  Email Support
                </h4>
                <p className="text-secondary font-medium tracking-tight">
                  hello@techresto.com
                </p>
                <p className="text-zinc-400 text-sm mt-1">
                  Response within 2 hours
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                <span className="material-symbols-outlined text-3xl icon-filled">
                  location_on
                </span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl mb-1 text-zinc-900">
                  Global HQ
                </h4>

                <p className="text-zinc-400 text-sm mt-1">Belgaum, Karnataka</p>
              </div>
            </div>
          </div>

          {/* Map Component */}
          {/* <div className="relative group rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square">
            <img 
              alt="Austin Texas downtown map" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUDiclazY7xnApkzMLUTCSHAGoflbTCpdtr4Ksf9bz54Ui1SHYvChG0gCAnOALcXqyz5amSjOuhIxthZfd2svypBUGsBMRdFvRMOkC9Krt2oBDrB05m8TP4ax0uL3cL6iWX791Z2whMDYTxXmuGDT9bHg__cP7XIprcMcBaFM27S6tcB2OXEtwg9AJlAxBeNUxM1UnhCN_Q4rvnLUhKKWApDMVv8mDcbhYnGSryIHD6nmMtaOIzdYOvuO7nH5ODOsxsGu9JmJbLWU" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent flex items-end p-6 pointer-events-none">
              <div className="bg-white/80 backdrop-blur-md px-5 py-3 rounded-2xl flex items-center gap-3 shadow-lg border border-white/20">
                <span className="material-symbols-outlined text-primary icon-filled">location_on</span>
                <span className="font-bold text-zinc-900">Open in Maps</span>
              </div>
            </div>
          </div> */}
        </motion.div>
      </div>

      {/* Social Proof Section */}
      {/* <section className="bg-[#141414] py-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-white space-y-4 text-center md:text-left">
            <h3 className="text-4xl md:text-5xl font-headline font-black">
              Trusted by 15,000+ Merchants
            </h3>
            <p className="text-zinc-400 max-w-lg text-lg">
              From artisanal bakeries to multi-state retailers, we provide the
              TechResto energy that drives growth.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-40 grayscale brightness-200 text-white">
            <span className="material-symbols-outlined text-5xl">
              storefront
            </span>
            <span className="material-symbols-outlined text-5xl">
              restaurant
            </span>
            <span className="material-symbols-outlined text-5xl">
              shopping_cart
            </span>
            <span className="material-symbols-outlined text-5xl">
              local_cafe
            </span>
          </div>
        </div>
      </section> */}
    </section>
  );
}
