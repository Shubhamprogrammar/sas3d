import { LogOut } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ContactStatus } from "@/lib/mongodb";
import { logout } from "./actions";

const STATUS_VARIANT = {
  new: "default",
  replied: "secondary",
  closed: "outline",
} as const;

export function StatusBadge({ status }: { status: ContactStatus }) {
  return (
    <Badge variant={STATUS_VARIANT[status]} className="rounded-full capitalize">
      {status}
    </Badge>
  );
}

const dateFormat = new Intl.DateTimeFormat("en-IN", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Kolkata",
});

export function formatDate(date: Date) {
  return dateFormat.format(date);
}

export function SignOutButton() {
  return (
    <form action={logout}>
      <Button type="submit" variant="outline" size="sm" className="rounded-full">
        <LogOut />
        Sign out
      </Button>
    </form>
  );
}
