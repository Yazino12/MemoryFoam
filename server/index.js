<<<<<<< HEAD

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
=======
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "mongoose";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
>>>>>>> parent of eb89913... pushing PART_3

const app = express();

<<<<<<< HEAD
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

const CONNECTION_URL = 'mongodb+srv://js_mastery:M6WfDnJEoj9HkV2d@practice.jto9p.mongodb.net/memories_app?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
=======
app.use(bodyParser.json({limit: "30mb",extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended: true}));
app.use(cors());

app.use("/posts", postRoutes);

app.get("/", (req,res) => {
  res.send("Welcome to the Memory Foam");
});

const PORT = process.env.PORT || 5000;
>>>>>>> parent of eb89913... pushing PART_3

db.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((err) => console.log(err.message));

db.set("useFindAndModify", false);
