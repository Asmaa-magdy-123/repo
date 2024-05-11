import { Schema ,model} from "mongoose";
const clientschema =new Schema({
name:{
  type :String ,
  required :true,
},

mail:{
  type:String ,
  required :true,
},
});

const clientmodel = model('clientsdata',clientschema );
export default  clientmodel;