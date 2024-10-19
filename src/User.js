import React from "react";


export default function User(){

  const  [name, setName] = React.useState("catanacomics");
  const [pic, setPic] = React.useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmaus9yuzZxT4W44nk59iqCq4g8Bae3773Qg&s");

return (
<div className="usuario">
<img src={pic} alt="imagem de perfil" onClick={setPfp}/>
<div className="texto">
  <span>
    <strong>{name}</strong>
    <ion-icon name="pencil" onClick={setUser}></ion-icon>
  </span>
</div>
</div>
)

function setUser(){
    const nameType = prompt("Qual seu novo nome de usuário?");
    setName(nameType);
}

function setPfp(){
  const picType = prompt("Insira o link da sua nova imagem de perfil");
  setPic(picType);
}
};

