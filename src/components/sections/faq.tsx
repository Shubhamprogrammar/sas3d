import { faqs } from "@/data/pricing";

export function Faq() {
  return (
    <section className="section-space bg-muted">
      <div className="frame grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 data-reveal className="text-head">
            Objections, answered
          </h2>
          <p
            data-reveal
            style={{ "--i": 1 } as React.CSSProperties}
            className="mt-5"
          >
            The questions every client asks before saying yes.
          </p>
        </div>
        <div className="gap-14 md:columns-2 lg:col-span-7 lg:col-start-6">
          {faqs.map((faq, index) => (
            <p
              key={faq.question}
              data-reveal
              style={{ "--i": index % 3 } as React.CSSProperties}
              className="mb-6 break-inside-avoid"
            >
              <strong className="font-medium">{faq.question}</strong>{" "}
              {faq.answer}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
