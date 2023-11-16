import '../CSS/MyCartTotal.css';
import { useState,useEffect } from 'react';
const MyCartTotal = (props) => {

    const [cartProductList, setCartProductList] = useState(props.cartProductList);

    let [totalPrice, setTotalPrice] = useState(0);
    let [totalDiscountPrice, setTotalDiscountPrice] = useState(0);
    let [finalTotalPrice, setfinalTotalPrice] = useState(0);


    useEffect(() => {
        let price = 0;
        let discount = 0;
        let discountTemp = 0;
        let finalTotalPri = 0;

        cartProductList.map(element => {
            console.log(element.oldPrice, "opps");
            console.log(element.newPrice, "opps");
            price = price + element.oldPrice;
            discountTemp = discountTemp + element.newPrice;

        });

        discount = price - discountTemp;
        finalTotalPri = price-discount;

        setTotalDiscountPrice(discount);
        setTotalPrice(price);
        setfinalTotalPrice(finalTotalPri);


    })





    return (

        <div className="MyCartTotalContainer flex">
            <h3 className="MyCartTotalContainerPriceDetail">
                PRICE DETAILS
            </h3>
            <div className="MyCartTotalContainerMiddle">
                <div className="flex MyCartTotalContainerMiddle1">
                    <h4>Price</h4><p>{totalPrice}</p>
                </div>
                <div className="flex MyCartTotalContainerMiddle1">
                    <h4>Discount</h4><p>{totalDiscountPrice}</p>
                </div>
                <div className="flex MyCartTotalContainerMiddle1">
                    <h4>Delivery</h4><p>Free</p>
                </div>
            </div>

            <div className="MyCartTotalContainerTotalAmount">
                <div className="flex MyCartTotalContainerTotalAmount1">
                    <h4>Total Amount</h4><p>{finalTotalPrice}</p>
                </div>
            </div>
            <button className='secondarybtn'>Check Out</button>

        </div>
    )
}

export default MyCartTotal;