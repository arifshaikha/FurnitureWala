import '../CSS/SinglePro.css';
import { useContext, useEffect, useState } from 'react';
import { singleProductfromProCardContainerContext } from './Main';

const SinglePro = () => {

    const singleProduct = useContext(singleProductfromProCardContainerContext);

    // let [oneProduct, setOneProduct] = useState();
    // useEffect(() => {
    //     setOneProduct(singleProduct.singleProduct);
    //     console.log('[][][]][]][][]',oneProduct)
    // }, [singleProduct.singleProduct])

    return (
        <div className="SingleProMainContainer">
            <div className="SingleProMain flex">
                <div className="leftSingleProMain flex">
                    <img src={singleProduct.singleProduct.data.image} alt="" />
                </div>
                <div className="rightSingleProMain flex">
                    <div className="ProductTitleAndPrice">
                        <h2>{singleProduct.singleProduct.data.title}</h2>
                        <h3>₹ {singleProduct.singleProduct.data.newPrice}/-  <span><strike>₹ {singleProduct.singleProduct.data.oldPrice}/-</strike></span></h3>

                    </div>
                    <div className="ProductSpecs">
                        <h2>Product Specification</h2>
                        <p>{singleProduct.singleProduct.data.specification}</p>
                    </div>
                    <div className="ProductDesc">
                        <h2>Product Description</h2>
                        <p>{singleProduct.singleProduct.data.description}</p>

                    </div>
                    <button className='primarybtn addToCart'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default SinglePro;