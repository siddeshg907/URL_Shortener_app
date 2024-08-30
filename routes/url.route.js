import express from "express";
import shortid from "shortid";
import { UrlModel } from "../model/url.model.js";
import { auth } from "../middleware/auth.middleware.js";

const urlRouter = express.Router();

async function handleGenerateShortId(req, res) {
  try {
    const { url, userID } = req.body;
    if (!url) return res.status(400).json({ error: "url not present" });

    const shortID = shortid.generate();
    const newUrl = new UrlModel({
      userID,
      shortId: shortID,
      originalUrl: url,
      shortUrl: `http://localhost:8080/url/${shortID}`,
    });
    await newUrl.save();

    return res.json({
      originalUrl: url,
      Shorturl: `http://localhost:8080/url/${shortID}`,
    });
  } catch (error) {
    return res.json({ msg: error.message });
  }
}

urlRouter.post("/", auth, handleGenerateShortId);

urlRouter.get("/:shortId", async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const entry = await UrlModel.findOne({ shortId });

    if (!entry) return res.status(404).json({ error: "Short URL not found" });

    res.redirect(entry.originalUrl);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

export { urlRouter };
