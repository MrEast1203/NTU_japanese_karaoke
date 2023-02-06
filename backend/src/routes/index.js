import getInfoRoute from "./getInfo";
import addInfoRoute from "./addInfo";
import deleteInfoRoute from "./deleteInfo";
import moveInfoRoute from "./moveInfo";

//https://gist.github.com/Hiswe/fe83c97d1c7c8eee9557939d1b9bc086
const wrap =
  (fn) =>
  (...args) =>
    fn(...args).catch(args[2]);

function main(app) {
  app.get("/api/getTable", wrap(getInfoRoute.GetTable));
  app.get("/api/getAfterTable", wrap(getInfoRoute.GetAfterTable));
  app.get("/api/getUploadTable", wrap(getInfoRoute.GetUploadTable));
  app.post("/api/addInfo", wrap(addInfoRoute.AddInfo));
  //傳入{type: '', data: {}}
  app.delete("/api/deleteInfo", wrap(deleteInfoRoute.DeleteInfo));
  //傳入{type: '', data: {}}
  app.post("/api/moveInfo", wrap(moveInfoRoute.MoveInfo));
  app.get("/api/getPwd", async (req, res) => {
    res.json({ password: process.env.USER_PASSWORD });
  });
  //傳入{from: '', to: '', data: {}, updatedData:{}}
}

export default main;
