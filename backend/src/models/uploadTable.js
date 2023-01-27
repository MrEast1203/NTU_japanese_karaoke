import mongoose from "mongoose";

const Schema = mongoose.Schema;
const UploadTableSchema = new Schema({
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
const UploadTable = mongoose.model("uploadTable", UploadTableSchema);

export default UploadTable;
