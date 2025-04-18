/*
id string pk
content string
createdAt date
updatedAt date
video ObjectId videos
owener objectedId users
*/


import mongoose, { Schema } from "mongoose";


import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    video: {
        type: Schema.Types.ObjectId,
        ref: "Video",
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });


// commentSchema.plugin(mongooseAggregatePaginate);
commentSchema.plugin(mongooseAggregatePaginate);


// Export the model
export const comment = mongoose.model("comment", commentSchema);