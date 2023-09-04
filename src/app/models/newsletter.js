import mongoose, { Schema } from "mongoose";

const newsletterSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },
  buyer: { type: Boolean, required: true },
  subscribed: { type: Boolean, required: true },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Newsletter =
  mongoose.models.Newsletter || mongoose.model("Newsletter", newsletterSchema);

export default Newsletter;
