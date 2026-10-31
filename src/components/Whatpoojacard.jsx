import React from 'react'
import"./Whatpoojacard.css";
const Whatpoojacard = (props) => {

function colordim(e) {
  

  const a = document.querySelector(`.${props.scrol}`);

  
    // a.style.backgroundColor = "gray";
    
  
}




  return (
    <div >
      <div className="detailincard" style={{ height:"200px", width:"350px", backgroundImage:`url(${props.image})`, backgroundSize: "cover",

  backgroundPosition: "center",

  backgroundRepeat: "no-repeat", shadow:"5px 5px 10px black", borderRadius:"20px", boxShadow:"5px 5px 8px orange ", position:"relative" }}>
       
        
        <div className="detailpart" style={{ height:"90px", width:"100%", backgroundColor:"white", position:"absolute", zIndex:"0", bottom:"0", borderRadius:"10px", border:"1px solid orange"}}>

        <h2>{props.heading}</h2>
        <div style={{display:"flex"}}>

          <div><p style={{marginLeft:"10px"}}>{props.desc}</p></div>

          <div  style={{marginLeft:"10px"}}> <a href={`#${props.scrol}`} onClick={colordim}>  <button style={{height:"20px", width:"50px", backgroundColor:"green", borderRadius:"9px", cursor:"pointer"}}>explore</button> </a> </div>
          </div>
        </div>
         </div>

    </div> 
  )
}

export default Whatpoojacard
