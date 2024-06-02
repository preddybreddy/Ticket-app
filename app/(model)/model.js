import mongoose, { Schema } from "mongoose";

mongoose
  .connect(process.env.connectionString)
  .then(() => console.log("Connection to db successfull!"))
  .catch((e) => console.log("Error in connecting to db", e));

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
