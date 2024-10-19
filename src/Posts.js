import React from "react"

export default function Posts (){

const [likePost1, setLikePost1] = React.useState(false);
const [likePost2, setLikePost2] = React.useState(false);

const [savePost1, setSavePost1] = React.useState(false);
const [savePost2, setSavePost2] = React.useState(false);

const [totalLikes1, setTotalLikes1] = React.useState(101523);
const [totalLikes2, setTotalLikes2] = React.useState(99159);

const toggleLike1 = () => { 
  setLikePost1((prevState) => !prevState);
  setTotalLikes1((prevLikes) => (likePost1 ? prevLikes -1 : prevLikes +1));
};

const toggleLike2 = () => { 
  setLikePost2((prevState) => !prevState);
  setTotalLikes2((prevLikes) => (likePost2 ? prevLikes -1 : prevLikes +1));
};

const toggleSave1 = () => { 
  setSavePost1((prevState) => !prevState);
};

const toggleSave2 = () => { 
  setSavePost2((prevState) => !prevState);
};

return(
<div className="posts">
<div className="post">
  <div className="topo">
    <div className="usuario">
      <img src="assets/img/meowed.svg" alt="meowed"/>
      meowed
    </div>
    <div className="acoes">
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  </div>

  <div className="conteudo">
    <img src="assets/img/gato-telefone.svg" alt="gato-telefone"/>
  </div>

  <div className="fundo">
    <div className="acoes">
      <div>
        <ion-icon name={likePost1 ? "heart" : "heart-outline"} onClick={toggleLike1} style={{color: likePost1 ? "#e91f52" : "black"}}></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name={savePost1 ? "bookmark" : "bookmark-outline"} onClick={toggleSave1}></ion-icon>
      </div>
    </div>

    <div className="curtidas">
      <img src="assets/img/respondeai.svg" alt="respondeai"/>
      <div className="texto">
        Curtido por <strong>respondeai</strong> e <strong>outras {totalLikes1} pessoas</strong>
      </div>
    </div>
  </div>
</div>

<div className="post">
  <div className="topo">
    <div className="usuario">
      <img src="assets/img/barked.svg" alt="barked"/>
      barked
    </div>
    <div className="acoes">
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  </div>

  <div className="conteudo">
    <img src="assets/img/dog.svg" alt="dog" />
  </div>

  <div className="fundo">
    <div className="acoes">
      <div>
        <ion-icon name={likePost2 ? "heart" : "heart-outline"} onClick={toggleLike2} style={{color: likePost2 ? "#e91f52" : "black"}}></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
      <ion-icon name={savePost2 ? "bookmark" : "bookmark-outline"} onClick={toggleSave2}></ion-icon>
      </div>
    </div>

    <div className="curtidas">
      <img src="assets/img/adorable_animals.svg" alt="adorable_animals"/>
      <div className="texto">
        Curtido por <strong>adorable_animals</strong> e <strong>outras {totalLikes2} pessoas</strong>
      </div>
    </div>
  </div>
</div>
</div>
)

};