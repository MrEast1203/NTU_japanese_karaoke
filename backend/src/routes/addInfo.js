import Table from "../models/table";
import AfterTable from "../models/afterTable";
import UploadTable from "../models/uploadTable";

exports.AddInfo = async (req, res) => {
  const body = req.body;
  const data = body.data;
  const type = body.type;
  try {
    if (type === "table") {
      const table = new Table(data);
      await table.save();
      res.status(200).send({ message: "Saved in Table", contents: body });
    } else if (type === "afterTable") {
      const afterTable = new AfterTable(data);
      await afterTable.save();
      res.status(200).send({ message: "Saved in afterTable", contents: body });
    } else if (type === "uploadTable") {
      const uploadTable = new UploadTable(data);
      await uploadTable.save();
      res.status(200).send({ message: "Saved in uploadTable", contents: body });
    }
  } catch (err) {
    res
      .status(403)
      .send({ message: "Cannot Add Info: " + err, contents: body });
  }
};
