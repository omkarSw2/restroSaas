import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950 font-body">
      <Header />
      <main className="grow pt-32 pb-20 px-6 sm:px-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-headline font-bold text-zinc-900 dark:text-white mb-4">
          Terms of Service & EULA
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 italic">
          Last Updated: June 10, 2026
        </p>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <p>
            Welcome to techrestoPOS, a product owned and operated by Techcardz Services Private Limited (hereinafter referred to as "Company", "we", "us", or "our"). These Terms of Service and End User License Agreement (collectively, the "Terms") constitute a legally binding agreement between you (the "Client", "Restaurant Partner", or "User") and Techcardz Services Private Limited concerning your access to and use of the techrestoPOS software, website (www.techrestopos.com), mobile applications, and any related point-of-sale (POS) hardware or services (collectively, the "Services").
          </p>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">1.1 Acceptance of Terms</h2>
            <p>
              By creating an account, accessing, or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are entering into these Terms on behalf of a company, restaurant, or other legal entity, you represent that you have the authority to bind such entity to these Terms. If you do not have such authority, or if you do not agree with these Terms, you must not accept these Terms and may not use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">1.2 Description of Services</h2>
            <p>
              techrestoPOS is a cloud-based, multi-tenant Software as a Service (SaaS) platform designed for restaurant and hospitality management. The Services include, but are not limited to, point-of-sale operations, inventory management, digital menu rendering, QR-code based ordering, customer loyalty management, and payment gateway integration. We reserve the right to modify, suspend, or discontinue any part of the Services at our sole discretion with or without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">1.3 Account Registration and Security</h2>
            <div className="space-y-4">
              <p>
                <strong>Registration:</strong> To utilize the Services, you must register for an account by providing complete and accurate information, including business registration details, tax identification numbers (e.g., GST), and authorized representative contact information.
              </p>
              <p>
                <strong>Account Responsibility:</strong> You are entirely responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
              </p>
              <p>
                <strong>Tenant Administration:</strong> As a Restaurant Partner, you may create sub-accounts for your employees (e.g., Cashiers, Managers, Kitchen Staff). You are strictly liable for the actions of any user accessing the platform through your tenant account.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">1.4 Fees, Billing, and Taxes</h2>
            <div className="space-y-4">
              <p>
                <strong>Subscription Fees:</strong> Use of the Services is subject to the payment of subscription fees as detailed on our pricing page or custom contract. Fees are billed in advance on a recurring basis (e.g., monthly, annually).
              </p>
              <p>
                <strong>Payment Processing:</strong> All subscription payments are processed securely through our authorized payment gateways. You authorize us to charge your selected payment method for all applicable fees.
              </p>
              <p>
                <strong>Taxes:</strong> All fees are exclusive of all applicable taxes, levies, or duties imposed by taxing authorities. You are responsible for payment of all such taxes, excluding taxes based solely on our net income.
              </p>
              <p>
                <strong>Third-Party Payment Gateways:</strong> The Services integrate with third-party gateways (e.g., Razorpay) to facilitate transactions between your restaurant and your diners. Techcardz Services Private Limited is not a party to these transactions and charges no hidden commission unless explicitly stated in your contract.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">1.5 Intellectual Property Rights</h2>
            <div className="space-y-4">
              <p>
                <strong>Company Ownership:</strong> Techcardz Services Private Limited retains all rights, title, and interest in and to the Services, including all source code, algorithms, UI/UX designs, trademarks, and proprietary data models.
              </p>
              <p>
                <strong>License Grant:</strong> Subject to your compliance with these Terms and payment of all applicable fees, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services solely for your internal business operations.
              </p>
              <p>
                <strong>Restrictions:</strong> You shall not (a) modify, reverse engineer, decompile, or disassemble the Services; (b) copy, distribute, or resell the Services; (c) use the Services to build a competitive product; or (d) remove any proprietary notices or labels from the Services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">1.6 Limitation of Liability</h2>
            <p className="uppercase text-sm tracking-wide bg-zinc-100 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL TECHCARDZ SERVICES PRIVATE LIMITED, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE SERVICES. THIS INCLUDES DOWNTIME, HARDWARE FAILURES, INTERNET OUTAGES, OR THIRD-PARTY PAYMENT GATEWAY FAILURES. OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU TO US DURING THE THREE (3) MONTHS PRIOR TO THE ACT GIVING RISE TO THE LIABILITY.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">1.7 Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Techcardz Services Private Limited and its affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from: (a) your use of and access to the Services; (b) your violation of any term of these Terms; (c) your violation of any third-party right, including without limitation any copyright, property, or privacy right; or (d) any claim that your use of the Services caused damage to a third party (including your end-customers).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">1.8 Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Services will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">1.9 Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any dispute, controversy, or claim arising out of or relating to these Terms, or the breach, termination, or invalidity thereof, shall be settled by arbitration in accordance with the Arbitration and Conciliation Act, 1996. The seat of arbitration shall be [Your Jurisdiction/City, India], and the proceedings shall be conducted in English.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
