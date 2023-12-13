import  express  from "express"
import cors from "cors"
import helmet from "helmet"
import { postRouter } from "./routes/post.routes.js";

import { env } from "./settings/config.js";

const app = express()

// middleware 
// Para que ande el body
app.use(express.json());

app.use(cors())
app.use(helmet())



// validacion personalizada 
//app.use(validarPost);

app.use("/posts",postRouter)
 

app.listen(env.PORT,() =>{
    console.log(`server on port ${env.PORT}`)
});

