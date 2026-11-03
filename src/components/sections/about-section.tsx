import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CORE_VALUES, SITE } from "@/lib/constants";

const structure = [
  { label: "Designers", value: "2" },
  { label: "Web Developers", value: "3" },
  { label: "Product Managers", value: "1" },
  { label: "Mobile Developers", value: "2" },
  { label: "DevOps", value: "1" },
  { label: "AI Specialists", value: "1" },
  { label: "Testers", value: "2" },
];

const facts = [
  { label: "Founded", value: SITE.foundingYear },
  { label: "Based", value: SITE.location },
  { label: "Projects delivered", value: `${SITE.projectsDelivered}+` },
  { label: "Happy clients", value: `${SITE.happyClients}+` },
  { label: "Average rating", value: "4.9 out of 5" },
  { label: "Availability", value: "Open for new projects" },
];

const linkClass =
  "link-quiet group inline-flex items-center gap-1.5 font-medium";
const arrowClass =
  "size-4 transition-transform duration-(--t-hover) group-hover:translate-x-0.5 group-hover:-translate-y-0.5";

export function AboutSection() {
  return (
    <section className="section-space">
      <div className="frame grid gap-y-16 lg:grid-cols-12 lg:gap-y-28">
        <dl className="order-2 grid grid-cols-2 gap-6 lg:order-1 lg:col-span-3 lg:grid-cols-1 lg:gap-5">
          {facts.map((fact, index) => (
            <div
              key={fact.label}
              data-reveal
              style={{ "--i": index } as React.CSSProperties}
            >
              <dt className="text-small text-muted-foreground">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="order-1 lg:order-2 lg:col-span-8 lg:col-start-5">
          <h2 data-reveal className="text-head">
            A small team, a senior bar
          </h2>
          <p
            data-reveal
            style={{ "--i": 1 } as React.CSSProperties}
            className="mt-8 text-lead"
          >
            {`${SITE.name} started in ${SITE.foundingYear} with one laptop and a simple belief: clients deserve senior work without agency overhead. Today we're a ${SITE.teamSize}-person team with ${SITE.combinedYears} combined years shipping products together.`}
          </p>
          <Link
            href="/about"
            data-reveal
            style={{ "--i": 2 } as React.CSSProperties}
            className={`${linkClass} mt-8`}
          >
            More about us
            <ArrowUpRight className={arrowClass} />
          </Link>
        </div>

        <h3 className="order-3 font-normal text-muted-foreground lg:col-span-3">
          Our philosophy
        </h3>
        <ul className="order-4 -mt-10 grid gap-10 sm:grid-cols-2 sm:gap-x-16 lg:col-span-8 lg:col-start-5 lg:mt-0">
          {CORE_VALUES.map((value, index) => (
            <li
              key={value.title}
              data-reveal
              style={{ "--i": index } as React.CSSProperties}
            >
              <h4 className="font-medium">{value.title}</h4>
              <p className="mt-2">{value.description}</p>
            </li>
          ))}
        </ul>

        <h3 className="order-5 font-normal text-muted-foreground lg:col-span-3">
          Team size &amp; structure
        </h3>
        <div className="order-6 -mt-10 lg:col-span-8 lg:col-start-5 lg:mt-0">
          <dl
            data-reveal
            className="grid gap-x-16 gap-y-2 sm:grid-cols-2"
          >
            {structure.map((item) => (
              <div key={item.label} className="flex justify-between gap-4">
                <dt>{item.label}</dt>
                <dd className="text-muted-foreground tabular-nums">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
          <p data-reveal className="mt-8 max-w-[60ch]">
            Every project is led by a sas3d lead and staffed with exactly the
            specialists it needs, never a bench of juniors learning on your
            budget.
          </p>
          <Link href="/team" data-reveal className={`${linkClass} mt-8`}>
            Meet the team
            <ArrowUpRight className={arrowClass} />
          </Link>
        </div>
      </div>
    </section>
  );
}
