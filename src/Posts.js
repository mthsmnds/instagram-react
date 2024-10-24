import React from "react"
import Post from "./Post";


export default function Posts (){

  let posts = [
    {userImg: 'assets/img/meowed.svg', username: 'meowed', likedImg: 'assets/img/respondeai.svg', likedName: 'respondeai', postImg:'assets/img/gato-telefone.svg', initialLikes: 101523},
    {userImg: 'assets/img/barked.svg', username: 'barked', likedImg: 'assets/img/adorable_animals.svg', likedName: 'adorable_animals', postImg:'assets/img/dog.svg', initialLikes: 99159}
  ];

return(
<div className="posts">
  {posts.map((post, index) =>(
    <Post key={index} postImg={post.postImg} userImg={post.userImg} username={post.username} likedImg={post.likedImg} likedName={post.likedName} initialLikes={post.initialLikes} />
  ))}
</div>
)
};