import mongoose from "mongoose";

const {Schema} = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
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

}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", userSchema);
