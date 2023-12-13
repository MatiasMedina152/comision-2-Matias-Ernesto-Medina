import {body} from "express-validator";

export const createPostValidations =[

body("title")
    .notEmpty()
    .withMessage("El título es requerido."),
body("desc")
    .notEmpty()
    .withMessage("La descripcion es requerida."),
body("image")
    .notEmpty()
    .isURL()
    .withMessage("Debe ingresar una URL.")    
]