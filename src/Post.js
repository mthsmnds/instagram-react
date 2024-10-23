import React from "react"

export default function Post (props){
        const [likePost, setLikePost] = React.useState(false);
        const [savePost, setSavePost] = React.useState(false);
        const [totalLikes, setTotalLikes] = React.useState(101523);

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
      <img src={props.userImg} alt={props.userAlt}/>
      {props.userAlt}
    </div>
    <div className="acoes">
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  </div>

  <div className="conteudo">
    <img src={props.img} alt={props.alt}/>
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
      <img src={props.likeImg} alt={props.likeAlt}/>
      <div className="texto">
        Curtido por <strong>{props.likeAlt}</strong> e <strong>outras {totalLikes} pessoas</strong>
      </div>
    </div>
  </div>
</div>
        )
}



