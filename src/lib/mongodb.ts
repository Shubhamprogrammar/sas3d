import { MongoClient, type Collection } from "mongodb";

import type { ContactData } from "@/lib/validations";

export const CONTACT_STATUSES = ["new", "replied", "closed"] as const;
export type ContactStatus = (typeof CONTACT_STATUSES)[number];

export interface ContactDoc extends ContactData {
  status: ContactStatus;
  emailSent: boolean;
  createdAt: Date;
  updatedAt?: Date;
  ip: string;
  userAgent: string | null;
}

// Reuse one client across requests (and across hot reloads in dev).
const globalForMongo = globalThis as unknown as {
  contacts?: Promise<Collection<ContactDoc>>;
};

async function connectContacts() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set");

  const client = await new MongoClient(uri).connect();
  const contacts = client
    .db(process.env.MONGODB_DB ?? "sas3d")
    .collection<ContactDoc>("contacts");
  await contacts.createIndex({ createdAt: -1 });
  return contacts;
}

export function getContactsCollection() {
  globalForMongo.contacts ??= connectContacts().catch((error) => {
    // Let the next request retry instead of caching a failed connection.
    globalForMongo.contacts = undefined;
    throw error;
  });
  return globalForMongo.contacts;
}
