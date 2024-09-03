
import "dotenv/config"
import express from "express";
import path from "path"

import router from "./router/index.routes.js";

const app = express();

const PORT = process.env.LOCAL_PORT;

app.set("view engine","ejs")
app.set("views",path.join(process.cwd(), "src/view"));
app.use("/css",express.static(path.join(process.cwd(),"public/css")))

app.use(router);

app.listen(9000, () => console.log(`click http://localhost:${PORT}`));
