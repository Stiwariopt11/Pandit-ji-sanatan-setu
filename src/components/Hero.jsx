import "./Hero.css"
import video from "../assets/output.mp4"
import { useRef, useEffect } from "react";
import Karyahero from "./Karyahero.jsx";
import Cardshero from "./Cardshero.jsx";
import  srsite  from"../assets/srsite.jpg";
import  audio  from"../assets/video.mp3";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const imageslst = Object.values(
  import.meta.glob('../assets/website_photos/*.{png,jpg,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
  })
);








const Hero = () => {

 const videoRef = useRef(null);

useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  video.muted = false;

  let retryTimer;

  const startVideo = () => {
    if (!video.paused) return;

    video.play().catch((error) => {
      console.log("Autoplay retry:", error);
    });
  };

  startVideo();

  video.addEventListener("loadeddata", startVideo);
  video.addEventListener("canplay", startVideo);

  retryTimer = setInterval(() => {
    if (video.paused) {
      startVideo();
    } else {
      clearInterval(retryTimer);
    }
  }, 1000);
video.muted = false;
  return () => {
    video.removeEventListener("loadeddata", startVideo);
    video.removeEventListener("canplay", startVideo);
    clearInterval(retryTimer);
  };
}, []);


useEffect(() => {
  AOS.init({
    duration: 1200,
    once: true,
    offset: 100
  });
}, []);


useEffect(() => {
    const container = document.querySelector(".images");

    if (!container) return;

    let animationId;

    const animate = () => {
        container.scrollLeft += 1;

        const images = container.querySelectorAll("img");
        const containerCenter =
            container.getBoundingClientRect().left +
            container.clientWidth / 2;

        images.forEach((img) => {
            const rect = img.getBoundingClientRect();
            const imageCenter = rect.left + rect.width / 2;

            const distance = Math.abs(containerCenter - imageCenter);

            if (distance < rect.width / 2) {
               
                img.style.transform = "scale(1.1)";
                img.style.boxShadow = "0 8px 20px rgba(220, 109, 18, 0.3)";
                
            } else {
                img.style.transform = "scale(1)";
            }
        });

        if (
            container.scrollLeft + container.clientWidth >=
            container.scrollWidth
        ) {
            container.scrollLeft = 0;
        }

        animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
}, []);


    const navigate = useNavigate();
function handleCall() {
    window.location.href = "tel:+918800856419";
}
function bookpooja() {
   window.open("https://forms.gle/iKC5grjMYqJKgbYU9")
}


  return (
  <>
    <Helmet>
      <title>
        Pandit Ji Sanatan Setu | Online Puja Booking & Pandit Services
      </title>

      <meta
        name="description"
        content="Book experienced Pandits online for Puja, Hawan, Griha Pravesh, Vivah Sanskar, Satyanarayan Katha, Rudrabhishek and Vedic rituals with Pandit Ji Sanatan Setu."
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <link
        rel="canonical"
        href="https://www.pandit-ji-sanatan-setu.in/"
      />

      <meta
        property="og:title"
        content="Pandit Ji Sanatan Setu | Online Puja Booking"
      />

      <meta
        property="og:description"
        content="Book experienced Pandits for Hindu puja, havan, religious ceremonies and spiritual guidance."
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content="https://www.pandit-ji-sanatan-setu.in/"
      />
    </Helmet>

 























    

    <div className="herodiv" style={{backgroundColor:"white"}}>
 <div id="animatedvdo">
     <video id="vid" ref={videoRef}  src={video} autoPlay   playsInline preload="auto" loop   aria-label="Pandit Ji Sanatan Setu religious services introduction" />
</div>




<br>
</br>
<div className="textbox"> 
   <h2 className="texts"> वक्रतुण्ड महाकाय कोटिसूर्य समप्रभ। |  निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥ </h2> 
   
   <h2 className="texttwo">     पंडित जी सनातन सेतु |  आपकी आस्था, हमारी सेवा। 
   
    </h2> 
   
     
</div>




<br>
</br>

<div className="images">

   

 <img className="imgid" src={imageslst[1]} alt="Hindu religious ceremony and puja by Pandit Ji" />

<img className="imgid" src={imageslst[2]} alt="Hindu religious ceremony and puja by Pandit Ji" />

<img className="imgid" src={imageslst[3]} alt="Hindu religious ceremony and puja by Pandit Ji" />

<img className="imgid" src={imageslst[4]} alt="Hindu religious ceremony and puja by Pandit Ji" />

<img className="imgid" src={imageslst[5]} alt="Hindu religious ceremony and puja by Pandit Ji"/>

<img className="imgid" src={imageslst[6]}alt="Hindu religious ceremony and puja by Pandit Ji" />

<img className="imgid" src={imageslst[7]} alt="Hindu religious ceremony and puja by Pandit Ji" /> 

<img  className="imgid" src={imageslst[8]} alt="Hindu religious ceremony and puja by Pandit Ji" />

<img className="imgid" src={imageslst[20]} alt="Hindu religious ceremony and puja by Pandit Ji" />

<img className="imgid" src={imageslst[30]} alt="Hindu religious ceremony and puja by Pandit Ji" />

<img className="imgid" src={imageslst[33]} alt="Hindu religious ceremony and puja by Pandit Ji" />

<img className="imgid" src={imageslst[31]} alt="Hindu religious ceremony and puja by Pandit Ji" />

<img className="imgid"  src={imageslst[11]} alt="Hindu religious ceremony and puja by Pandit Ji" />

<img className="imgid" src={imageslst[13]} alt="Hindu religious ceremony and puja by Pandit Ji" />

<img className="imgid" src={imageslst[1]}alt="Hindu religious ceremony and puja by Pandit Ji" />



</div>

<div className="buttonarea" style={{backgroundColor:"beige", borderRadius:"30px", display:"flex", gap:"30px", justifyContent:"center", maarginTop:"60px", flexShrink:"0"}}>
    <h1> Contact Us:</h1>

<div style={{display:"flex", flexDirection:"row", gap:"50px"}}><button id="buttonn"><h3 style={{color:"black"}} onClick={handleCall} >Call Us</h3></button>

<button id="buttonn"onClick={bookpooja} ><h3 style={{color:"black"}}>Book a Pooja</h3></button></div>
<a
  href="https://wa.me/918800856419"
  target="_blank"
  rel="noopener noreferrer"
>
  <button id="buttonn" style={{color:"black", marginLeft:"20px"}}> <h3 style={{color:"black"}}> WhatsApp Message</h3></button>
</a>

     </div>


<div className="cardssection" style={{backgroundColor:"white", marginTop:"60px"}}>

    <Cardshero 
    title= "कथा एवं आध्यात्मिक ज्ञान"

    description= "सनातन धर्म, वैदिक परंपराओं एवं धार्मिक ग्रंथों के ज्ञान से जुड़ें।"

    services= "श्रीमद्भागवत महापुराण कथा, श्री राम कथा,श्री शिव महापुराण कथा, देवी भागवत कथा, कथा आयोजन की बुकिंग, प्रवचन एवं आध्यात्मिक मार्गदर्शन|" /> 
    <Cardshero title="ज्योतिष एवं कुंडली परामर्श"

  description="वैदिक ज्योतिष के माध्यम से अपनी जन्मपत्री, ग्रहों की स्थिति एवं जीवन से जुड़े महत्वपूर्ण प्रश्नों पर मार्गदर्शन प्राप्त करें।"

  services="जन्मपत्री निर्माण एवं विश्लेषण, कुंडली मिलान, करियर एवं व्यापार परामर्श, विवाह एवं संतान योग, शिक्षा एवं विदेश यात्रा योग, गृह क्लेश संबंधी परामर्श, ज्योतिषीय प्रश्नों के उत्तर तथा पंडित जी से ऑनलाइन या फोन पर संपर्क।"

/>


    <Cardshero title="पूजा-पाठ एवं कर्मकांड"

  description="सनातन धर्म, वैदिक परंपराओं एवं धार्मिक ग्रंथों के ज्ञान से जुड़ें और आध्यात्मिक मार्गदर्शन प्राप्त करें।"

  services="गृह प्रवेश वास्तु पूजा एवं  पाठ, 
विवाह संस्कार
जन्मदिन हवन
 सत्यनारायण कथा, 
रुद्राभिषेक, महामृत्युंजय पाठ,
नवचंडी पाठ दुर्गा पूजा, व
 सतचंडी पाठ, 
बगलामुखी , और अन्य धार्मिक अनुष्ठानों के लिए
 पंडित बुक करने की सुविधा।"/> 
</div>
<br/> <br/><br/>


<div className="whychoosus"> 

{/* <div className="detailbox" data-aos="fade-right"> */}
  <div className="detailbox"style={{backgroundColor:"white"}} data-aos="fade-right">
        <div className="lastheading">
          <h1 id="redtext">PANDIT BOOKING </h1> <h1>-BOOK PANDITJI FOR PUJA</h1>
        </div>


        <div className="context">

            <p><br/><br/>
            Bring peace, positivity, and divine blessings into your life with the guidance of an experienced Pandit Ji. We provide reliable and personalized Hindu puja services for every occasion, performed with devotion and according to Vedic traditions.

            Whether you are planning a Griha Pravesh, Satyanarayan Katha, Havan, Vastu Shanti, Marriage Ceremony, or any other religious ritual, you can book Pandit Ji for your specific needs. From daily pujas to special ceremonies, every ritual is performed with dedication, proper vidhi-vidhan, and respect for your traditions.

            Our Puja and Religious Services
            <br/><br/></p>
            <h2 style={{marginLeft:"0"}}>Why Choose Our Pandit Ji?</h2> <br/>

<p>
          
            1️⃣  Experienced and knowledgeable in Hindu rituals and Vedic traditions.<br/><br/>
            2️⃣  Personalized puja arrangements according to your requirements.<br/><br/>
            3️⃣  Services for various religious occasions and life events.<br/><br/>
            4️⃣  Respect for regional customs, family traditions, and individual beliefs.<br/><br/>
            5️⃣  Convenient booking for pujas at your home or preferred location.<br/><br/>

           Book Pandit Ji for Your Puja

            Make every auspicious occasion special with the blessings of Vedic rituals. Whatever the occasion, book Pandit Ji for a traditional and spiritually fulfilling experience.

          One Pandit Ji. Every Puja. Every Auspicious Occasion.

          Contact us today to discuss your requirements and book Pandit Ji for your next puja or religious ceremony.</p>
      </div>
</div>
      {/* <div className="rightimg" data-aos="fade-left">  */}
         <div className="rightimg" data-aos="fade-left">
          <img id="imgright" src={srsite} height="500px" alt="Pandit Ji Sanatan Setu Hindu religious services" width="600px" ></img>
      </div>
</div>


{/* <div 
    className="whychooseus">

    <div className="reason" data-aos="fade-right" >
        
<div className="heading" style={{display:"flex",  flexDirection:"column", justifyContent:"center"}}>

            <div style={{marginLeft:"70px"}}> <h1 style={{color:"red"}}>  PANDIT BOOKING  </h1></div> <div style={{color:"black"}}> <h2>-BOOK PANDITJI FOR PUJA</h2></div>
</div>

<div className="context">

 <p><br/><br/>
Bring peace, positivity, and divine blessings into your life with the guidance of an experienced Pandit Ji. We provide reliable and personalized Hindu puja services for every occasion, performed with devotion and according to Vedic traditions.

Whether you are planning a Griha Pravesh, Satyanarayan Katha, Havan, Vastu Shanti, Marriage Ceremony, or any other religious ritual, you can book Pandit Ji for your specific needs. From daily pujas to special ceremonies, every ritual is performed with dedication, proper vidhi-vidhan, and respect for your traditions.

Our Puja and Religious Services
<br/><br/>
<h2 style={{marginLeft:"0"}}>Why Choose Our Pandit Ji?</h2> <br/>


<br/>
* Experienced and knowledgeable in Hindu rituals and Vedic traditions.<br/>
* Personalized puja arrangements according to your requirements.<br/>
* Services for various religious occasions and life events.<br/>
* Respect for regional customs, family traditions, and individual beliefs.<br/>
* Convenient booking for pujas at your home or preferred location.<br/>

Book Pandit Ji for Your Puja

Make every auspicious occasion special with the blessings of Vedic rituals. Whatever the occasion, book Pandit Ji for a traditional and spiritually fulfilling experience.

One Pandit Ji. Every Puja. Every Auspicious Occasion.

Contact us today to discuss your requirements and book Pandit Ji for your next puja or religious ceremony.</p>
</div>


    </div>

<div className="rightimg" data-aos="fade-left">   
 <img src={srsite} height="500px" width="600px" ></img>
</div>

</div> */}

<br/> <br/><br/><br/> 
</div> </>


  );

};

export default Hero;