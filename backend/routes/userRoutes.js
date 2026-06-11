const express = require("express");
const router = express.Router();

router.get("/user", (req,res)=>{

res.json({
name:"Alok Pawar",
email:"alok@gmail.com",
phone:"9876543210",
address:"Pune",
college:"ABC Polytechnic"
});

});

module.exports = router;