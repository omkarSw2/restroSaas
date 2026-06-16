import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950 font-body">
      <Header />
      <main className="grow pt-32 pb-20 px-6 sm:px-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-headline font-bold text-zinc-900 dark:text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 italic">
          Last Updated: June 10, 2026
        </p>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <p>
            Techcardz Services Private Limited ("we", "us", or "our") operates the techrestoPOS platform. This Privacy Policy informs you of our policies regarding the collection, use, protection, and disclosure of Personal Data when you use our Service and the choices you have associated with that data.
          </p>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">2.1 Types of Data Collected</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">A. Data Collected from Restaurant Partners (B2B)</h3>
                <p className="mb-2">When you register for our Service as a Restaurant Partner, we collect:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Business Information:</strong> Legal business name, GST Identification Number (GSTIN), business address, and operational details.</li>
                  <li><strong>Personal Identification Information:</strong> Names, email addresses, phone numbers, and identification documents of the restaurant owners and authorized administrators.</li>
                  <li><strong>Financial Data:</strong> Bank account details, UPI IDs, and billing addresses necessary for processing subscription payments and routing third-party gateway settlements.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">B. Data Collected from End-Customers (B2B2C)</h3>
                <p className="mb-2">When diners interact with the techrestoPOS platform (e.g., via QR Code ordering, digital receipts, or loyalty programs) on behalf of our Restaurant Partners, we process:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Contact Information:</strong> Mobile numbers and names provided during order placement or loyalty program enrollment.</li>
                  <li><strong>Transactional Data:</strong> Order history, dining preferences, items ordered, total bill amounts, and payment methods used.</li>
                  <li><strong>Wallet Data:</strong> Information regarding virtual credit wallets, promotional balances, and loyalty point accrual. (Note: We do not directly collect or store sensitive credit card numbers or banking passwords; these are securely handled directly by our PCI-DSS compliant payment gateway partners like Razorpay).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">C. Automatically Collected Usage Data</h3>
                <p className="mb-2">We automatically collect information on how the Service is accessed and used. This may include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP addresses, browser types, and versions.</li>
                  <li>The pages of our Service that you visit, the time and date of your visit, and the time spent on those pages.</li>
                  <li>Diagnostic data, device identifiers, and operating system details.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">2.2 Purpose of Data Collection and Processing</h2>
            <p className="mb-2">We use the collected data for various comprehensive purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Service Provision:</strong> To maintain, monitor, and provide our SaaS platform functionality to our Restaurant Partners.</li>
              <li><strong>Transaction Fulfillment:</strong> To facilitate the transmission of digital orders from diners to the kitchen display systems.</li>
              <li><strong>Analytics and Improvement:</strong> To analyze usage patterns to improve the software's UI/UX, speed, and reliability.</li>
              <li><strong>Communication:</strong> To send administrative notifications, invoices, OTP verifications (via Firebase/Twilio), and technical alerts.</li>
              <li><strong>Compliance:</strong> To comply with legal obligations, resolve disputes, and enforce our legal agreements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">2.3 Data Sharing and Disclosure</h2>
            <p className="mb-4">
              Techcardz Services Private Limited strictly prohibits the sale or unauthorized renting of personal data. We may disclose your data only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Authorized Third-Party Processors:</strong> We share data with trusted vendors required to run our infrastructure, including cloud hosting providers (e.g., AWS, DigitalOcean), SMS gateways, and payment processors. These vendors are legally bound to protect your data.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your Personal Data in the good faith belief that such action is necessary to comply with a legal obligation, protect the rights or property of Techcardz Services Private Limited, prevent wrongdoing, or protect the personal safety of users.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">2.4 Data Retention and Security</h2>
            <p className="mb-4">
              We retain Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, we are required to retain financial transaction data to comply with tax laws), resolve disputes, and enforce our legal agreements.
            </p>
            <p>
              We utilize enterprise-grade security architectures, including HTTPS/TLS encryption, firewall rules, and strict multi-tenant database access controls to prevent cross-tenant data leakage and unauthorized access.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
