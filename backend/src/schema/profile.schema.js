import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "userVerification",
    required: true,
  },
  username: { type: String, required: true },
  image: { type: String },
  age: { type: Number },
  address: { type: String },
  contact : {type :Number },
});

const Profile = mongoose.model("newUser", profileSchema);
export default Profile;
