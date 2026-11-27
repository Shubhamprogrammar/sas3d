import { MongoClient, type Collection } from "mongodb";

export interface ContactDoc {
  name: string;
  email: string;
  message: string;
  status: "new" | "replied" | "closed";
  emailSent: boolean;
  createdAt: Date;
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
  await Promise.all([
    contacts.createIndex({ createdAt: -1 }),
    contacts.createIndex({ email: 1, createdAt: -1 }),
  ]);
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
