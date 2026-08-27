import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true },
  image: { type: String, required: true },
  age: { type: Number },
  address: { type: String },
  contact : {type :Number },
});

const User = mongoose.model("newUser", userSchema);
export default User;
