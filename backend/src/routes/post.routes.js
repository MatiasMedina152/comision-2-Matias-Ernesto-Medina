import { Router} from "express"
import { ctrGetlAllPosts, ctrlCreatePost, ctrlGetPostById, verificarValidaciones,ctrlUpdatePost,ctrlDeletePost } from "../controllers/post.controllers.js"
import {createPostValidations} from "../validations/create.post.validations.js"
import { findPostValidation } from "../validations/find.post.validation.js"
import { updatePostValidation } from "../validations/update.post.validation.js"
 


const postRouter = Router()

postRouter.get('/', ctrGetlAllPosts )

postRouter.get('/:postId',findPostValidation,verificarValidaciones,ctrlGetPostById)

postRouter.post('/',createPostValidations, verificarValidaciones, ctrlCreatePost )

postRouter.patch("/:postId",updatePostValidation,verificarValidaciones,ctrlUpdatePost) 

postRouter.delete("/:postId",findPostValidation,verificarValidaciones,ctrlDeletePost)
 
export {postRouter}; 