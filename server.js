 
import { createApi } from 'unsplash-js';
import config from "universal-config";
import Unsplash  from 'unsplash-js';
import toJson  from 'unsplash-js'
import express  from 'express'
 
// server
import fetch from 'node-fetch';
global.fetch = fetch;
 


console.log(fetch);

 let unsplash = createApi({  
   applicationId: config.get('APPLICATION_ID'),
   secret: config.get('SECRET'),
   callbackUrl: config.get('CALLBACK_URL')
   
 })
 const app = express()
 app.get('/api/photos', (req, res) => {
   unsplash.photos
     .listPhotos(req.query.start, req.query.count)
     .then(toJson)
     .then(json => res.json(json));
 });

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));