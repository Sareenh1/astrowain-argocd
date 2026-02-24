const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/astrologers", (req,res)=>{
  res.json([
    {name:"Sharma", speciality:"Vedic Astrology"},
    {name:"Devi", speciality:"Tarot Reading"}
  ]);
});

app.listen(5000, ()=>{
  console.log("Astrowain backend running");
});
