import mongoose, {Schema} from "mongoose";

const categorySchema = new Schema({
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
   active: {
       type: Number,
       default: 1
   },
   created_at: {
       type: Date,
       default: Date.now
   }
});

const Category = mongoose.model('category', categorySchema);

export default Category;