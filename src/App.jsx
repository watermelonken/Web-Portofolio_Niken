import { useState } from "react"

import CursorStars from "./components/CursorStars"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Activities from "./components/Activities"
import Work from "./components/Artwork"
import Footer from "./components/Footer"

import bg2 from "./images/background2.jpg"
import bg3 from "./images/background3.jpg"
import bg4 from "./images/background4.jpg"

function App(){

const [lang,setLang] = useState("en")

const toggleLang = ()=>{
setLang(lang==="en"?"id":"en")
}

return(

<div>

<CursorStars/>

<Navbar lang={lang} toggleLang={toggleLang} />

<Hero lang={lang} />

{/* ABOUT SECTION */}

<section
id="about"
className="section"
style={{backgroundImage:`url(${bg2})`}}
>

<About lang={lang} />

</section>


{/* ACTIVITIES */}

<section
id="activities"
className="section"
style={{backgroundImage:`url(${bg3})`}}
>

<Activities lang={lang}/>

</section>


{/* WORK */}

<section
id="work"
className="section"
style={{backgroundImage:`url(${bg4})`}}
>

<Work lang={lang}/>

</section>
<Footer lang={lang}/>
</div>

)

}

export default App