import { Link } from 'react-router-dom';
import '../CSS/Footer.css';

const Footer = () => {
    return (

        <div className="footerConatiner">
            <footer className='container'>
                <div className="upperFooter flex">
                    <div className="upperFirst flex">
                        {/* <img src="" alt="" /> */}
                        <Link to='/'> <h2 style={{ color: 'gray' }}>FurnitureWala</h2></Link>
                    </div>
                    <div className="upperSecond flex">
                        <Link to='/'> <p className=''>Home</p></Link>
                        <Link to='/'> <p className=''>Contact Us</p></Link>
                        <Link to='/aboutUs'> <p className=''>About Us</p></Link>
                    </div>
                    <div className="upperThird flex">
                        <h4>Shop</h4>
                        <Link to='/'> <li>Chair</li></Link>
                        <Link to='/'><li>Table</li></Link>
                        <Link to='/'><li>Wordrobe</li></Link>
                        <Link to='/'><li>Bed</li></Link>
                        <Link to='/'><li>Desk</li></Link>
                        <Link to='/'><li>Bookcase</li></Link>
                    </div>
                </div>
                <div className="lowerFooter flex">
                    <div className="lowerFooterLeft">
                        <p>Address : WING-A, Mira Bhayandar Rd, Parshwa Nagar, Geeta Nagar, Mira Road East, Mira Bhayandar, Maharashtra 401107</p>
                    </div>
                    <div className="lowerFooterRight flex">
                        <a href="tel: +91">
                            <span id="mobile"><i class="fa-solid fa-phone fa-lg"></i> </span>
                        </a>
                        <a href="https://wa.me/91" target="_blank">
                            <span id="Whatsapp"><i class="fa-brands fa-whatsapp fa-lg"></i> </span>
                        </a>
                        <a href="" target="_blank">
                            <span id="fb"><i class="fa-brands fa-facebook-f fa-lg"></i></span>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <span id="insta"><i class="fa-brands fa-instagram fa-lg"></i> </span>
                        </a>
                        <a href="mailto:#" target="_blank">
                            <span id="Gmail"><i class="fa-regular fa-envelope fa-lg"></i> </span>
                        </a>
                        <a href="#" target="_blank">
                            <span id="youtube"><i class="fa-brands fa-youtube fa-lg"></i> </span>
                        </a>
                    </div>
                </div>
            </footer>
        </div>


    );

}

export default Footer;