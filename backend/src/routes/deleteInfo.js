import Table from "../models/table";
import AfterTable from "../models/afterTable";
import UploadTable from "../models/uploadTable";

exports.DeleteInfo = async (req, res) => {
  const body = req.body;
  const data = body.data;
  const type = body.type;
  //   console.log(body);
  try {
    if (type === "table") {
      await Table.deleteOne(data);
      res.status(200).send({ message: "Deleted from Table", contents: body });
    } else if (type === "afterTable") {
      await AfterTable.deleteOne(data);
      res
        .status(200)
        .send({ message: "Deleted from afterTable", contents: body });
    } else if (type === "uploadTable") {
      await UploadTable.deleteOne(data);
      res
        .status(200)
        .send({ message: "Deleted from uploadTable", contents: body });
    }
  } catch (err) {
    res
      .status(403)
      .send({ message: "Cannot Delete Info: " + err, contents: body });
  }
};
