import React from 'react'
import "./Admin.css"
import hand from "../assets/hand.png"
const Admin = () => {
  return (
    <div className='admincontainer' style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"30px" }}>
      <div id="haath">
      <img  src={hand} alt="none" height="600px" />
      </div>
<div className="handbutton">
  <div className="partone">
<button> Hriday Rekha</button> <button>Yatra Rekha</button> <button>Jeevan Rekha</button> <button>Bhagya Rekha</button> <button>Bhagya Rekha</button></div>

<div className="parttwo">
<button>Vivah Rekha</button> <button>Mastisk Rekha</button> <button>Swasthya Rekha</button> <button>Madibandh Rekhaye</button> </div>
</div>








<div className="overlays">
<div className="madiband1"></div>
<div className="madiband2"></div>
<div className="jeevan"></div>
<div className="swasthya"></div>
<div className="mastisk"></div>

</div>
    </div>



  )
}

export default Admin
