import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import studentsRoutes from "./routes/students.js";
import mongoose from 'mongoose';
import 'dotenv/config';


app.use(bodyParser.json());
app.use('/students', studentsRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Homepage.');
});

const connectDB = 'mongodb+srv://reve4760:Incorrect9879%40@projectdatabase.ivkbf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(connectDB) 
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
