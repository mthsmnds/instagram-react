import React from "react"

export default function Post ({username, userImg, postImg, initialLikes, likedImg, likedName}){
        const [likePost, setLikePost] = React.useState(false);
        const [savePost, setSavePost] = React.useState(false);
        const [totalLikes, setTotalLikes] = React.useState(initialLikes);

        const toggleLike = () => { 
                setLikePost((prevState) => !prevState);
                setTotalLikes((prevLikes) => (likePost ? prevLikes -1 : prevLikes +1));
              };

        const toggleSave = () => { 
                setSavePost((prevState) => !prevState);
              };


return (

<div className="post">
  <div className="topo">
    <div className="usuario">
      <img src={userImg}/>
      {username}
    </div>
    <div className="acoes">
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  </div>

  <div className="conteudo">
    <img src={postImg}/>
  </div>

  <div className="fundo">
    <div className="acoes">
      <div>
        <ion-icon name={likePost ? "heart" : "heart-outline"} onClick={toggleLike} style={{color: likePost ? "#e91f52" : "black"}}></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name={savePost ? "bookmark" : "bookmark-outline"} onClick={toggleSave}></ion-icon>
      </div>
    </div>

    <div className="curtidas">
      <img src={likedImg}/>
      <div className="texto">
        Curtido por <strong>{likedName}</strong> e <strong>outras {totalLikes} pessoas</strong>
      </div>
    </div>
  </div>
</div>
        )
}



