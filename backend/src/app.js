import  express  from "express"
import cors from "cors"
import helmet from "helmet"

import { postRouter } from "./routes/post.routes.js";
import { validarPost } from "./middlewares/validar-create-post.js";

const app = express()

// middleware 
// Para que ande el body
app.use(express.json());
app.use(express.static("public"))
app.use(cors())
app.use(helmet())

// Para que anden los formularios de html
app.use(express.urlencoded({extended: false}))

// validacion personalizada 
app.use(validarPost);

app.use("/post",postRouter)
 
// SOLO PARA COMPROBAR QUE ANDA

app.get('/',(req,res) =>{
    res.sendFile('index.html')
})


app.listen(4000)

console.log("Server listening on port 4000")