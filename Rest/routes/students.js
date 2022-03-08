import express from 'express';
import Student from "../models/Student.js";
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        res.status(404).json({ message : err.message });
    }
});

router.post('/', async (req, res) => {
    const student = new Student({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        age : req.body.age
    });
    try {
        const savedStudent = await student.save();
        res.json(savedStudent);
    } catch (err) {
        res.json({ message : err});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.json(student);
    } catch (err) {
        res.json({ message : err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedStudent = await Student.remove({ _id : req.params.id });
        res.json(deletedStudent);
    } catch (err) {
        res.json({ message : err });
    }
});

router.patch('/:id', async (req,res) => {
    try {
        const updatedStudent = await Student.updateOne(
            {_id : req.params.id }, 
            { $set : {firstName : req.body.firstName }}
            );
        res.json(updatedStudent);
    } catch (err) {
        res.json({ message : err });
    }
});

export default router;