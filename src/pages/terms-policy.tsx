import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function TermsPolicy() {
  return (
    <>
      <Head>
        <title>Terms & Privacy Policy - eDealer</title>
        <meta
          name="description"
          content="Read eDealer's terms and conditions, privacy policy, and legal information."
        />
      </Head>

      <Header />
      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-light">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-dark mb-12">Terms & Conditions</h1>

            {/* Terms of Service */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-dark mb-4">1. Terms of Service</h2>

              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-bold text-lg mb-2">1.1 Acceptance of Terms</h3>
                  <p>
                    By accessing and using the eDealer platform, you accept and agree to be bound by the terms and
                    provision of this agreement. If you do not agree to abide by the above, please do not use this
                    service.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">1.2 Use License</h3>
                  <p>
                    Permission is granted to temporarily download one copy of the materials (information or software)
                    on eDealer's website for personal, non-commercial transitory viewing only. This is the grant of a
                    license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside mt-2 ml-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to decompile or reverse engineer any software contained on eDealer</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">1.3 Disclaimer of Warranties</h3>
                  <p>
                    The materials on eDealer are provided on an 'as is' basis. eDealer makes no warranties, expressed
                    or implied, and hereby disclaims and negates all other warranties including, without limitation,
                    implied warranties or conditions of merchantability, fitness for a particular purpose, or
                    non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">1.4 Investment Disclaimer</h3>
                  <p>
                    All investments carry risk, including potential loss of principal. Past performance is not
                    indicative of future results. eDealer's automated trading system uses sophisticated algorithms, but
                    market conditions can be unpredictable. Clients invest at their own risk.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">1.5 No Profit - No Charge Policy</h3>
                  <p>
                    eDealer operates on a "No Profit - No Charge" policy. You only pay commission on actual profits
                    generated. This ensures our interests are aligned with yours.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">1.6 User Responsibilities</h3>
                  <p>
                    You agree to:
                  </p>
                  <ul className="list-disc list-inside mt-2 ml-4">
                    <li>Provide accurate and complete information during registration</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Not engage in any fraudulent or illegal activities</li>
                    <li>Not attempt to manipulate market prices or use automated bots unauthorized by eDealer</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-dark mb-4">2. Privacy Policy</h2>

              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-bold text-lg mb-2">2.1 Information Collection</h3>
                  <p>
                    eDealer collects information you provide directly, such as name, email, phone number, and financial
                    information necessary for trading. We also automatically collect certain information about your
                    browsing behavior through cookies and analytics tools.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">2.2 Use of Information</h3>
                  <p>
                    We use collected information to:
                  </p>
                  <ul className="list-disc list-inside mt-2 ml-4">
                    <li>Provide and improve our trading services</li>
                    <li>Process transactions and send related information</li>
                    <li>Communicate with you about updates and changes</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Prevent fraud and enhance platform security</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">2.3 Data Protection</h3>
                  <p>
                    We implement industry-standard security measures to protect your personal and financial information.
                    However, no method of transmission over the internet is 100% secure. eDealer cannot guarantee
                    absolute security.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">2.4 Third-Party Sharing</h3>
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share information
                    with trusted partners necessary to provide our services (e.g., payment processors, brokers).
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">2.5 Cookies</h3>
                  <p>
                    eDealer uses cookies to enhance user experience. You can control cookie settings through your
                    browser, but some features may not function properly with cookies disabled.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">2.6 Your Rights</h3>
                  <p>
                    You have the right to access, correct, or delete your personal information. Contact us at
                    contact@edealer.com for data-related requests.
                  </p>
                </div>
              </div>
            </div>

            {/* Risk Disclosure */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-dark mb-4">3. Risk Disclosure</h2>

              <div className="space-y-6 text-gray-700">
                <p>
                  Trading and investing involve substantial risk of loss. Past performance does not guarantee future
                  results. Before investing, carefully consider:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Market volatility and unpredictability</li>
                  <li>Technological failures or system errors</li>
                  <li>Regulatory changes affecting trading</li>
                  <li>The potential loss of your entire investment</li>
                  <li>Leverage and margin risks, if applicable</li>
                </ul>
                <p className="font-bold">
                  Only invest money you can afford to lose. If you are unsure about any investment, consult with a
                  qualified financial advisor.
                </p>
              </div>
            </div>

            {/* Contact for Legal Issues */}
            <div className="bg-primary text-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
              <p className="mb-4">
                If you have questions or concerns about these terms and conditions, please contact us:
              </p>
              <p className="font-semibold">
                Phone: <a href="tel:+919884177607" className="underline">+91 9884177607</a>
              </p>
              <p className="font-semibold">
                Email: <a href="mailto:contact@edealer.com" className="underline">contact@edealer.com</a>
              </p>
            </div>

            <p className="text-center text-gray-600 mt-12">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}