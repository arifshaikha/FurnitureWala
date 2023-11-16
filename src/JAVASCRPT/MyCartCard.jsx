
import '../CSS/MyCartCard.css';

const MyCartCard = (props) => {

    
    return (

        <div className="MyCartCardContainer flex">
            <div className="MyCartCardContainerleft flex">
                <img src={props.pro.image} alt="" />
            </div>
            <div className="MyCartCardContainermiddle flex">

                <h4 className='MyCartCardContainermiddleTitle'>
                  {props.pro.title}
                </h4>
                <p>{props.pro.newPrice} <span>{props.pro.oldPrice}</span></p>
            </div>
            <div className="MyCartCardContainerright flex">
                <button className='removefromcartbtn' onClick={()=>props.fun(props.pro)}><i class="fa-solid fa-x"></i></button>

            </div>
        </div>
    )
}

export default MyCartCard;