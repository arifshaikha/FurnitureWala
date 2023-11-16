import { useState } from 'react';
import '../CSS/Nav.css';
import CategoryNav from './CategoryNav';
import { Link } from 'react-router-dom';

const NavMenu = () => {

  let [a, setA] = useState(false);




  return (
    <nav className='tahi'>
      <div className="navbar container flex">
        <div className="leftContainer">
          {/* <img src="" alt="" /> */}
          <Link to='/'><h2 style={{color:'gray'}}>FurnitureWala</h2></Link>
        </div>
        <div className="middleContainer ">
          <div className="searchContainer flex">
            <input type="text" placeholder='Search' />
            <button className='searchIcon'><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
        <div className="rightContainer flex">


          {
            a  ?

              <div className="loginNhihai flex">
                <Link to='/signin'><button className="primarybtn" >Sign In</button></Link>
                <Link to='/signup'><button className="secondarybtn">Sign Up</button></Link>
              </div>
              :
              <div className="loginHai flex">
                <Link to='/mycart'><i class="fa-solid fa-cart-shopping cart" ></i></Link>
                <button className="primarybtn">My Orders</button>
                <button className="secondarybtn" onClick={()=>{setA(!a)}}>Sign Out</button>
              </div>
          }








        </div>
      </div>

        
    </nav>
  );
}

export default NavMenu;

