import { connectToCachedDB } from "../../lib/db";
import CacheModel from "../../models/cache.model";
import cors from "../../lib/cors";

export default async function handler(req, res) {
  await cors(req, res);

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const db = await connectToCachedDB();
    const Cache = db.model("Cache", CacheModel.schema);
    const entries = await Cache.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
}
