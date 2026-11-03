import { SectionHeading } from "@/components/sections/section-heading";
import { services } from "@/data/services";

export function ServicesSection({
  title = "Services built for shipping",
  description = "One team, every craft you need to take a product from idea to launch, and make it grow after.",
  action = { label: "All services", href: "/services" },
}: {
  title?: string;
  description?: string;
  action?: { label: string; href: string } | null;
}) {
  return (
    <section className="section-space bg-muted">
      <div className="frame">
        <SectionHeading
          title={title}
          description={description}
          action={action ?? undefined}
        />
        <ul className="mt-16 flex flex-col gap-14 md:mt-24 md:gap-20">
          {services.map((service) => (
            <li
              key={service.id}
              data-reveal
              className="grid gap-5 lg:grid-cols-12"
            >
              <h3 className="text-head font-light lg:col-span-6">
                {service.title}
              </h3>
              <div className="lg:col-span-5 lg:col-start-8">
                <p>{service.description}</p>
                <ul className="mt-4 text-muted-foreground">
                  {service.deliverables.map((item) => (
                    <li key={item} className="mt-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
