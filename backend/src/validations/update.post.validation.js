import {body, param} from "express-validator";

export const updatePostValidation =[ 
param("postId")
.isNumeric()
.toInt(),

body("title")
    .optional(),
body("desc")
    .optional(),
body("image")
    .optional(),    
]