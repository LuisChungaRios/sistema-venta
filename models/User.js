import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    rol: {
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
        required: true
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
    password: {
        type: String,
        maxLength: 64,
        required: true
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

const User = mongoose.model('user', userSchema);

export default User;