import { useState } from "react"
import bg from "../images/background1.jpg"

function Hero({ lang }) {

const [stars] = useState(() => {
return Array.from({ length: 60 }, () => ({
left: Math.random() * 100 + "%",
delay: Math.random() * 10 + "s",
size: Math.random() * 6 + 6 + "px",
duration: Math.random() * 10 + 8 + "s"
}))
})

return (

<section
id="home"
className="section hero"
style={{ backgroundImage: `url(${bg})` }}
>

{/* RANDOM STARS */}
<div className="star-container">

{stars.map((star, i) => (
<span
key={i}
className="star"
style={{
left: star.left,
animationDelay: star.delay,
fontSize: star.size,
animationDuration: star.duration
}}
>
✦
</span>
))}

</div>

<div className="hero-glass">

<h1>
{lang === "en" ? "My Introduction! :P" : "Perkenalanku! :P"}
</h1>

<h2>
{lang === "en" ? "Hi! I'm Ken." : "Hai! Aku Ken."}
</h2>

<h3>
{lang === "en"
? "I'm a student at MAN 1 MODEL BNA"
: "Saya siswa di MAN 1 MODEL BNA"}
</h3>

<p>INFJ | 1w2 | Multifandom ⭐</p>

<a href="#about" className="hero-btn">
{lang === "en"
? "Get to know me better!"
: "Kenali aku lebih dekat!"}
</a>

</div>

<div className="shooting-star"></div>

</section>

)

}

export default Hero