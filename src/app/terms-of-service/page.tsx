import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950 font-body">
      <Header />
      <main className="grow pt-32 pb-20 px-6 sm:px-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-headline font-bold text-zinc-900 dark:text-white mb-4">
          Tech Resto – Terms & Conditions
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 italic">
          Last updated: April 2024
        </p>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using Tech Resto POS, you confirm that you have read, understood, and agreed to follow these Terms & Conditions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">2. Service Description</h2>
            <p>Tech Resto provides a complete Point of Sale (POS) system designed to simplify restaurant operations, including billing, order management, reporting, and overall business management.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">3. Order Confirmation & Refund Policy</h2>
            <p>Once a purchase is completed, it is treated as final and cannot be canceled. Tech Resto follows a strict no-refund policy after order confirmation, so users are advised to carefully review all features and ensure suitability before proceeding with the purchase.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">4. Setup & Configuration</h2>
            <p>After order confirmation, the setup and configuration process is typically completed within 24 to 48 hours. The client is required to provide all necessary business details such as menu, pricing, and tax information on time. Any delay in providing these details may result in a delay in the setup process.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">5. User Responsibilities</h2>
            <p>Users are responsible for maintaining the confidentiality of their login credentials and ensuring that their account is used securely. The software must not be misused, copied, or resold without proper authorization. Users must also provide accurate and updated business information at all times.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">6. Subscription & Payments</h2>
            <p>Tech Resto services are offered on a subscription basis, which may be monthly or yearly. All payments must be made in advance to continue using the services. Failure to make timely payments may result in suspension or restricted access to the platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">7. Service Availability</h2>
            <p>Tech Resto strives to provide uninterrupted service however, continuous uptime cannot be guaranteed. There may be occasional downtime due to maintenance, updates, or unforeseen technical issues.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">8. Limitation of Liability</h2>
            <p>Tech Resto is not responsible for any losses, including business loss, revenue loss, or data loss that may occur due to system issues or improper use of the software. Users are encouraged to maintain backup records for safety.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">9. Termination</h2>
            <p>Tech Resto reserves the right to suspend or terminate services if any misuse, violation, or breach of these terms is detected.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">10. Changes to Terms</h2>
            <p>These Terms & Conditions may be updated from time to time. Continued use of Tech Resto services after updates implies acceptance of the revised terms.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
