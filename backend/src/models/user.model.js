 import bcrypt from "bcrypt";
 import {Schema,model} from "mongoose"

 const UserSchema = new Schema({

   name:{
      type: String,
      require: true,
      unique: true,
   },
   email:{
      type: String,
      require: true,
   },
   password:{
      type: String,
      require: true,
   },
   isAdmin: {
      type:Boolean,
      default: true,
   },

 },{
   timestamps: true
 })

 const UserModel = model("User", UserSchema)

 

 const createNewUser = async ({ name, email, password }) => {

   try {
      if(!name || !email || !password ) return null;

      const hashedPassword = await bcrypt.hash(password,10)
   
       const newUser = {
         name,
         email,
         password,/*hashedPassword*/
         isAdmin: name === "ElAdmin"
      };
   
        const user = await UserModel.create(newUser)
   
       
       return user;
   } catch (error) {
      console.log(error)
   }
 };

 const getUserById = async (id) => {
    try {
      const user = await UserModel.findById(id);

    return user;
    } catch (error) {
      console.log(error)
    }
 }

 const getUserByEmail = async ({email}) => {
    try {
      const user = await UserModel.findOne({email})

    return user;
    } catch (error) {
      console.log(error)
    }
 }
 /*
  const updateUser = async (id, datos) =>{
    const user = await UserModel.findByIdAndUpdate(id, datos, {new: true})
    return user;
  } 
  */
 export const userModel = {

    create: createNewUser,
    findOne: getUserById,
    findByEmail: getUserByEmail,
    //update: updateUser,
 }