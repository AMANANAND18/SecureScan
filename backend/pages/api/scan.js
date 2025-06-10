import CacheSchema from "../../models/cache.model";
import { connectToCachedDB } from "../../lib/db";
import cors from "../../lib/cors";

export default async function handler(req, res) {
  await cors(req, res);

  try {
    const db = await connectToCachedDB();
    const Cache = db.model("Cache", CacheSchema); // model per connection

    if (req.method === "POST") {
      const { url } = req.body;
      if (!url) return res.status(400).json({ message: "URL is required" });

      const result = "safe"; // placeholder for ML logic
      const cacheEntry = await Cache.create({ url, result });
      return res.status(200).json(cacheEntry);
    }

    if (req.method === "GET") {
      const results = await Cache.find({});
      return res.status(200).json(results);
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (err) {
    return res.status(500).json({ error: "Server error", details: err.message });
  }
}
