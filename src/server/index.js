import express from 'express';
import bodyParser from 'body-parser';
import router from './controllers';

const app = express();

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api', router);
  
  app.listen(9000);
