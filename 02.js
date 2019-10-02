const Axios = require('axios')

function GetPosts(){
    return Axios.get("https://jsonplaceholder.typicode.com/posts")
}

function GetPosts(){
    return Axios.get("https://jsonplaceholder.typicode.com/posts")
}

function GetUsers(){
    return Axios.get("https://jsonplaceholder.typicode.com/users")
}

GetUsers().then((User)=>{
    GetPosts().then((Post)=>{
      //  if(User.data.userId = Post.data.id){
          const Users =  User.data
            for(i in Users){
                for(i in Post){
                    console.log(Users[i].id)
                }
          
            }
      //  }
    })
})