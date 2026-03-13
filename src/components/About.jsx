import bg from "../images/background2.jpg"

function About({lang}){

return(

<section
id="about"
className="section"
style={{backgroundImage:`url(${bg})`}}
>

<h2>{lang==="en"?"About Me":"Tentang Saya"}</h2>

<p>
{lang==="en"
?"I love learning languages, coding, and exploring new things."
:"Saya suka belajar bahasa, coding, dan mengeksplorasi hal baru."}
</p>

</section>

)

}

export default About