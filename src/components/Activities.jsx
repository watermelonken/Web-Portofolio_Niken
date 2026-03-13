import bg from "../images/background3.jpg"

function Activities({lang}){

return(

<section
id="activities"
className="section"
style={{backgroundImage:`url(${bg})`}}
>

<h2>{lang==="en"?"My Activities":"Aktivitasku"}</h2>

<p>
{lang==="en"
?"I study, code websites, and practice English."
:"Saya belajar, membuat website, dan berlatih bahasa Inggris."}
</p>

</section>

)

}

export default Activities