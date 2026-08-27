import mongoose, { Schema } from "mongoose";

const verifySchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const Verify = mongoose.model("userVerification", verifySchema);
export default Verify;
