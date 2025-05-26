import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/', apiRoutes);

app.listen(PORT, () => {
    console.log(`Mock API server running at http://localhost:${PORT}`);
});
