import mongoose from "mongoose";

const Schema = mongoose.Schema;
const AfterTableSchema = new Schema({
  name: String,
  require: String,
  song: String,
  singer: String,
  detail: String,
  link: String,
  addition: String,
  replyType: Boolean,
  reply: String,
});
const AfterTable = mongoose.model("afterTable", AfterTableSchema);

export default AfterTable;
