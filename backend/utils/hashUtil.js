import crypto from "crypto";

export const generateHash = (input) => {
  return crypto.createHash("sha256").update(input).digest("hex");
};