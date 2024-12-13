const express =require("express");
const mysql=require("mysql");
const path=require('path');
const dotenv=require('dotenv');
const exp = require("constants");

dotenv.config({ path:'./.env'});

const app= express();

const db=mysql.createConnection({

    host: process.env.Database_host,
    user: process.env.Database_user,
    password: process.env.Database_password,
    database:process.env.Database_name
});

const publicdirectory = path.join(__dirname,'./public')
app.use(express.static(publicdirectory));
// parse URL bodies
app.use(express.urlencoded({extended:false}));
// parse Jason bodies (as sent by api clients)
app.use(express.json());

app.set('view engine', 'hbs');


db.connect((error) => {
    if(error){
        console.log(error)
    }else {
        console.log("MyDatabase is connected")
    }

    }
    )




  app.use('/',require('./routes/pages'));
  app.use('/auth',require('./routes/auth'));

 /*

 app.listen(5000, '0.0.0.0', () => {
    console.log("Server is running on port 5000");
});

 */
  

  app.listen(5000 ,'0.0.0.0', ()=>{
    console.log("Serve is running on Port 5000");
  }

  
)