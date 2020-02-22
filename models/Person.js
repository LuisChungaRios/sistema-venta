import mongoose, {Schema} from "mongoose";

const personSchema = new Schema({
    type_person: {
        type: String,
        maxLength: 30,
        required: true
    },
    name: {
        type: String,
        maxLength: 50,
        required: true
    },
    last_name: {
        type: String,
        maxLength: 50,
    },
    email: {
        type: String,
        maxLength: 60,
        unique: true
    },
    type_document : {
        type: String,
        maxLength: 30
    },
    number_document: {
        type: String,
        maxLength: 20
    },
    address: {
        type: String,
        maxLength: 70
    },
    mobile_number: {
        type: String,
        maxLength: 15
    },
    active: {
        type: Number,
        default: 1
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Person = mongoose.model('person', personSchema);

export default Person;