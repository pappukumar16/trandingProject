import React from 'react'
import {NavLink} from "react-router-dom"
import "./Navbar.css"
function Navbar() {
  return (
    <div>
       
 <ul>     
<div>
<li >
  <div className='ml-2' >
    <NavLink to="/">
        <img height={30} width={100} src='https://imgs.search.brave.com/HK7m0UuqcStjSii0Pi7TPieuEze8QRib1Eb8wpd4NtU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzAx/L0ljb24tT25seWZh/bnMtTG9nby01MDB4/MjgxLnBuZw'/>
    </NavLink>
  </div>
  </li>
  </div>
   


<div>
   <li className='rounded-sm hover:bg-slate-200 '>
    <NavLink to="/About">
    <span>About</span>
    </NavLink>
    </li>


   <li className='rounded-sm hover:bg-slate-200 '>
    <NavLink to="/Contact">
    <span>Contact</span>
    </NavLink>
    </li>


   <li className='rounded-sm hover:bg-slate-200 '>
    <NavLink to="/Project">
    <span>Project</span>
    </NavLink>
</li>
</div>



 </ul>
    </div>
  )
}

export default Navbar