
import {param} from "express-validator";

export const findPostValidation =[param("postId").isNumeric().toInt()];