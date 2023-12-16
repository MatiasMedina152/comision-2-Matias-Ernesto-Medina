import { userModel } from "../models/user.model.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { env } from "../settings/config.js";

export const ctrlRegister = async (req, res) => {
   const newUser = await userModel.create(req.body)

   if(!newUser) return res.sendStatus(400);

    const token = jwt.sign({id: newUser.id},"secret")

   res.status(201).json({token}); 
};

export const ctrlCreateUser = async (req, res) =>{
    const {name, email, password} = req.body;

    const user = await userModel.create({name,email,password})

    if (!user) return res.sendStatus(404);

    const token = jwt.sign({userId: user.id}, env.JWT_SECRET)

    res.status(201).json({token,user});
}



export const ctrlLogin = async (req,res) => {
    const {email, password} = req.body; 

    const user = userModel.findByEmail(email);

    if(!user) return res.sendStatus(404);
 /*
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) return res.sendStatus(404);
*/
    const token = jwt.sign({id: user.id}, env.JWT_SECRET);

    res.status(201).json({token});
};