import Card from "./Card";
import '../CSS/ProductSlider.css'

const ProductSlider = (props) => {
   

    const handleNext = () => {
      
        let box = document.getElementById(props.id);
        let w = box.clientWidth;
        box.scrollLeft = box.scrollLeft + (w * 0.6);

    }
    const handlePrevious = () => {
       
        let box = document.getElementById(props.id);
        let w = box.clientWidth;
        box.scrollLeft = box.scrollLeft - (w * 0.6);

    }
   

    return (
        <div className='slider_container'>
            

            <button className='pre_btn' onClick={handlePrevious}><p>&lt;</p></button>
            <button className='next_btn' onClick={handleNext}><p>&gt;</p></button>

            <div className="slider_card_container" id={props.id}>
                
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>
        </div>
    )
}
export default ProductSlider;