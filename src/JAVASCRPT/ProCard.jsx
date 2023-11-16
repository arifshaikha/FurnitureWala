import { Link } from 'react-router-dom';
import '../CSS/ProCard.css';
import { useContext } from 'react';
import { singleProductfromProCardContainerContext } from './Main';




const ProCard = (props) => {

    const singleProduct=useContext(singleProductfromProCardContainerContext);

    // console.log("kjfsdjf",singleProduct.singleProduct);

    return (

        <Link to='/singleproduct'><div className="mainProCardContainer" onClick={()=>{singleProduct.getSingleProduct(props)}}>
            <div className="ProCardContainer container flex">
                <div className="firstProCardContainer flex">
                    {/* <img src="https://placebear.com/300/300" alt="" /> */}
                    <img src={props.data.image} alt="" />
                </div>
                <div className="secondProCardContainer flex">
                    <div className="secondProCardContainerTitle">
                        <h2>{props.data.title}</h2>
                    </div>
                    <div className="secondProCardContainerDescription">
                        <p>{props.data.description}</p>
                    </div>
                </div>
                <div className="thirdProCardContainer flex">
                    <h3>₹ {props.data.newPrice}</h3>
                    <p className='cutOldPrice'><strike>₹ {props.data.oldPrice}</strike></p>
                    <p>Free Delivery</p>
                </div>
            </div>
        </div>
        </Link>
    );
}

export default ProCard;