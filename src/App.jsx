import Navbar from './components/Navbar.jsx'

import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Book from './components/Book.jsx';
import Admin from './components/Admin.jsx';
import Gallary from "./components/Gallary.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";

import Explore from "./components/Explore.jsx";


const router= createBrowserRouter(
[

{path:"/",
  
  element:<div>
    <div className="one"> <Navbar/> </div>
       <div className='two'><Hero/></div>
      <Footer/>
  </div>
   
},


{path:"/book",
  element: <div>  
    
  <div className="one"> <Navbar/> </div>
 <div className='two'> <Book/></div>
   <div class="appfooter"> <Footer/> </div>
   </div>
},

{path:"/admin",
  element:<div>
    <div className="one"><Navbar /></div>
     <div className="two"> <Admin/> 
      <Footer/>
       </div></div>
}
,

{path:"/explore",
  element:<div>
    <div className="one"><Navbar /></div>
     <div className="two"> <Explore/> 
      
       </div><Footer/></div>
},





{path:"/gallary",
  element:<div>
    <div className="one"><Navbar /></div>
     <div className="two">  
      <Gallary/>
      
       </div> <Footer/> </div>
}



]);

function App() {
  
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
