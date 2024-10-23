import React from "react"
import Post from "./Post";

export default function Posts (){

return(
<div className="posts">
  <Post userImg="assets/img/meowed.svg" userAlt="meowed" likeImg="assets/img/respondeai.svg" likeAlt="respondeai" img="assets/img/gato-telefone.svg" />
  <Post userImg="assets/img/barked.svg" userAlt="barked" likeImg="assets/img/adorable_animals.svg" likeAlt="adorable_animals" img="assets/img/dog.svg" />
</div>
)
};