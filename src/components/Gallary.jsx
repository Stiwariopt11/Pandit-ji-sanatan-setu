import React from 'react'
import "./Gallary.css"





import img35 from "../assets/website_photos/img35.mp4"
import img36 from "../assets/website_photos/img36.mp4"
import img37 from "../assets/website_photos/img37.mp4"
import img38 from"../assets/website_photos/img38.mp4"
import img39 from"../assets/website_photos/img39.mp4"
import img40 from"../assets/website_photos/img40.mp4"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";




const images = Object.values(
  import.meta.glob('../assets/website_photos/*.{png,jpg,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
  })
);


const Gallary = () => {



    const navigate = useNavigate();
function handleCall() {
    window.location.href = "tel:+918800856419";
}
function bookpooja() {
   window.open("https://forms.gle/iKC5grjMYqJKgbYU9")
}







  return (
<>

<div id="fathergalary">

  
<div className="firstimg">
<div>
   <img src={images[21]} alt="Image 11" className="firstimage" loading="lazy" />
</div>

<div id="pdtdtl">
  <p id="name"> <h2 style={{color:"black"}}>भागवत भूषण <br/>परम श्रद्धेय श्री विजय कृष्ण भारद्वाज</h2> </p> 
<p id="experience"><h4 style={{color:"black"}}>वैदिक अनुष्ठानों एवं पूजा-पाठ में 25+ वर्षों का अनुभव</h4></p>

</div>
</div>



<div className="buttonsection">


<button id="buttonn" onClick={handleCall}><h3 style={{color:"black"}}>Call Us</h3></button>



<button id="buttonn" onClick={bookpooja}><h3 style={{color:"black"}}>Book Pooja</h3></button>

<a
  href="https://wa.me/918800856419"
  target="_blank"
  rel="noopener noreferrer"
>
  <button id="buttonn"> <h3 style={{color:"black"}}> WhatsApp message</h3></button>
</a>
</div>


<p style={{textAlign: "center", marginTop:"100px", }}><h3 style={{color: "    #0B132B"}}>ॐ कृष्णाय वासुदेवाय हरये परमात्मने।
प्रणतः क्लेश नाशाय गोविन्दाय नमो नमः॥ </h3></p>



<div className="videos">

<video className="vdos" src={img35}muted autoPlay loop />
<video className="vdos"  src={img39}  autoPlay loop />
<video className="vdos" src= {img37} muted autoPlay loop />
<video className="vdos" src= {img38}  muted autoPlay loop/>

</div>


    <div className='gallarycontainer'>
    

<div className="imgdiv">
  <img src={images[11]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[1]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[2]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[3]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[4]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[5]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[6]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[7]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[8]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[9]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[10]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[12]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[0]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[13]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[14]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[15]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[16]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[17]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[18]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[19]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[20]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[21]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[22]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[23]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[24]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[25]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[26]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[27]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[28]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[29]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[30]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[31]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[32]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  <img src={images[33]} alt="Pandit performing a traditional Hindu puja ceremony" className="imgcls" loading="lazy" />
  
 
</div>



    </div></div></>
  )
}

export default Gallary
