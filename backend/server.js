require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: [
      "http://localhost:5173",
      "https://ai-auto-fill-project.vercel.app/"
    ],
    credentials: true
  }));
app.use(express.json());

console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected");
})
.catch(err=>{
    console.log(err);
});

const userRoutes = require("./routes/userRoutes");

app.use("/api", userRoutes);

app.listen(5000,()=>{
    console.log("Server Running");
});
