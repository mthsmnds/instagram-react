let username = "catanacomics";
let userPfp = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmaus9yuzZxT4W44nk59iqCq4g8Bae3773Qg&s"

export default function User(){
return (
<div class="usuario">
<img src={userPfp} alt="imagem de perfil" onClick={setPfp}/>
<div class="texto">
  <span>
    <strong>{username}</strong>
    <ion-icon name="pencil" onClick={setUser}></ion-icon>
  </span>
</div>
</div>
)
};


function setUser(){
    username = prompt("Qual seu novo nome de usuário?");
}

function setPfp(){
  userPfp = prompt("Insira o link da sua nova imagem de perfil");
}