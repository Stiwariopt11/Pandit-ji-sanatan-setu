import React from 'react'
import "./Cardshero.css" 
function Cardshero(props) {
  return (
    <div className="cardholder">
      <div className="cards"> 
            <div className="title"> <h2 className="title">{props.title}</h2></div>
            <div><h5 style={{color:"gray", marginLeft:"5px"}}>{props.description}</h5></div>
            <div><p style={{color:"black", padding:"15px"}}>{props.services}</p></div>
          
            
           

      </div>



    </div>
  )
}

export default Cardshero
