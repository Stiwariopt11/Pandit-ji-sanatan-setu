import React from 'react'
import "./Explore.css"
import palmistry from "../assets/palmistry.png";
import kundalivdo from "../assets/kundalimatch.mp4";
const Explore = () => {

  function showpalm() {
   window.open("https://forms.gle/iKC5grjMYqJKgbYU9")
}
  return (
    <div className="explorecontainer">
      <div className="palmimg">
        <img className="imgpalm" src={palmistry} alt="none" height="500px" width="100%"/>
      </div>

    <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>

<br/><br/>
      <h1 style={{display:"flex", justifyContent:"center", color:"black"}}>  Discover What Your Palm Reveals</h1>  <br/> <br/>

<h2 style={{display:"flex", justifyContent:"center"}}>Your hands tell a story || Discover its traditional meaning with Hast Rekha Vidya.</h2> <br/><br/>



<div className="buttonkadiv" style={{display:"flex", justifyContent:"center", color:"black"}}> 
  
  <button id="buttonkadabba" onClick={showpalm}><h3>show kundali to pandit jee</h3></button> 
  </div>


  <h1 style={{display:"flex", justifyContent:"center", color:"brown", marginTop:"50px"}}> Match Kundalis for Marriage</h1>
<div className="kundalimatch"> 
 

<div className="kundalimatchvdo"> 
  <video id="vdomatch" src={kundalivdo} autoPlay playsInline loop height="300px"/>
</div>

<button id="buttonkadabba" class="copiedbutton" onClick={showpalm}><h3>Test your faith</h3></button> 
<div className="panditdetails">
<p> 
<h1> परम श्रद्धेय पंडित जी के सानिध्य में कुंडली मार्गदर्शन</h1> <br/>
<p>परम श्रद्धेय पंडित जी के मार्गदर्शन में अपनी जन्म कुंडली का गहन अध्ययन कराएँ और वैदिक ज्योतिष के माध्यम से अपने जीवन के विभिन्न पहलुओं को समझें। जन्म कुंडली में ग्रहों की स्थिति, राशियों एवं नक्षत्रों के आधार पर जीवन, करियर, विवाह, पारिवारिक सुख और भविष्य से जुड़े पारंपरिक ज्योतिषीय मार्गदर्शन प्राप्त करें।</p>
</p>
</div>
</div>
<br/> <br/>

    </div > <h2 style={{color:"brown"}}>1️⃣ The Ancient Science of Kundali</h2>
    <p className='ptext'>Janam Kundali, also known as Vedic Birth Chart, is an ancient system of Indian astrology based on the date, time, and place of birth. Rooted in Vedic traditions, it represents the positions of celestial bodies at the time of birth and offers traditional insights into personality, life events, and important life decisions..</p><br/>
    
    <h2 style={{color:"brown"}}> 2️⃣  Discover the Secrets of Your Birth Chart</h2>

    <p className='ptext'>Your Janam Kundali is a unique map of the heavens at the moment of your birth. It consists of twelve houses, each associated with different aspects of life, including personality, wealth, family, education, career, relationships, and spirituality.</p><br/>

    <h2 style={{color:"brown"}}> 3️⃣ The Influence of Planets and Zodiac Signs</h2>
    <p className='ptext' >In Vedic astrology, the nine Grahas and twelve Rashis play an important role in interpreting a birth chart. Their positions and relationships are traditionally associated with different aspects of life, helping astrologers understand planetary influences and individual characteristics.</p><br/>

     <h2 style={{color:"brown"}}> 4️⃣ Understanding the Twelve Houses of Your Kundali</h2>
     <p className='ptext'>Each of the twelve houses in a Janam Kundali represents a specific area of life. From career and financial prospects to marriage, health, family, and spiritual growth, these houses are interpreted alongside planetary positions to provide a comprehensive astrological reading.</p><br/>
   
   <h2 style={{color:"brown"}}> 5️⃣ Your Journey Through Vedic Astrology</h2>
   <p className='ptext'>Explore the ancient wisdom of Vedic astrology through your Janam Kundali. Understand the traditional significance of planetary positions, discover astrological perspectives on career and relationships, and seek guidance from experienced astrologers for greater clarity on your life’s journey.</p><br/> <br/><br/>
    </div> 
  )
}

export default Explore
