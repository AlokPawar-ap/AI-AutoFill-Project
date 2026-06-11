require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
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
