export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="dark bg-background text-foreground">
      <div className="frame grid gap-6 pt-16 pb-20 md:pt-24 md:pb-28 lg:grid-cols-12 lg:items-end">
        <h1 data-load style={{ "--d": "60ms" } as React.CSSProperties} className="text-head md:text-display lg:col-span-7">
          {title}
        </h1>
        {description && (
          <p
            data-load
            style={{ "--d": "180ms" } as React.CSSProperties}
            className="max-w-[60ch] lg:col-span-4 lg:col-start-9"
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
