import React from 'react'
import "./Cardshero.css" 
function Cardshero(props) {
  return (
    <div className="cardholder">
      <div className="cards" style={{display:"flex", flexDirection:"column", gap:"20px"}}> 
            <div> <h2 style={{color:"Brown", marginTop:"10px"}}>{props.title}</h2></div>
            <div><h5 style={{color:"gray", marginLeft:"5px"}}>{props.description}</h5></div>
            <div><b><p style={{color:"black", padding:"15px"}}>{props.services}</p></b></div>
          
            
           

      </div>



    </div>
  )
}

export default Cardshero
