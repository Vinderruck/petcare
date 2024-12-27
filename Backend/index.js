import express from 'express';
import cors from 'cors';
import UserRouter from "./Route/UserRouter/User.js";
import AdminRouter from "./Route/Admin/AdminRouter.js"




const App = express();

App.use(express())
App.use(cors())

const port = 5000;


//Routes
App.use("/User",UserRouter)
App.use("/Admin",AdminRouter)








App.listen( port,()=>{console.log(`ServerRunning from port ${port}`)})