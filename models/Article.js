import mongoose, {Schema} from "mongoose";

const articleSchema = new Schema({
    category: {
        type: Schema.ObjectId,
        ref: 'category'
    },
    code: {
        type: String,
        maxLength: 64
    },
    name: {
        type: String,
        maxLength: 50,
        unique: true,
        required: true
    },
    description: {
        type: String,
        maxLength: 255
    },
    price_sale: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
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

const Article = mongoose.model('article', articleSchema);

export default Article;