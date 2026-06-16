import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function DataProcessingAgreement() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950 font-body">
      <Header />
      <main className="grow pt-32 pb-20 px-6 sm:px-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-headline font-bold text-zinc-900 dark:text-white mb-4">
          Data Processing Agreement (DPA)
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 italic">
          Privacy Compliance & Data Processing Agreement
        </p>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <p>
            To comply with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the emerging Digital Personal Data Protection (DPDP) Act, 2023, the following outlines the data relationship between you (the Restaurant Partner) and us (Techcardz Services Private Limited).
          </p>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">4.1 Data Fiduciary and Data Processor Roles</h2>
            <div className="space-y-4">
              <p>
                <strong>Data Fiduciary (Restaurant Partner):</strong> You are the Data Fiduciary. You independently determine the purpose and means of collecting personal data from your diners (e.g., collecting phone numbers for order tracking, marketing, or loyalty points). You are legally responsible for obtaining the necessary consent from your diners to collect this data.
              </p>
              <p>
                <strong>Data Processor (Techcardz Services Private Limited):</strong> We are the Data Processor. We process the diners' personal data strictly on your behalf, according to your instructions, and solely for the purpose of operating the techrestoPOS software features you have activated.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">4.2 Obligations of the Data Fiduciary (You)</h2>
            <p className="mb-2">You agree to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Obtain clear, explicit, and verifiable consent from diners before using techrestoPOS to capture their data.</li>
              <li>Ensure that your use of the platform's SMS, marketing, and loyalty features complies with all anti-spam laws (e.g., TRAI regulations in India).</li>
              <li>Respond to and manage any "Right to be Forgotten" or data deletion requests made by your diners.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">4.3 Obligations of the Data Processor (Us)</h2>
            <p className="mb-2">We agree to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Process data only to deliver the Services outlined in these Terms.</li>
              <li>Implement robust technical and organizational measures to ensure a level of security appropriate to the risk.</li>
              <li>Provide you with the necessary software tools (via the Admin Dashboard) to delete, anonymize, or export customer data to fulfill your legal obligations to your diners.</li>
              <li>Notify you without undue delay, and in no case later than 72 hours, after becoming aware of a personal data breach affecting your tenant environment.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">4.4 Sub-Processors</h2>
            <p>
              You authorize Techcardz Services Private Limited to engage third-party sub-processors (such as cloud infrastructure providers) to process personal data. We ensure that our sub-processors are bound by data protection obligations at least as restrictive as those contained in this agreement.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
