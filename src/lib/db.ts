import { Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) {
  throw new Error("❌ MONGODB_URI is missing in .env.local");
}

if (!dbName) {
  throw new Error("❌ MONGODB_DB is missing in .env.local");
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const client = new MongoClient(uri);

const clientPromise =
  global._mongoClientPromise ?? client.connect();

if (process.env.NODE_ENV !== "production") {
  global._mongoClientPromise = clientPromise;
}

/**
 * Returns the connected MongoClient instance.
 */
export async function getClient(): Promise<MongoClient> {
  return await clientPromise;
}

/**
 * Returns the application database instance.
 */
export async function getDb(): Promise<Db> {
  const client = await getClient();
  return client.db(dbName);
}

export { client };
export default clientPromise;