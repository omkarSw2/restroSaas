import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950 font-body">
      <Header />
      <main className="grow pt-32 pb-20 px-6 sm:px-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-headline font-bold text-zinc-900 dark:text-white mb-4">
          Tech Resto – Privacy Policy
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 italic">
          Last updated: April 2024
        </p>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">1. Information We Collect</h2>
            <p>We collect essential information such as business details including name, address, and tax-related data, along with contact information like phone number and email. We also collect transaction-related data such as billing records, orders, and reports.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">2. How We Use Information</h2>
            <p>The collected information is used to provide and improve our POS services, manage subscriptions and billing, offer customer support, and communicate important updates or service-related notifications.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">3. Data Security</h2>
            <p>We implement standard security measures to protect user data from unauthorized access. However, no system can be completely secure, and absolute data protection cannot be guaranteed.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">4. Data Sharing</h2>
            <p>Tech Resto does not sell or rent user data to third parties. Information may only be shared when required by law or with trusted service providers for operational purposes such as cloud hosting.</p>
          </section>

          <section>
            <p>User data is stored on secure cloud servers, and we take reasonable steps to ensure it is protected against unauthorized access, misuse, or loss.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">6. User Rights</h2>
            <p>Users have the right to request updates, corrections, or deletion of their data. For any such requests or concerns, users can contact the support team directly.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">7. Cookies & Tracking</h2>
            <p>If users access Tech Resto through a website or application, cookies or similar technologies may be used to enhance user experience and improve functionality.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">8. Policy Updates</h2>
            <p>This Privacy Policy may be revised periodically. Continued use of the service after updates indicates acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">9. Contact Information</h2>
            <p>For any queries or support, users can contact the Tech Resto Support Team via email or phone using the provided contact details.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
