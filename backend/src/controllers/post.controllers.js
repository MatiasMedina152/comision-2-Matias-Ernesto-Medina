import { posts } from "../models/post.model.js"

export const ctrGetlAllPosts = (req, res, next) => {
    
   try {

    if(posts.length < 1){

        return res.status(204).json(posts)
    }


    res.status(200).json(posts)
   } catch (error) {
    next("No hay posts")
   }
}

export const ctrlCreatePost =(req,res) => {

    const{ title, desc, image} = req.body

   const newPost = {title,desc,image}
   posts.push(newPost)

   res.sendStatus(201)
}

export const ctrlPatch =  (req,res) => {
    res.statusCode(201).send("PATCH")
}

export const ctrlPut = (req,res) => {
    res.send("PUT")
}

export const ctrlDelete = (req,res) => {
    res.send("DELETE")
}