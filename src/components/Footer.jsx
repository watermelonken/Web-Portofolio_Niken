import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa"

function Footer({lang}){

return(

<footer className="footer">

<div className="footer-content">

<h3>Niken Aisyi Meyca</h3>

<p>
{lang==="en"
?"Thanks for visiting!"
:"Terima kasih sudah berkunjung!"}
</p>

<div className="footer-icons">

<a
href="https://instagram.com/naeykean"
target="_blank"
rel="noreferrer"
>
<FaInstagram/>
</a>

<a
href="https://github.com/watermelonken"
target="_blank"
rel="noreferrer"
>
<FaGithub/>
</a>

</div>

<p className="footer-copy">

© 2026 Niken Aisyi Meyca

</p>

</div>

</footer>

)

}

export default Footer