import * as express from 'express';
import v1 from './v1/app';
import * as helpers from './swagger-helper';

const PORT = 4100;

let app = express();
app.use(express.json());

app.use('/v1', v1);

app.listen(PORT, () => {
  console.log("Server started at:", PORT);
});
