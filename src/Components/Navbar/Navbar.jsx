import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const[menu,setMenu]=useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className="navbar">
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/' >Shop  </Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}} > <Link style={{textDecoration:'none'}} to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link> {menu==="women"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>

      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>

      </div>
      
      </div>
  )
}

// import React, { useState } from 'react';
// import './Navbar.css';
// import logo from '../Assests/logo.png';
// import cart_icon from '../Assests/cart_icon.png';
// import { Link } from 'react-router-dom';

// export const Navbar = () => {
//   const [menu, setMenu] = useState("shop");

//   return (
//     <div className="navbar">
//       <div className='nav-logo'>
//         <img src={logo} alt="Shop Logo" />
//         <p>SHOPPER</p>
//       </div>

//       <ul className='nav-menu'>
//         <li className={menu === "shop" ? "active" : ""} onClick={() => setMenu("shop")}>
//           <Link to='/'>Shop</Link>
//         </li>
//         <li className={menu === "men" ? "active" : ""} onClick={() => setMenu("men")}>
//           <Link to='/men'>Men</Link>
//         </li>
//         <li className={menu === "women" ? "active" : ""} onClick={() => setMenu("women")}>
//           <Link to='/women'>Women</Link>
//         </li>
//         <li className={menu === "kids" ? "active" : ""} onClick={() => setMenu("kids")}>
//           <Link to='/kids'>Kids</Link>
//         </li>
//       </ul>

//       <div className='nav-login-cart'>
//         <Link to='/login'><button>Login</button></Link>
//         <Link to='/cart'>
//           <img src={cart_icon} alt="Cart" />
//           <div className="nav-cart-count">0</div> 
//           {/* Make this dynamic based on cart state */}
//         </Link>
//       </div>
//     </div>
//   );
// };
