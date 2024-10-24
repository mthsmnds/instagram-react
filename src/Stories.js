import React from "react"
import Story from "./Story"

export default function Stories (){
        let stories =[
                {img:'assets/img/9gag.svg', username: '9gag'},
                {img:'assets/img/meowed.svg', username: 'meowed'},
                {img:'assets/img/barked.svg', username: 'barked'},
                {img:'assets/img/nathanwpylestrangeplanet.svg', username: 'nathanwpylestrangeplanet'},
                {img:'assets/img/wawawicomics.svg', username: 'wawawicomics'},
                {img:'assets/img/respondeai.svg', username: 'respondeai'},
                {img:'assets/img/filomoderna.svg', username: 'filomoderna'},
                {img:'assets/img/memeriagourmet.svg', username: 'memeriagourmet'},
        ];

        return (
<div className="stories">
{stories.map((story, index) =>(
        <Story img={story.img} username= {story.username} key={index} />
        ))};

<div className="setinha">
  <ion-icon name="chevron-forward-circle"></ion-icon>
</div>
</div>
        )
};