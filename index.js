import express  from "express";
import cors from "cors";
import product from "./products.js";

const app = express();
const port = 3000;

const prod = product();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.get('/', (req,res)=>{
    //res.send("Hello World"); 
    res.json(prod);
});

app.listen(port, ()=>console.log("Listening on port " + port));