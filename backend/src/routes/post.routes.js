import { Router} from "express"
import { ctrGetlAllPosts, ctrlCreatePost } from "../controllers/post.controllers.js"
import { handlerException } from "../middlewares/handler-exceptions.js"

const postRouter = Router()

postRouter.get('/', ctrGetlAllPosts,handlerException )

postRouter.post('/', ctrlCreatePost )
/*
postRouter.patch('/', ctrlPatch)

postRouter.put('/', ctrlPut)

postRouter.delete('/', ctrlDelete )
*/
export {postRouter}; 