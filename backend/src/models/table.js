import mongoose from "mongoose";

const Schema = mongoose.Schema;
const TableSchema = new Schema({
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
const Table = mongoose.model("table", TableSchema);

export default Table;
