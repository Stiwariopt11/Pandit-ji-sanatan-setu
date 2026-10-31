import React from 'react';
import "./Book.css"
import Whatpoojacard from "./Whatpoojacard.jsx";
import temple from "../assets/temple.jpg";
import kundalismall from "../assets/kundalismall.png"
import hawan from "../assets/hawan.jpeg";
import shadi from "../assets/shadi.jpeg";
import kundali from "../assets/kundali.png";
import upnayan from "../assets/upnayan.jpeg";
import kalash from "../assets/kalash.jpg";
import diya from "../assets/diya.jpeg";
import fool from "../assets/fool.jpeg";
import baby from "../assets/baby.jpeg";
import image from "../assets/image.png";
import { useEffect } from 'react';
import { Helmet } from "react-helmet-async";

const Book = () => {



function bookpooja() {
   window.open("https://forms.gle/iKC5grjMYqJKgbYU9")
}


  return (




    <>

    <Helmet>
  <title>Book a Pandit Online for Puja & Havan | Sanatan Setu</title>

  <meta
    name="description"
    content="Book experienced Pandits for Rudrabhishek, Havan, Griha Pravesh, Vivah Sanskar, Naamkaran, Kundali consultation and other Hindu religious ceremonies."
  />

  <meta name="robots" content="index, follow" />

  <link
    rel="canonical"
    href="https://pandit-ji-sanatan-setu.in/book"
  />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Book a Pandit Online | Pandit Ji Sanatan Setu"
  />
  <meta
    property="og:description"
    content="Book experienced Pandits for puja, havan, griha pravesh, wedding ceremonies and other Hindu rituals."
  />
  <meta
    property="og:url"
    content="https://pandit-ji-sanatan-setu.in/book"
  />
  <meta
    property="og:image"
    content="https://pandit-ji-sanatan-setu.in/favicon.jpg"
  />
</Helmet>






    <div className="bookcontainer">
     <div style={{marginTop:"150px" , zIndex:"0", display:"flex",flexDirection:"column", gap:"20px", backgroundColor:"white" }} >
     
      <div className="threeinone" style={{ display:"flex", justifyContent:"space-evenly", width:"100vw"}}>


        <Whatpoojacard image={temple} heading="Pran Pratistha" desc="Book Pandit ji for moorti pran pratistha" scrol="onee"
/>
      <Whatpoojacard image={hawan} heading="Hawan & yagya" desc="For peace and prosperity"  scrol="onee" />

      <Whatpoojacard image={baby} heading="Naamkaran" desc="Sacred naming ceremony" scrol="onee" /> </div>


    <div className="three" style={{ display:"flex", justifyContent:"space-evenly", width:"100vw" }}>
      
      <Whatpoojacard image={kalash} heading="Griha Pravesh" desc="Auspecious new begining" scrol="onee"/>
      <Whatpoojacard image={upnayan} heading="Upnayan Sanskar" desc="Begin the journey of knowledge" scrol="two" /> </div>


      <div className="threeinone" style={{ display:"flex", justifyContent:"space-evenly", width:"100vw" }}> <Whatpoojacard image={shadi} heading="vivah sanskar" desc="Devine union for lifetime" scrol="two"/>
      <Whatpoojacard image={fool} heading="Pitra Shanti" desc="Honor your ancestors" scrol="two"/>
      <Whatpoojacard image={kundali} heading="Astrology Consultation" desc="Guidance for a brighter future" scrol="two" /> </div>
      
      </div> 



    <div className="eventdetails" style={{width:"100%",  backgroundColor:"white",  color:"black", marginTop:"100px", position:"absolute"}}>

<div className="break"></div>


      
 <div className="oneaaa" >
  
      <div id="writtentext" className='right'> 
       <h2>श्रीमद्भागवत कथा</h2> <br/><p>
        
        महाराज श्री जी द्वारा श्रीमद्भागवत कथा

25+ वर्षों का आध्यात्मिक अनुभव | सनातन धर्म के प्रति समर्पण

पूज्य महाराज जी को श्रीमद्भागवत कथा, धार्मिक अनुष्ठानों एवं वैदिक परंपराओं में अपनी भक्तिमय कथा ओजस्वी वाणी  और शास्त्रीय ज्ञान के माध्यम से वे श्रद्धालुओं को भगवान श्रीकृष्ण की दिव्य लीलाओं तथा भागवत कथा के आध्यात्मिक संदेशों से परिचित कराते हैं।

श्रीमद्भागवत कथा भक्ति, ज्ञान और सदाचार का मार्ग दिखाते है। महाराज जी का उद्देश्य श्रद्धालुओं को सनातन धर्म की परंपराओं से जोड़ना और जीवन में प्रेम, धर्म, श्रद्धा एवं आध्यात्मिक मूल्यों को अपनाने की प्रेरणा देना है। </p> <br/>
<button class="buttonbargain" style={{height:"35px", width:"150px", backgroundColor:"brown", borderRadius:"5px"}} onClick={bookpooja}> <h3>Bargain and Book</h3></button>
</div >

 <div id="onee" className="left" ><img class="img3" src={temple} alt="none" /></div>

  </div>


  <div className="twoaaa" >
    <div className="right" >
 <h2>जन्म कुंडली के द्वारा सटीक भविष्यवाणी</h2> <br/><p>
  
  कुंडली विशेषज्ञ एवं अनुभवी आचार्य
25+ वर्षों का अनुभव | ज्योतिष शास्त्र के प्रति समर्पण

पूज्य पंडित जी को वैदिक ज्योतिष, जन्म कुंडली विश्लेषण एवं ग्रह-नक्षत्रों के अध्ययन के क्षेत्र में 25+ वर्षों से अधिक का अनुभव है। वे पारंपरिक ज्योतिषीय सिद्धांतों के अनुसार जन्म कुंडली का विश्लेषण करते हैं और श्रद्धालुओं को उनके जीवन, करियर, विवाह एवं पारिवारिक मामलों से जुड़े ज्योतिषीय पहलुओं को समझने में मार्गदर्शन प्रदान करते हैं।

कुंडली व्यक्ति के जन्म के समय ग्रहों और नक्षत्रों की स्थिति का ज्योतिषीय विवरण है। इसके माध्यम से पारंपरिक मान्यताओं के अनुसार व्यक्ति के जीवन के विभिन्न पहलुओं का आकलन किया जाता है। पंडित जी की सरल एवं सहज व्याख्या शैली श्रद्धालुओं को ज्योतिष शास्त्र की बारीकियों को समझने और जीवन के महत्वपूर्ण निर्णयों पर विचार करने में सहायता प्रदान करती है। </p> <br/>
<button class="buttonbargain" style={{height:"35px", width:"150px", backgroundColor:"brown", borderRadius:"5px"}} onClick={bookpooja}> <h3>Bargain and Book</h3></button>
    </div>

    <div className="left" id="two" style={{height:"200px", width:"300"}}><img class="img3" src={kundalismall} alt="none" /></div>
</div>


 
<div  className="threeaaa">
      <div  className="right"  > 
        <h2 >सुश्रेष्ठ ब्राह्मणों द्वारा:</h2> <br/><p style={{color:"black"}}>
        सनातन सेतु ऐप का उद्देश्य सनातन धर्म की प्राचीन परंपराओं, धार्मिक संस्कारों और आध्यात्मिक ज्ञान को प्रत्येक श्रद्धालु तक पहुँचाना है। यहाँ आप <b style={{color:"black"}}> रुद्राभिषेक, महामृत्युंजय पाठ, नवचंडी पाठ, दुर्गा पूजा, शतचंडी पाठ एवं बगलामुखी अनुष्ठान, मूर्ति प्राण प्रतिष्ठा, हवन एवं यज्ञ, नामकरण संस्कार, गृह प्रवेश, विवाह संस्कार, उपनयन संस्कार, पितृ शांति और ज्योतिष परामर्श </b> जैसी विभिन्न धार्मिक सेवाओं का लाभ प्राप्त कर सकते हैं।

25+ वर्षों से अधिक के अनुभव वाले पूज्य पंडित जी के मार्गदर्शन में पारंपरिक विधि-विधान के अनुसार पूजा-पाठ एवं धार्मिक अनुष्ठान संपन्न कराए जाते हैं। हमारा प्रयास है कि प्रत्येक परिवार अपने शुभ अवसरों, धार्मिक आयोजनों और जीवन के महत्वपूर्ण संस्कारों को श्रद्धा, भक्ति एवं सनातन परंपराओं के साथ संपन्न कर सके।

सनातन सेतु केवल धार्मिक सेवाओं का माध्यम नहीं, बल्कि भक्ति, आध्यात्मिक मार्गदर्शन और सनातन संस्कृति से जुड़ने का एक विश्वसनीय सेतु है। </p> <br/>

<button class="buttonbargain" style={{height:"35px", width:"150px", backgroundColor:"brown", borderRadius:"5px"}} onClick={bookpooja}><h3>Bargain and Book</h3> </button>

</div>

        <div className="left"  id="two" ><img class="img3" src={image} alt="none" style={{width:"400", height:"300px", borderRadius:"10px", padding:"20px"}}/></div>

  </div>  



    </div>
    </div></>
  )
}

export default Book
