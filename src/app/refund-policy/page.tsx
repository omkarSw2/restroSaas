import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function RefundPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950 font-body">
      <Header />
      <main className="grow pt-32 pb-20 px-6 sm:px-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-headline font-bold text-zinc-900 dark:text-white mb-4">
          Cancellation & Refund Policy
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 italic">
          Last Updated: June 10, 2026
        </p>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <p>
            Techcardz Services Private Limited enforces strict policies regarding cancellations and refunds to ensure transparent business operations. This policy is divided into two distinct categories: SaaS Subscriptions and End-Customer Food Orders.
          </p>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">3.1 Software Subscription Cancellations (B2B)</h2>
            <div className="space-y-4">
              <p>
                <strong>Cancellation Process:</strong> Restaurant Partners may cancel their techrestoPOS subscription at any time by navigating to the "Billing" or "Subscription" section of their Super Admin dashboard, or by contacting our support team in writing at least 7 days prior to the next billing cycle.
              </p>
              <p>
                <strong>Effect of Cancellation:</strong> Upon cancellation, the Service will remain active until the end of the current paid billing period. After this period, access to the POS, admin dashboard, and all related cloud services will be suspended.
              </p>
              <p>
                <strong>Data Retrieval:</strong> Upon cancellation, Restaurant Partners have a 30-day grace period to export their historical data (sales reports, inventory). After 30 days, Techcardz Services Private Limited reserves the right to permanently delete the tenant data.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">3.2 Software Subscription Refunds</h2>
            <div className="space-y-4">
              <p>
                Because techrestoPOS operates on a pay-as-you-go Software-as-a-Service model and incurs immediate infrastructural costs:
              </p>
              <p>
                <strong>Strict No-Refund Policy:</strong> All fees paid for SaaS subscriptions, initial setup, hardware procurement, and custom onboarding are strictly non-refundable.
              </p>
              <p>
                <strong>Prorated Refunds:</strong> We do not provide prorated refunds for mid-billing cycle cancellations.
              </p>
              <p>
                <strong>Exceptional Circumstances:</strong> Refunds will only be considered under extreme, provable circumstances where Techcardz Services Private Limited entirely fails to deliver the promised software access for a continuous period exceeding 72 hours due to gross negligence on our part. Any such exceptional refund request must be submitted within 7 days of the outage and is subject to the sole discretion of our management team.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">3.3 End-Customer Food Order Refunds (B2B2C)</h2>
            <div className="space-y-4">
              <p>
                Techcardz Services Private Limited provides the technological infrastructure (the POS and ordering interface) but does not prepare, handle, or deliver food products. Therefore:
              </p>
              <p>
                <strong>Restaurant Responsibility:</strong> Any and all disputes regarding food quality, incorrect orders, delayed delivery, or cancellations made by end-customers (diners) are the exclusive responsibility of the Restaurant Partner.
              </p>
              <p>
                <strong>No Liability:</strong> Techcardz Services Private Limited is completely absolved of any liability regarding food-related refunds. We do not hold funds in escrow for food orders; funds are routed directly to the Restaurant Partner's configured payment gateway (e.g., Razorpay account).
              </p>
              <p>
                <strong>Processing Customer Refunds:</strong> Restaurant Partners must initiate customer refunds directly from their techrestoPOS dashboard or through their respective payment processor's dashboard. Techcardz Services Private Limited will not entertain direct refund requests from diners.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
