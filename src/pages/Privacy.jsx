const Privacy = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: September 28, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              Welcome to MindMend. We respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you about how we look after your personal data when you use our
              mobile application and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>Account Information:</strong> Email address, name, and authentication data when you create an account</li>
              <li><strong>Habit Data:</strong> The habits you track, completion status, and related events</li>
              <li><strong>Journal Entries:</strong> Your personal reflections and journal content</li>
              <li><strong>AI Interactions:</strong> Your conversations with our AI assistant (Aya)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>Usage Data:</strong> How you interact with the app, features used, and time spent</li>
              <li><strong>Device Information:</strong> Device type, operating system, and app version</li>
              <li><strong>Analytics:</strong> Anonymized usage patterns to improve our service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>To provide and maintain our service</li>
              <li>To personalize your experience and provide AI-powered insights</li>
              <li>To sync your data across devices</li>
              <li>To process payments for premium subscriptions</li>
              <li>To send you important updates about our service</li>
              <li>To improve our app and develop new features</li>
              <li>To provide customer support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Storage and Security</h2>
            <p className="text-gray-600 mb-4">
              Your data is stored securely using industry-standard encryption. We use Firebase for authentication
              and Convex DB for real-time data synchronization. All data transmission is encrypted using HTTPS.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Journal entries and habit data are encrypted at rest</li>
              <li>We implement regular security audits and updates</li>
              <li>Access to your data is strictly limited to necessary personnel</li>
              <li>We do not sell your personal data to third parties</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 mb-4">We use the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>Firebase:</strong> For authentication and user management</li>
              <li><strong>Convex:</strong> For real-time database and synchronization</li>
              <li><strong>OpenAI:</strong> For AI-powered insights and chat functionality</li>
              <li><strong>Apple App Store:</strong> For payment processing and app distribution</li>
            </ul>
            <p className="text-gray-600 mb-4">
              These services have their own privacy policies, and we encourage you to review them.
              We ensure all third-party services meet our privacy and security standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">Under applicable privacy laws, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Request transfer of your data in a structured format</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
            </ul>
            <p className="text-gray-600 mb-4">
              To exercise these rights, please contact us at contact@mindmend.app. We will respond to
              your request within 30 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Retention</h2>
            <p className="text-gray-600 mb-4">
              We retain your personal data only for as long as necessary to provide our services and
              fulfill the purposes outlined in this policy. When you delete your account, we will
              permanently delete your personal data within 30 days, except where we are required
              to retain it by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 mb-4">
              MindMend is suitable for all ages. If you are a parent or guardian and have questions
              about your child's use of the app or their personal information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">International Transfers</h2>
            <p className="text-gray-600 mb-4">
              Your data may be transferred to and processed in countries other than your own.
              We ensure appropriate safeguards are in place to protect your personal data in
              accordance with applicable privacy laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this privacy policy from time to time. We will notify you of any
              material changes by posting the new policy in the app and updating the "last updated"
              date above. Your continued use of MindMend after changes become effective constitutes
              acceptance of the new policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this privacy policy or our privacy practices,
              please contact us at:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Email: privacy@mindmend.app</li>
              <li>Website: www.mindmend.app</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Privacy