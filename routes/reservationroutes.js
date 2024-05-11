import { Router } from "express";
import clientmodel from "../database/clientModel.js";
const route = new Router();
route.get("/",(req,res)=>{
  res.render("reservation");
});

route.get("/create",(req,res)=>{

  clientmodel.create({
    name : "shaimaa" , 
    mail:"shymaa213@gmail.com",
  });
res.send('done');
});
route.get("/delete",(req,res)=>{});
route.get("/update",(req,res)=>{});
route.get("/:id",(req,res)=>{});
export default route;