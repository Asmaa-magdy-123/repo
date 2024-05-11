import express, { request } from'express';
import{engine } from 'express-handlebars';
import hotelsroute from './routes/hotelroutes.js';
import reservationroute from './routes/reservationroutes.js';
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/clients');
const app =express();
app.engine('handlebars',engine());
app.set('view engine', 'handlebars');
app.set('views','./templetes');

 app.use('/hotels',hotelsroute);
 app.use('/reservation',reservationroute);


 app.get('/model', (request,response)=>{
    response.render("model");
 });
 app.listen(5000);








// const hotelsfunction =(request ,response)=>{
//   response.render("hotels",{ hotels});
// };

// app.get('/hotels',hotelsfunction);

//  app.get('/reservation', (request,response)=>{
//   response.render("reservation");

//  });
 //  app.get("/hotels/:id", (request,response)=>{
//   const id =request.params.id;


//   const hotel =hotels.find((item)=>{
// return item.id ==id ;
//     });
// });



