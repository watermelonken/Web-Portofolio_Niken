import { useEffect, useRef, useState } from "react"

import drawImg from "../images/ipad drawing.jpg"
import movieImg from "../images/Fight club.jpg"
import fandomImg from "../images/download (6).jpg"

function Activities({lang}){

const cardsRef = useRef([])

const [modalImg,setModalImg] = useState(null)

useEffect(()=>{

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show-card")

}

})

},

{threshold:0.3}

)

cardsRef.current.forEach(card=>{
if(card) observer.observe(card)
})

},[])

return(

<div className="activities-container">

<h2>{lang==="en"?"My Activities":"Aktivitasku"}</h2>

<div className="activities-grid">

{/* DRAWING */}

<div
className="activity-card"
ref={el => cardsRef.current[0] = el}
>

<img src={drawImg} alt="drawing"
onClick={()=>setModalImg(drawImg)}
/>

<h3>{lang==="en"?"Drawing":"Menggambar"}</h3>

<p>
{lang==="en"
?"I draw both digitally and traditionally, I usually draw DTIYS and my original characters!"
:"Aku menggambar secara digital maupun tradisional, biasanya aku menggambar DTIYS dan karakter orisinalku sendiri!"}
</p>

</div>


{/* MOVIES */}

<div
className="activity-card"
ref={el => cardsRef.current[1] = el}
>

<img src={movieImg} alt="movies"
onClick={()=>setModalImg(movieImg)}
/>

<h3>{lang==="en"?"Watching Movies":"Menonton Film"}</h3>

<p>
{lang==="en"
?"Literally my favourite thing to do, I love watching movies especially western movies."
:"Ini benar-benar kegiatan favoritku, aku sangat suka menonton film terutama film barat."}
</p>

</div>


{/* FANDOM */}

<div
className="activity-card"
ref={el => cardsRef.current[2] = el}
>

<img src={fandomImg} alt="fandom"
onClick={()=>setModalImg(fandomImg)}
/>

<h3>{lang==="en"?"Exploring Fandoms":"Menjelajahi Fandom"}</h3>

<p>
{lang==="en"
?"I enjoy exploring new fandoms and participating in the fandoms I'm in."
:"Aku menikmati menjelajahi fandom baru dan berpartisipasi dalam fandom yang aku ikuti."}
</p>

</div>

</div>


{/* IMAGE MODAL */}

{modalImg && (

<div className="image-modal" onClick={()=>setModalImg(null)}>

<img src={modalImg} alt="preview"/>

</div>

)}

</div>

)

}

export default Activities