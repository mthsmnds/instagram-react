import React from "react"
import Suggestion from "./Suggestion"

export default function Suggestions (){
        let suggestions =[
                {img: 'assets/img/bad.vibes.memes.svg', username: 'bad.vibes.memes', status: 'Segue você'},
                {img: 'assets/img/chibirdart.svg', username: 'chibirdart', status: 'Segue você'},
                {img: 'assets/img/razoesparaacreditar.svg', username: 'razoesparaacreditar', status: 'Novo no Instagram'},
                {img: 'assets/img/adorable_animals.svg', username: 'adorable_animals', status: 'Segue você'},
                {img: 'assets/img/smallcutecats.svg', username: 'smallcutecats', status: 'Segue você'},
        ]

        return (
<div className="sugestoes">
<div className="titulo">
  Sugestões para você
  <div>Ver tudo</div>
</div>
{suggestions.map((suggestion, index) =>(
        <Suggestion img={suggestion.img} username= {suggestion.username} status={suggestion.status} key={index} />
        ))}
</div>
        )
};