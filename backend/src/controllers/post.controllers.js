import { postModel } from "../models/post.model.js"
import { validationResult } from "express-validator"

export const verificarValidaciones = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json(errors)
    }

    next();
};
export const ctrGetlAllPosts = (req, res,) => {
    
    const listOfPosts = postModel.findAll()
    
    res.json(listOfPosts);
}

export const ctrlCreatePost = (req,res) => {
    
    const{ title, desc,image} = req.body

     postModel.create({title , desc , image});

   res.sendStatus(201)
}

export const ctrlGetPostById = (req,res) => {
    
    const {postId} = req.params;
    
    const post = postModel.findOne({id:postId});

    if(!post) {
        return res.sendStatus(404);
    }

    res.json(post);
}

export const ctrlUpdatePost = (req, res) =>{

    const{postId} = req.params

    const {title,desc,image} = req.body

    const updatedPost = postModel.update(postId, {title, desc, image}); 

    if(!updatedPost) return res.sendStatus(404);

    res.sendStatus(200);
}

export const ctrlDeletePost = (req, res) => {

    const {postId} = req.params;

    postModel.destroy({id:postId})

    res.sendStatus(200);
} 