import express from 'express';
import shortid from 'shortid';
import { UrlModel } from '../model/url.model.js'; 
import { auth } from "../middleware/auth.middleware.js";

const urlRouter = express.Router();

async function handleGenerateShortId(req, res) {
    try {
        const body = req.body;
    if (!body.url) return res.status(400).json({ error: "url not present" });
    
    const shortID = shortid.generate();
    const newUrl = new UrlModel({ shortId: shortID, originalUrl: body.url ,shortUrl:`http://localhost:8080/url/${shortID}`});
    await newUrl.save(); 
    
    return res.json({originalUrl:body.url, Shorturl:`http://localhost:8080/url/${shortID}` });
    } catch (error) {
        return res.json({msg:error})
    }
    
}


urlRouter.post('/',auth, handleGenerateShortId);


urlRouter.get('/:shortId', async (req, res) => {
    try {
        const shortId = req.params.shortId;
    const entry = await UrlModel.findOne({ shortId }); 
    
    if (!entry) return res.status(404).json({ error: "Short URL not found" });
    
    res.redirect(entry.originalUrl);
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
});

export { urlRouter };
