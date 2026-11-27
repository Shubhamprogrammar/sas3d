import Link from "next/link";
import { notFound } from "next/navigation";
import { ObjectId } from "mongodb";
import { ArrowLeft, Mail, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { requireAdmin } from "@/lib/admin-auth";
import { SITE } from "@/lib/constants";
import { CONTACT_STATUSES, getContactsCollection } from "@/lib/mongodb";
import { updateInquiryStatus } from "../../actions";
import { StatusBadge, formatDate } from "../../admin-ui";

// wa.me needs the full international number; 10-digit numbers are assumed to be Indian.
function whatsappLink(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits.length === 10 ? `91${digits}` : digits}`;
}

export default async function InquiryPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();

  const { id } = await params;
  if (!ObjectId.isValid(id)) notFound();

  const contacts = await getContactsCollection();
  const inquiry = await contacts.findOne({ _id: new ObjectId(id) });
  if (!inquiry) notFound();

  const replySubject = encodeURIComponent(`Re: your ${inquiry.service} inquiry — ${SITE.shortName}`);
  const details = [
    { label: "Email", value: inquiry.email },
    { label: "Phone", value: inquiry.phone },
    { label: "Company", value: inquiry.company },
    { label: "Service", value: inquiry.service },
    { label: "Budget", value: inquiry.budget },
    { label: "Timeline", value: inquiry.timeline },
    { label: "Received", value: formatDate(inquiry.createdAt) },
    { label: "Team email sent", value: inquiry.emailSent ? "Yes" : "No" },
  ];

  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <Link
          href="/admin-dashboard"
          className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
        >
          <ArrowLeft className="size-4" />
          All inquiries
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{inquiry.name}</h1>
          <StatusBadge status={inquiry.status} />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Project description
            </p>
            <p className="mt-4 whitespace-pre-wrap break-words text-base leading-7">
              {inquiry.message}
            </p>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
              <Button asChild className="rounded-full">
                <a href={`mailto:${inquiry.email}?subject=${replySubject}`}>
                  <Mail />
                  Reply by email
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href={whatsappLink(inquiry.phone)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle />
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href={`tel:${inquiry.phone.replace(/[^\d+]/g, "")}`}>
                  <Phone />
                  Call
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-background p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Status
              </p>
              <form action={updateInquiryStatus} className="mt-4 flex flex-wrap gap-2">
                <input type="hidden" name="id" value={id} />
                {CONTACT_STATUSES.map((value) => (
                  <Button
                    key={value}
                    type="submit"
                    name="status"
                    value={value}
                    size="sm"
                    variant={value === inquiry.status ? "default" : "outline"}
                    disabled={value === inquiry.status}
                    aria-pressed={value === inquiry.status}
                    className="rounded-full capitalize disabled:opacity-100"
                  >
                    {value}
                  </Button>
                ))}
              </form>
              {inquiry.updatedAt && (
                <p className="mt-3 text-xs text-muted-foreground">
                  Updated {formatDate(inquiry.updatedAt)}
                </p>
              )}
            </div>

            <dl className="rounded-2xl border border-border bg-background p-6 text-sm">
              {details.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between gap-4 border-b border-border py-3 first:pt-0 last:border-0 last:pb-0"
                >
                  <dt className="shrink-0 text-muted-foreground">{label}</dt>
                  <dd className="min-w-0 break-words text-right">{value || "—"}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
