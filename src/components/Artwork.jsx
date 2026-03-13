import bg from "../images/background4.jpg"

function Work({lang}){

return(

<section
id="work"
className="section"
style={{backgroundImage:`url(${bg})`}}
>

<h2>{lang==="en"?"My Work":"Karyaku"}</h2>

<p>
{lang==="en"
?"Here are some projects I created."
:"Berikut beberapa proyek yang saya buat."}
</p>

</section>

)

}

export default Work