import express from 'express';
import bodyParser from 'body-parser';
import sensorRoutes from './src/routes/sensorroutes.js';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', sensorRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
