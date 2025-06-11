import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "../config/db"
import userRoutes from '../routes/userRoutes'

dotenv.config();
connectDB();
const app:Application = express();

app.use(cors());
app.use(express.json());

app.get('/',(_req,res)=>{
    res.send("Aviance API is running")
})

app.use('/api/users', userRoutes);

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server is up and running in PORT ${PORT}`)
});
