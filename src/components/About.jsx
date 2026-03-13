import { useEffect, useRef, useState } from "react"
import photo from "../images/photo.png"

function About({lang}){

const aboutRef = useRef(null)

const [visible,setVisible] = useState(false)
const [text,setText] = useState("")
const [skillPerc,setSkillPerc] = useState([0,0,0,0,0])

const textEN = "Well hello there! Seems like u wanna know more about me, so... my name is Niken Aisyi Meyca and you can call me Niken or Ken! I live in Banda Aceh and I'm currently 16 y.o. I really love drawing in my spare time, I also enjoy watching movies and exploring many other fandoms! My MBTI is INFJ and my Enneagram type is 1w2. Actually I'm just a loser trying to survive this world."

const textID = "Halo! Sepertinya kamu ingin mengenal aku lebih jauh, jadi... namaku Niken Aisyi Meyca dan kamu bisa memanggilku Niken atau Ken! Aku tinggal di Banda Aceh dan saat ini berusia 16 tahun. Aku sangat suka menggambar di waktu luangku, aku juga menikmati menonton film dan menjelajahi berbagai fandom lainnya! MBTI-ku adalah INFJ dan tipe Enneagram-ku 1w2. Sebenarnya aku hanyalah seseorang yang sedang mencoba bertahan di dunia ini."

const fullText = lang==="en"?textEN:textID

useEffect(()=>{

const observer = new IntersectionObserver(
([entry])=>{
if(entry.isIntersecting){
setVisible(true)
}
},
{threshold:0.3}
)

if(aboutRef.current){
observer.observe(aboutRef.current)
}

},[])

useEffect(()=>{

if(!visible) return

let i = 0

const typing = setInterval(()=>{

setText(fullText.slice(0,i))
i++

if(i>fullText.length){
clearInterval(typing)
}

},25)

return ()=>clearInterval(typing)

},[visible,lang])

useEffect(()=>{

if(!visible) return

const target = [90,80,70,65,75]

target.forEach((val,index)=>{

let current = 0

const interval = setInterval(()=>{

current++

setSkillPerc(prev=>{
const newArr=[...prev]
newArr[index]=current
return newArr
})

if(current>=val){
clearInterval(interval)
}

},20)

})

},[visible])

return(

<section ref={aboutRef}>

<div className="about-glass">

<div className="about-content">

<div className="about-photo">

<img
src={photo}
alt="me"
className="about-photo-img"
/>

</div>

<div className="about-text">

<h2>Niken Aisyi Meyca</h2>

<p>{text}</p>

<div className="skills">

<h3>{lang==="en"?"My Skills":"Kemampuanku"}</h3>

<div className="skill">
<span>
{lang==="en"?"Drawing Digitally":"Menggambar Digital"} {skillPerc[0]}%
</span>
<div className="skill-bar">
<div className="skill-fill" style={{width:skillPerc[0]+"%"}}></div>
</div>
</div>

<div className="skill">
<span>
{lang==="en"?"Drawing Traditionally":"Menggambar Tradisional"} {skillPerc[1]}%
</span>
<div className="skill-bar">
<div className="skill-fill" style={{width:skillPerc[1]+"%"}}></div>
</div>
</div>

<div className="skill">
<span>
{lang==="en"?"Singing":"Bernyanyi"} {skillPerc[2]}%
</span>
<div className="skill-bar">
<div className="skill-fill" style={{width:skillPerc[2]+"%"}}></div>
</div>
</div>

<div className="skill">
<span>
{lang==="en"?"Writing":"Menulis"} {skillPerc[3]}%
</span>
<div className="skill-bar">
<div className="skill-fill" style={{width:skillPerc[3]+"%"}}></div>
</div>
</div>

<div className="skill">
<span>
{lang==="en"?"Creativity":"Kreativitas"} {skillPerc[4]}%
</span>
<div className="skill-bar">
<div className="skill-fill" style={{width:skillPerc[4]+"%"}}></div>
</div>
</div>

</div>

</div>

</div>

</div>

</section>

)

}

export default About