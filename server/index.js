import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "mongoose";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb",extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended: true}));
app.use(cors());

app.use("/posts", postRoutes);

app.get("/", (req,res) => {
  res.send("Welcome to the Memory Foam");
});

const PORT = process.env.PORT || 5000;

db.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((err) => console.log(err.message));

db.set("useFindAndModify", false);
