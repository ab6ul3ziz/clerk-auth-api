import e from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Webhook } from "svix";
dotenv.config();
const app = e();
app.use(cors());

// import bodyParser from "body-parser";
// import User from "./userModal.js";

// app.post(
//   "/api/webhooks",
//   // This is a generic method to parse the contents of the payload.
//   // Depending on the framework, packages, and configuration, this may be
//   // different or not required.
//   bodyParser.raw({ type: "application/json" }),
//   async function (req, res) {
//     // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
//     try {
//       const payload = req.body.toString();
//       const headers = req.headers;

//       const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);
//       const evt = wh.verify(payload, headers);

//       const { id, ...attributes } = evt.data;

//       const eventType = evt.type;

//       if (eventType === "user.created") {
//         console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
//         console.log(attributes);
//         const { first_name, image_url, last_name } = attributes;
//         const user = new User({
//           Clerk_Id: id,
//           fristName: first_name,
//           imgUrl: image_url,
//           lastName: last_name,
//         });
//         await user.save();
//       }

//       if (eventType === "user.deleted") {
//         const user = await User.findOneAndDelete({ Clerk_Id: id });
//         await user.save();
//       }
//       if (eventType === "user.updated") {
//         const { first_name, image_url, last_name } = attributes;
//         const user = await User.updateOne(
//           { Clerk_Id: id },
//           { $set: { imgUrl: image_url } }
//         );
//         await user.save();
//       }
//       return res.status(200).json({
//         success: true,
//         message: "Webhook received",
//       });
//     } catch (error) {
//       return res.status(401).json({
//         success: false,
//         message: error.message,
//       });
//     }
//   }
// );

const port = process.env.PORT || 4000;

// mongoose.connect("mongodb://127.0.0.1:27017/").then(() => {
app.listen(port, () => {
  console.log("server start");
});
// });
