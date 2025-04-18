/*
id string pk
comment ObjectId comments
likedBy ObjectId users
createdAt date
updatedAt date
video ObjectId videos
tweet objectedId tweets
*/
import mongoose, { Schema } from "mongoose";
const likeSchema = new Schema({
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment",
        required: true,
    },
    likedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    video: {
        type: Schema.Types.ObjectId,
        ref: "Video",
        required: true,
    },
    tweet: {
        type: Schema.Types.ObjectId,
        ref: "Tweet",
        required: true,
    },
}, { timestamps: true });

export const like = mongoose.model("like", likeSchema);