import mongoose from "mongoose";
import { stringify } from "uuid";

const PostSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Posts', PostSchema);
