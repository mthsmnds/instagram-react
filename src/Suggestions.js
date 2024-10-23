import React from "react"
import Suggestion from "./Suggestion"

export default function Suggestions (){
        return (
<div className="sugestoes">
<div className="titulo">
  Sugestões para você
  <div>Ver tudo</div>
</div>

<Suggestion img="assets/img/bad.vibes.memes.svg" alt="bad.vibes.memes" status="Segue você" />
<Suggestion img="assets/img/chibirdart.svg" alt="chibirdart" status="Segue você" />
<Suggestion img="assets/img/razoesparaacreditar.svg" alt="razoesparaacreditar" status="Novo no Instagram" />
<Suggestion img="assets/img/adorable_animals.svg" alt="adorable_animals" status="Segue você" />
<Suggestion img="assets/img/smallcutecats.svg" alt="smallcutecats" status="Segue você" />

</div>
        )
};