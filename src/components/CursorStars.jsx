import { useEffect } from "react"

function CursorStars(){

useEffect(()=>{

const createStar = (x,y)=>{

const star = document.createElement("span")

star.innerHTML = "✦"

star.style.position="fixed"
star.style.left=x+"px"
star.style.top=y+"px"
star.style.color="white"
star.style.fontSize=(Math.random()*10+10)+"px"
star.style.pointerEvents="none"
star.style.zIndex="9999"
star.style.opacity="1"
star.style.transition="transform 0.8s linear, opacity 0.8s linear"

document.body.appendChild(star)

setTimeout(()=>{
star.style.transform="translateY(-40px) scale(0)"
star.style.opacity="0"
},10)

setTimeout(()=>{
star.remove()
},800)

}

const move = (e)=>{
createStar(e.clientX,e.clientY)
}

window.addEventListener("mousemove",move)

return ()=>{
window.removeEventListener("mousemove",move)
}

},[])

return null

}

export default CursorStars