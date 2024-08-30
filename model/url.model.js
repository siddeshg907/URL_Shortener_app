import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    shortId: { type: String, required: true, unique: true },
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const UrlModel = mongoose.model("Url", urlSchema);

export { UrlModel };
