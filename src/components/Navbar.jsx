import { useEffect, useState } from "react"
import logo from "../images/logo2.png"

function Navbar({ lang, toggleLang }) {

const [active,setActive] = useState("home")

useEffect(()=>{

const handleScroll = ()=>{

const sections = ["home","about","activities","work"]

for(let id of sections){

const section = document.getElementById(id)

if(section){

const top = section.offsetTop - 150
const height = section.offsetHeight
const scroll = window.scrollY

if(scroll >= top && scroll < top + height){
setActive(id)
}

}

}

}

window.addEventListener("scroll",handleScroll)

return ()=> window.removeEventListener("scroll",handleScroll)

},[])

return(

<nav className="navbar">

<img src={logo} className="logo"/>

<div className="nav-center">

<a href="#home" className={active==="home"?"active":""}>
{lang==="en"?"Home":"Beranda"}
</a>

<a href="#about" className={active==="about"?"active":""}>
{lang==="en"?"About Me":"Tentang Saya"}
</a>

<a href="#activities" className={active==="activities"?"active":""}>
{lang==="en"?"My Activities":"Aktivitasku"}
</a>

<a href="#work" className={active==="work"?"active":""}>
{lang==="en"?"My Work":"Karyaku"}
</a>

</div>

<button className="translate-btn" onClick={toggleLang}>
{lang==="en"?"ID":"EN"}
</button>

</nav>

)

}

export default Navbar