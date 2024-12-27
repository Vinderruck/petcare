import express from 'express';
import { SignUp } from '../../Controller/UserController/UserController.js';


const route=express.Router();


route.use("/SignUp", SignUp )






export default route