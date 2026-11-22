import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { webPageJsonLd } from "@/lib/structured-data";

import { TermsContent } from "./terms-content";
import { pageSeo } from "@/lib/seo";

const title = "Terms and Conditions";
const description = "Terms and conditions for using the SAS3D website and services.";

export const metadata: Metadata = {
  title,
  description,
  ...pageSeo("/terms-conditions", { title, description }),
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ path: "/terms-conditions", name: title, description })} />
      <TermsContent />
    </>
  );
}
