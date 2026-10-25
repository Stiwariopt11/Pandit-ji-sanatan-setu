import React from 'react';
import "./footer.css"
import logo from "../assets/logo.jpg";
const Footer = () => {
  return (
  
      <div className="parent">

<div id="onebox">
        <div >
            <img id="logo" src= {logo} height="100px" width="200px" alt="none" />
        </div>

         <div id="location">Ghaziabad, Uttar Pradesh, 221309</div>
        
        
        <div id="copright">© ALL RIGHTS RESERVED <br/><br/><br/>
        Dev details: Swayam Prakash Tiwari<br/>
         <a href="mailto:stiwariopt11@gmail.com"> mail</a>
</div></div>

        <div id="twobox" style={{color:"white"}} > <p style={{color:"white"}}>  Contact for any functions and spritual deeds</p>
        <p style={{color:"white"}}>For details visit the given location</p>
        <p style={{color:"white"}}>Pandit Ji Sanatan Setu connects devotees with experienced Pandits for puja,<br/> jaap, havan, and other Sanatan Dharma rituals. Our mission is to make traditional <br/> spiritual services accessible, authentic, and convenient.</p>
        
       <div>
        <br/>
        <ol id="li"><li> Puja & Path</li><li>Griha Pravesh Puja</li><li>Marriage Puja</li><li> Satyanarayan Katha</li><li>Rudrabhishek</li><li>Havan & Jaap</li><li>Online Puja Consultation</li></ol>
        </div></div>
       
       

          <div className="map" >
  <iframe
    title="Location Map"
 src="https://maps.google.com/maps?q=28.563855,77.546944&output=embed"
     width="100%"
    height="200px"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
  />
</div>    
    </div>
  )
}

export default Footer
