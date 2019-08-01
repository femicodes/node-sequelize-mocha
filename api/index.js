import express from 'express';
import bodyParser from 'body-parser';
import debug from 'debug';
import morgan from 'morgan';
import bookRoutes from './routes/BookRoutes';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1/books', bookRoutes);

const port = process.env.PORT || 6000;
const debugged = debug('express');

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.',
}));

app.listen(port, () => {
  debugged(`Server running on port ${port}`);
});

export default app;
