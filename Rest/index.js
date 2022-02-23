import express from 'express';
import bodyParser from 'body-parser';
import studentsRoutes from "./routes/students.js";

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use('/students', studentsRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.'));

app.listen(PORT, () => console.log('Server running on port: http://localhost:4000'));