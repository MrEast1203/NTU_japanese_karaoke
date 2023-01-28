import Table from "../models/table";
import AfterTable from "../models/afterTable";
import UploadTable from "../models/uploadTable";

exports.MoveInfo = async (req, res) => {
  const body = req.body;
  const data = body.data;
  const from = body.from;
  const to = body.to;
  const updatedData = body.updatedData;
  try {
    if (from === "table") {
      await Table.deleteOne(data);
    } else if (from === "afterTable") {
      await AfterTable.deleteOne(data);
    } else if (from === "uploadTable") {
      await UploadTable.deleteOne(data);
    }
    if (to === "table") {
      const table = new Table(updatedData);
      await table.save();
      res.status(200).send({ message: "Moved to Table", contents: body });
    } else if (to === "afterTable") {
      const afterTable = new AfterTable(updatedData);
      await afterTable.save();
      res.status(200).send({ message: "Moved to afterTable", contents: body });
    } else if (to === "uploadTable") {
      const uploadTable = new UploadTable(updatedData);
      await uploadTable.save();
      res.status(200).send({ message: "Moved to uploadTable", contents: body });
    }
  } catch (err) {
    res
      .status(403)
      .send({ message: "Cannot Move Info: " + err, contents: body });
  }
};
