import express from 'express';

const app = express();
const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
  res.send('Ok');
});

// eslint-disable-next-line no-console
app.listen(port, () => console.debug(`server is listening on ${port}`));
