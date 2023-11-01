// import CategoryNav from "./CategoryNav";
import ProductSlider from "./ProductSlider";
import Slider from "./Slider";
import SummarySection from "./SummarySection";
import '../CSS/HomePage.css'


const Homepage = () => {
    return (
        <div className="homePage" id="homepageId">
            
            <Slider/>
            <SummarySection ord={'reverse'} />
            <SummarySection  />
            <SummarySection ord={'reverse'} />
            <SummarySection  />
            <SummarySection ord={'reverse'} />
            <ProductSlider id={"asd"} />
        </div>
    );
}

export default Homepage;