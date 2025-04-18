/*
_id string pk
    subscriber ObjectId users
    channel Objectid users
    createdAt date
    updatedAt date
*/

import mongoose, { Schema } from "mongoose";
const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    channel: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });
// Export the model

export const subscription = mongoose.model("Subscription", subscriptionSchema);