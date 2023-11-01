
import '../CSS/Card.css';

const Card = () => {

    return (
        <div>
            <div className="cardContainer flex">
                <div className="upperCardContainer flex">
                    <img src="../Assests/furniturePhotos/1.jpeg" alt="" />
                </div>
                <div className="lowerCardContainer flex">
                    <div className="leftlowerCardContainer flex">
                        <span className='des'>Lorem ipsum dolor sit amet consectetur?</span>
                    </div>
                    <div className="rightlowerCardContainer flex">
                        <button className='secondarybtn'>More...</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Card;