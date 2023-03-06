import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import history from 'connect-history-api-fallback';
import path from 'path';

import auth from './routes/auth.routes';
import pdf from './routes/pdf.routes';

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(auth);
app.use('/pdf', pdf);

// Middlewares for Vue
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.resolve("uploads")));

// Settings
app.set('port', process.env.PORT || 4000);

export default function createServer() {
  app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
  });
}
  