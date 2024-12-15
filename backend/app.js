import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import reservationRouter from "./routes/reservationRoute.js"
import { errorMiddleware } from "./error/error.js";
const app = express();
dotenv.config({path:"./config/config.env"});

app.use(
    cors({
        origin: process.env.FRONTEND_URL, // Allow requests from your frontend
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow all required methods
        allowedHeaders: ["Content-Type", "Authorization"], // Allow the headers your frontend sends
        credentials: true, // Allow credentials like cookies if needed
        optionsSuccessStatus: 204, // Ensure OPTIONS request returns 204
    })
);

app.use(cors());
app.options('*', cors()); // Allow all OPTIONS requests for preflight

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/reservation', reservationRouter); // Corrected path

dbConnection();
export default app;