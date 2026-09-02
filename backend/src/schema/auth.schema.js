import mongoose, { Schema } from "mongoose";

const authSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const Auth = mongoose.model("userVerification", authSchema);
export default Auth;
