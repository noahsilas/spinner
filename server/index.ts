import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import { Animal } from './models';

const port = process.env.PORT || 9000;
const mongodbURI = process.env.MONGODB_URI || 'mongodb://localhost';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Ok');
});


// List animals
// ```
// curl localhost:9000/animals
// ```
app.get('/animals', async (req, res) => {
  const animals = await Animal.find();
  res.send(animals);
});


// Create a animal
// ```
// curl -d '{"name":"Cow"}' \
//    -H "Content-Type: application/json" \
//    localhost:9000/animals
// ```
app.post('/animals', async (req, res) => {
  const { name } = req.body;

  try {
    const animal = await Animal.create({ name });
    res.status(201).send(animal.id);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

mongoose.connect(mongodbURI).then(() => {
  // eslint-disable-next-line no-console
  app.listen(port, () => console.debug(`server is listening on ${port}`));
});
