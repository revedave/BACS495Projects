import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,    
});

export default mongoose.model('Student', StudentSchema);
