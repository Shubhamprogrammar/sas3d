import Link from "next/link";
import type { Filter, WithId } from "mongodb";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { requireAdmin } from "@/lib/admin-auth";
import {
  CONTACT_STATUSES,
  getContactsCollection,
  type ContactDoc,
  type ContactStatus,
} from "@/lib/mongodb";
import { cn } from "@/lib/utils";
import { SignOutButton, StatusBadge, formatDate } from "./admin-ui";

const PAGE_SIZE = 25;

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function listHref(params: { status?: string; q?: string; page?: number }) {
  const search = new URLSearchParams();
  if (params.status) search.set("status", params.status);
  if (params.q) search.set("q", params.q);
  if (params.page && params.page > 1) search.set("page", String(params.page));
  const query = search.toString();
  return query ? `/admin-dashboard?${query}` : "/admin-dashboard";
}

export default async function AdminDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; q?: string; page?: string }>;
}) {
  await requireAdmin();

  const params = await searchParams;
  const status = CONTACT_STATUSES.includes(params.status as ContactStatus)
    ? (params.status as ContactStatus)
    : undefined;
  const q = params.q?.trim().slice(0, 100) ?? "";
  const page = Math.max(1, Math.floor(Number(params.page)) || 1);

  const filter: Filter<ContactDoc> = {};
  if (status) filter.status = status;
  if (q) {
    const pattern = { $regex: escapeRegex(q), $options: "i" };
    filter.$or = [{ name: pattern }, { email: pattern }, { company: pattern }, { phone: pattern }];
  }

  let data:
    | { items: WithId<ContactDoc>[]; total: number; counts: Partial<Record<ContactStatus, number>> }
    | undefined;
  try {
    const contacts = await getContactsCollection();
    const [items, total, grouped] = await Promise.all([
      contacts
        .find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * PAGE_SIZE)
        .limit(PAGE_SIZE)
        .toArray(),
      contacts.countDocuments(filter),
      contacts
        .aggregate<{ _id: ContactStatus; count: number }>([
          { $group: { _id: "$status", count: { $sum: 1 } } },
        ])
        .toArray(),
    ]);
    const counts = Object.fromEntries(grouped.map((g) => [g._id, g.count]));
    data = { items, total, counts };
  } catch (error) {
    console.error("[admin] Failed to load inquiries:", error);
  }

  const tabs = [
    { label: "All", value: undefined },
    ...CONTACT_STATUSES.map((value) => ({ label: value, value })),
  ];
  const allCount = data ? Object.values(data.counts).reduce((a, b) => a + b, 0) : 0;
  const totalPages = data ? Math.max(1, Math.ceil(data.total / PAGE_SIZE)) : 1;

  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Inquiries</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Messages sent through the contact form, newest first.
            </p>
          </div>
          <SignOutButton />
        </div>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Filter by status" className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const count = tab.value ? (data?.counts[tab.value] ?? 0) : allCount;
              const active = tab.value === status;
              return (
                <Link
                  key={tab.label}
                  href={listHref({ status: tab.value, q })}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "inline-flex h-9 items-center gap-2 rounded-full border px-4 text-sm capitalize transition-colors",
                    active
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-background text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab.label}
                  <span className="font-mono text-xs opacity-70">{count}</span>
                </Link>
              );
            })}
          </nav>

          <form action="/admin-dashboard" className="flex w-full gap-2 md:w-80">
            {status && <input type="hidden" name="status" value={status} />}
            <Input
              name="q"
              type="search"
              defaultValue={q}
              placeholder="Search name, email, company, phone"
              aria-label="Search inquiries"
              className="h-9 bg-background"
            />
            <Button type="submit" variant="outline" size="icon" aria-label="Search">
              <Search />
            </Button>
          </form>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-background">
          {!data ? (
            <p className="px-6 py-12 text-center text-sm text-destructive">
              Couldn&apos;t connect to the database. Check <code>MONGODB_URI</code> and the server
              logs.
            </p>
          ) : data.items.length === 0 ? (
            <p className="px-6 py-12 text-center text-sm text-muted-foreground">
              {q || status ? "No inquiries match this filter." : "No inquiries yet."}
            </p>
          ) : (
            <ul className="divide-y divide-border">
              <li className="hidden grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)_minmax(0,1.2fr)_minmax(0,1fr)_6rem] gap-4 bg-muted/40 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground md:grid">
                <span>From</span>
                <span>Service</span>
                <span>Budget</span>
                <span>Received</span>
                <span>Status</span>
              </li>
              {data.items.map((item) => (
                <li key={item._id.toString()}>
                  <Link
                    href={`/admin-dashboard/inquiries/${item._id.toString()}`}
                    className="grid gap-2 px-6 py-4 transition-colors hover:bg-muted/40 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)_minmax(0,1.2fr)_minmax(0,1fr)_6rem] md:items-center md:gap-4"
                  >
                    <span className="min-w-0">
                      <span className="flex items-center justify-between gap-3">
                        <span
                          className={cn(
                            "truncate text-sm",
                            item.status === "new" ? "font-semibold" : "font-medium"
                          )}
                        >
                          {item.name}
                          {item.company && (
                            <span className="font-normal text-muted-foreground">
                              {" "}
                              · {item.company}
                            </span>
                          )}
                        </span>
                        <span className="md:hidden">
                          <StatusBadge status={item.status} />
                        </span>
                      </span>
                      <span className="block truncate text-sm text-muted-foreground">
                        {item.email}
                      </span>
                      <span className="block truncate text-sm text-muted-foreground">
                        {item.phone}
                      </span>
                    </span>
                    <span className="truncate text-sm">{item.service}</span>
                    <span
                      className={cn(
                        "truncate text-sm text-muted-foreground",
                        !item.budget && "hidden md:block"
                      )}
                    >
                      {item.budget || "—"}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(item.createdAt)}
                    </span>
                    <span className="hidden md:block">
                      <StatusBadge status={item.status} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {data && totalPages > 1 && (
          <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
            <span>
              Page {page} of {totalPages} · {data.total} inquiries
            </span>
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm" aria-disabled={page <= 1}>
                <Link
                  href={listHref({ status, q, page: page - 1 })}
                  className={cn(page <= 1 && "pointer-events-none opacity-50")}
                >
                  <ChevronLeft />
                  Previous
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" aria-disabled={page >= totalPages}>
                <Link
                  href={listHref({ status, q, page: page + 1 })}
                  className={cn(page >= totalPages && "pointer-events-none opacity-50")}
                >
                  Next
                  <ChevronRight />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
