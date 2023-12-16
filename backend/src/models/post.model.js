import {v4 as uuid} from "uuid"

let listOfPosts = [
    {
        id:uuid(),
        title:"TANQUE",
        desc:"MAIN BATTLE TANK LEOPARD2A8",
        image:"https://imgs.search.brave.com/WYlDDfSjiSkxn-XT79a2XIBVWRdILAtNQ5o5fST1Y-w/rs:fit:860:0:0/g:ce/aHR0cDovL2JveDU0/NjMudGVtcC5kb21h/aW5zL35tb21vZ2J0/Yy9taWxpdGFyeWJs/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDcvTGVvcGFy/ZC0yQTdBMS1mb3Rv/LTEtMS0xMDI0eDU3/Ni5qcGc"
    } 
   
]

const createNewPost = ({title,desc,image}) => {

    if(!title) return null

    const newPost = {id:uuid(),title,desc,image}
    
    listOfPosts.push(newPost);

    return newPost; 

}

const GetlAllPosts = () => {

    return [...listOfPosts];
}

const getPostById = ({id}) => {

    const post = listOfPosts.find((post) => post.id === id);

    return post;
}

const findByIdAndUpdate = (id, data) =>{
    const post = getPostById( {id});

    if(!post) return null

    listOfPosts = listOfPosts.map((post) =>{
        if(post.id === id){
         if(data.title) post.title = data.title;
         if(data.desc) post.desc = data.desc;
         if(data.image) post.image = data.image;
         return post;
        }
    
        return post;
    })

    return {
        ...post,
        ...data,
        }
    }
    const deletePostById = ({id}) => {
    listOfPosts = listOfPosts.filter((post) => post.id !== id)
}

export const postModel = {
    findAll: GetlAllPosts,
    create: createNewPost,
    findOne: getPostById,
    update: findByIdAndUpdate,
    destroy: deletePostById,
}

