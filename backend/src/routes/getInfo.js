import Table from "../models/table";
import AfterTable from "../models/afterTable";
import UploadTable from "../models/uploadTable";

exports.GetTable = async (req, res) => {
  Table.find().exec((err, data) => {
    if (!err)
      res
        .status(200)
        .send({ message: "Get Table Information!", contents: data });
    else
      res
        .status(403)
        .send({ message: "Error! Cannot get table Info", contents: [] });
  });
};
exports.GetAfterTable = async (req, res) => {
  AfterTable.find().exec((err, data) => {
    if (!err)
      res
        .status(200)
        .send({ message: "Get AfterTable Information!", contents: data });
    else
      res
        .status(403)
        .send({ message: "Error! Cannot get Aftertable Info", contents: [] });
  });
};
exports.GetUploadTable = async (req, res) => {
  UploadTable.find().exec((err, data) => {
    if (!err)
      res
        .status(200)
        .send({ message: "Get UploadTable Information!", contents: data });
    else
      res
        .status(403)
        .send({ message: "Error! Cannot get Uploadtable Info", contents: [] });
  });
};
