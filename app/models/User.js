import mongoose from "mongoose";

const {Schema} = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", userSchema);
