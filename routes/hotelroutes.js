import { Router } from "express";
import hotels from '../database/hotelsArr.js';
import hotelmodel from "../database/hotelModel.js";
import { Faker, faker } from "@faker-js/faker";
const route = new Router();
route.get("/",async(req,res)=>{
   const hotels = await hotelmodel.find().lean();
  res.render("hotels",{ hotels});
});

route.get("/create",(req,res)=>{
  const hotelarray=[];
  for (let i = 0; i < 100; i++) {
    hotelarray.push({
      // ame: faker.company.companyName, 
      // description: faker.lorem.paragraph(),
      // image: faker.image.url()
    })    
  }
  
  hotelmodel.create(hotels);
res.send('done');
});
route.get("/delete",(req,res)=>{});
route.get("/update",(req,res)=>{});
route.get("/:id",(req,res)=>{});
export default route;