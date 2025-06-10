import { connectToBlacklistDB } from "../../lib/db";
import BlacklistModel from "../../models/blacklist.model";
import cors from "../../lib/cors";

export default async function handler(req, res) {
  // Apply CORS first
  await cors(req, res);

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const db = await connectToBlacklistDB();
    const Blacklist = db.model("Blacklist", BlacklistModel.schema);

    const entry = await Blacklist.create(req.body);
    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
}
