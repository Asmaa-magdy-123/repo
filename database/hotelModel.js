import { Schema ,model} from "mongoose";
const hotelschema =new Schema({

id:{
 type :Number,
 
},
   name:{
   type :String ,
   required :true,
 },

 description:{
  type:String ,
  required :true,
},

image:{
  type:  String,
  required :true
},
detailPageLink:{
   type:String,
   required:true,
}
},
{
  timestamps:true
}
);

const hotelmodel = model('hotelsdata',hotelschema );
export default  hotelmodel;