/*
_id string ok
wathchHistory ObjectId[] videos
username string
email string
fullName string
avatar string
coverimage string
password string
refreshToken string
createdAt date
updatedAt date
*/
import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import e from "cors";
const userSchema = new Schema({
    username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
    },
    email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    },
    fullName: {
    type: String,
    required: true,
    trim: true,
    index: true,
    },  
    avatar: {
    type: String,   //cloudinary URL
    },
    watchHistory: [{
        type: Schema.Types.ObjectId,
        ref: "Video",
    }],
    password: {
    type: String,
    required: [true,"Password is required"],
    },
    refreshToken: {
    type: String,
    },
},
    {timestamps: true}
)

userSchema.pre("save", function(next) {
    if (!this.Modified("password")) return next();
        this.password = bcrypt.hashSync(this.password, 10);
    
    next();
});

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.method.genertrRefreshToken = function() {
//short lved access token
return jwt.sign(
  {
    _id: this._id

  },
  process.env.REFRESH_TOKEN_SECRET,
  { expiresIn: process.env.REFRESH_TOKEN_EXPIRY},
);
}

userSchema.method.genertrAccessToken = function () {
  //short lved access token
    return jwt.sign(
        {
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
    }


export const User = mongoose.model("User", userSchema);