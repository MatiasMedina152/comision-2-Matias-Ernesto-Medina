import  express  from "express";
import cors from "cors";
import helmet from "helmet";



import { env } from "./settings/config.js";
import { authorizationMiddleware } from "./middlewares/authorization.middleware.js";
import {authenticationMiddleware} from "./middlewares/authentication.middleware.js"
import { postRouter } from "./routes/post.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { startConnection } from "./settings/dataBase.js";



const app = express()

// middleware 
// Para que ande el body
app.use(express.json());

app.use(cors());
app.use(helmet());


app.use("/posts",authenticationMiddleware,authorizationMiddleware,postRouter);

app.use("/users",userRouter) 


app.listen(env.PORT, async() =>{
   await startConnection() 
    console.log(`server on port ${env.PORT}`)
});

