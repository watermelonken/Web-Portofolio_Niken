import { useState } from "react"

import art1 from "../images/dtiys.png"
import art2 from "../images/higher than the sky.png"
import art3 from "../images/ditys-5.png"

function Work({lang}){

const [modal,setModal] = useState(null)

const works = [

{
img: art1,
titleEN: "Character Illustration",
titleID: "Ilustrasi Karakter"
},

{
img: art2,
titleEN: "Original Character",
titleID: "Karakter Orisinal"
},

{
img: art3,
titleEN: "DTIYS Challenge",
titleID: "Challenge DTIYS"
}

]

return(

<div className="work-container">

<h2>{lang==="en"?"My Work":"Karyaku"}</h2>

<div className="work-grid">

{works.map((w,index)=>(

<div
className="work-card"
key={index}
onClick={()=>setModal(w.img)}
>

<img src={w.img} alt="art"/>

<h3>{lang==="en"?w.titleEN:w.titleID}</h3>

</div>

))}

</div>


{modal && (

<div
className="image-modal"
onClick={()=>setModal(null)}
>

<img src={modal} alt="preview"/>

</div>

)}

</div>

)

}

export default Work