import '../CSS/SinglePro.css';
import { useContext, useEffect, useState } from 'react';
import { cartContext, singleProductfromProCardContainerContext } from './Main';

const SinglePro = () => {

    const singleProduct = useContext(singleProductfromProCardContainerContext);
    const myCart = useContext(cartContext);
    // let sessionStoragecart;
    // const handleAddToCart=(i)=>
    // {
      
    //     sessionStoragecart=JSON.parse(sessionStorage.getItem('cart'));
    //     sessionStoragecart.push(i);
    //     sessionStorage.setItem("cart", JSON.stringify(sessionStoragecart));

        

    // }

  
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
                        <h2 className='ProductTitleAndPriceTitle'>{singleProduct.singleProduct.data.title}</h2>
                        <h3>
                            <span className='ProductTitleAndPriceNewPrice'> ₹ {singleProduct.singleProduct.data.newPrice}/-</span>
                            <span className='ProductTitleAndPriceOldPrice'><strike>₹ {singleProduct.singleProduct.data.oldPrice}/-</strike></span>
                        </h3>

                    </div>
                    <div className="ProductSpecs">
                        <h2>Product Specification</h2>
                        <p>{singleProduct.singleProduct.data.specification}</p>
                    </div>
                    <div className="ProductDesc">
                        <h2>Product Description</h2>
                        <p>{singleProduct.singleProduct.data.description}</p>

                    </div>
                    <button className='primarybtn addToCart' onClick={() => myCart.handleCart(singleProduct.singleProduct.data)}>Add to Cart</button>
                    {/* <button className='primarybtn addToCart' onClick={() => handleAddToCart(singleProduct.singleProduct.data)}>Add to Cart</button> */}
                </div>
            </div>
        </div>
    );
}

export default SinglePro;