const express=require("express");
const app=express();
const path=require("path");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));


// const mongoUrl="mongodb://127.0.0.1:27017/wanderlust";

// main().then((result)=>{
//     console.log("connected to the database successfully!");

// }).catch((err)=>{
//     console.log(err);
// });


// async function main(){
//     await mongoose.connect(dbUrl);
// }



let port="1010";
app.listen(port,(req,res)=>{
    console.log(`app is listening on ${port}`);
});

app.get("/",(req,res)=>{
    res.render("login.ejs");
});

app.get("/counsellor",(req,res)=>{
    res.render("counsData");

});
app.get("/counsellor/show",(req,res)=>{
    res.render("details.ejs");

});