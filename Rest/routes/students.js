import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let students = []

router.get('/', (req, res) => {
    res.send(students);
});

router.post('/', (req, res) => {
    const student = req.body;

    students.push({ ...student, id : uuidv4() });

    res.send('Student '+ student.firstName + ' added to database!');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const studentFound = students.find((student) => student.id == id);

    res.send(studentFound);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    students = students.filter((student) => student.id != id);

    res.send('Student ' + id + ' has been deleted!');
});

router.patch('/:id', (req,res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const studentUpdate = students.find((student) => student.id == id);

    if(firstName) studentUpdate.firstName = firstName;
    if(lastName) studentUpdate.lastName = lastName;
    if(age) studentUpdate.age = age;

    res.send('Student ' + id + ' has been updated!')

});

export default router;