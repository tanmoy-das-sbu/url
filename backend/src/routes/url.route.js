
import validUrl from "valid-url";
import shortid from "shortid";
import Url from "../models/url.model.js";
import express from "express"

const router = express.Router()



router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;


  if (!validUrl.isUri(longUrl)) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  try {
    let url = await Url.findOne({ longUrl });


    if (url) {
      res.json(url);
    } else {
 
      const shortCode = shortid.generate();


      const shortUrl = `${process.env.BASE_URL}/${shortCode}`;

  
      url = new Url({
        longUrl,
        shortUrl,
        shortCode,
        date: new Date()
      });

      await url.save();

      res.json(url);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


router.get('/:shortCode', async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.shortCode });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json({ error: 'URL not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;