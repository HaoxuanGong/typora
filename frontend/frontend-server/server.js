import cors from 'cors';
import express from 'express';
import apiRouter from './routes/api.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;


app.use(express.static(path.join(__dirname, '../frontend-react/build')));

app.use(cors());
app.use(express.json());
app.use("/", apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend-react/build', 'index.html'));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
