import type { Metadata } from "next";

import { TermsContent } from "./terms-content";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for SAS3D Studio",
};

export default function TermsAndConditionsPage() {
  return <TermsContent />;
}
