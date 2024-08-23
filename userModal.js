import mongoose from "mongoose";

const userShema = new mongoose.Schema({
  Clerk_Id: {
    type: String,
    required: true,
    unique: true,
  },
  fristName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
  },
});

const User = mongoose.model("User", userShema);
export default User;
