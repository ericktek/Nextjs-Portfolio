import mongoose from "mongoose";

const {Schema} = mongoose

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    shortTitle: {
        type: String,
        min: 10,
        max: 30
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
}, { timestamps: true });


export default mongoose.models.Post || mongoose.model("Post", postSchema);
