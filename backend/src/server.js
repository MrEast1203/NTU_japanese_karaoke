import express from "express";
import cors from "cors";
import db from "./db";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
routes(app);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}!`));
db.connect();
