import '../CSS/AboutUs.css';
import ProductSlider from './ProductSlider';


const AboutUs = () => {

    return (
        <div className="AboutUsContainer ">
            <div className="AboutUsContainerMain flex" >
                <h1 className='AboutUsHeading container'> About FurnitureWala</h1>
                <div className="summaryAboutUs container flex">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam praesentium delectus nulla, officia facere ex ipsum illo? Corporis quae ea soluta quo harum perspiciatis deleniti maiores, laborum quod dignissimos!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam praesentium delectus nulla, officia facere ex ipsum illo? Corporis quae ea soluta quo harum perspiciatis deleniti maiores, laborum quod dignissimos!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam praesentium delectus nulla, officia facere ex ipsum illo? Corporis quae ea soluta quo harum perspiciatis deleniti maiores, laborum quod dignissimos!
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam praesentium delectus nulla, officia facere ex ipsum illo? Corporis quae ea soluta quo harum perspiciatis deleniti maiores, laborum quod dignissimos!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam praesentium delectus nulla, officia facere ex ipsum illo? Corporis quae ea soluta quo harum perspiciatis deleniti maiores, laborum quod dignissimos!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam praesentium delectus nulla, officia facere ex ipsum illo? Corporis quae ea soluta quo harum perspiciatis deleniti maiores, laborum quod dignissimos!
                    </p>
                </div>
                <div className="AboutUsContainerWhatWeOffer container flex">
                    <h2 className="getInTouchContainerHeading">
                        What We Offer
                    </h2>
                    <div className="djfhdksf">
                        <ProductSlider id={'hg'} />

                    </div>
                </div>
                <div className="getInTouchContainer container flex">
                    <h2 className="getInTouchContainerHeading">
                        GET IN TOUCH
                    </h2>
                    <div className="getInTouchContainerAddress flex">
                        <i class="fa-solid fa-location-dot fa-xl qwer"></i>
                        <p> WING-A, Mira Bhayandar Rd, Parshwa Nagar, Geeta Nagar, Mira Road East, Mira Bhayandar, Maharashtra 401107</p>
                    </div>
                    <div className="getInTouchContainerContact flex">
                        <i class="fa-solid fa-phone fa-xl qwer"></i> <p>98765 43210</p>

                    </div>
                    <div className="getInTouchContainerEmail flex">
                        <i class="fa-solid fa-envelope fa-xl qwer"></i>
                        <p>asdh@gmail.com</p>
                    </div>
                    <div className="AboutUsContainerSocial flex">

                        <a href="https://wa.me/91" target="_blank">
                            <span id="Whatsapp"><i class="fa-brands fa-whatsapp fa-xl"></i> </span>
                        </a>
                        <a href="" target="_blank">
                            <span id="fb"><i class="fa-brands fa-facebook-f fa-xl"></i></span>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <span id="insta"><i class="fa-brands fa-instagram fa-xl"></i> </span>
                        </a>

                        <a href="#" target="_blank">
                            <span id="youtube"><i class="fa-brands fa-youtube fa-xl"></i> </span>
                        </a>
                    </div>

                </div>
                

            </div>
        </div>
    );
}

export default AboutUs;