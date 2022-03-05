import express from 'express';
import bodyParser from 'body-parser';
import studentsRoutes from "./routes/students.js";
import mongoose from 'mongoose';

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use('/students', studentsRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.'));

mongoose.connect('mongodb+srv://reve4760:Incorrect9879@@projectdatabase.ivkbf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true}, () => {
    console.log("DB connected");
})


app.listen(PORT, () => console.log('Server running on port: http://localhost:4000'));