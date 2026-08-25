import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for SAS3D Studio",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-20">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Terms and Conditions
        </h1>

        <div className="prose max-w-none text-muted-foreground">
          {/* <p>
            Last updated: August 25, 2026
          </p> */}

          <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
          <p className="pb-4">
            These terms and conditions (Terms) govern your use of the SAS3D Studio
            website and services provided by SAS3D Studio. By accessing or using our
            website, you agree to be bound by these Terms. If you disagree with any
            part of the Terms, you may not access the website.
          </p>

          <h2 className="text-2xl font-bold text-foreground">2. Intellectual Property</h2>
          <p className="pb-4">
            All content included on this website, such as text, graphics, logos,
            images, and software, is the property of SAS3D Studio or its content
            providers and is protected by international copyright laws.
          </p>

          <h2 className="text-2xl font-bold text-foreground">3. Use of Content</h2>
          <p>
            You may not modify, reproduce, display, distribute, or exploit any part
            of this website or its content without express written permission from
            SAS3D Studio. This includes framing or similar techniques used on other
            websites.
          </p>

          <h2 className="text-2xl font-bold text-foreground">4. Limitation of Liability</h2>
          <p className="pb-4">
            SAS3D Studio shall not be liable for any direct, indirect, incidental,
            special, consequential, or punitive damages, or any loss of profits or
            revenues, whether incurred directly or indirectly, or any loss of data,
            use, goodwill, or other intangible losses, resulting from your use of
            access to the website.
          </p>

          <h2 className="text-2xl font-bold text-foreground">5. Termination</h2>
          <p className="pb-4">
            SAS3D Studio may terminate your access to the website at any time, with
            or without cause, without notice. Upon termination, you must immediately
            cease using the website.
          </p>

          <h2 className="text-2xl font-bold text-foreground">6. Governing Law</h2>
          <p className="pb-4">
            These Terms shall be governed by and construed in accordance with the
            laws of India, without regard to its conflict of law provisions. Any
            dispute arising out of or relating to these Terms shall be subject to
            the exclusive jurisdiction of the courts located in India.
          </p>
        </div>
      </div>
    </div>
  );
}