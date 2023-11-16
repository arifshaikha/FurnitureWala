import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNav from "./MainNav";
import Homepage from "./HomePage";
import SignUp from "./SignUp";
import SignInn from "./SignInn";
import SinglePro from "./SinglePro";
import ProCardContainer from "./ProCardContainer";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import SubFooter from "./SubFooter";
import Data from "./Data";
import { createContext, useEffect, useState } from "react";
import MyCart from "./MyCart";




export const categoryContext = createContext();
export const singleProductfromProCardContainerContext = createContext();
export const cartContext= createContext();

const Main = () => {

    // context API
    const [category, setCategory] = useState('chair');
    const [subCategory, setSubCategory] = useState(null);
    const [cart, setCart]= useState([]);

    
    const getCategory = (cat,subCat) => {
        
        if(cat!==null)
        {
            setCategory(cat);
            setSubCategory(null);
            // console.log('cate',category)
        }  
        if(subCat!==null)
        {
            setSubCategory(subCat);
            setCategory(null);
            // console.log('Sucate',subCategory)
        } 
       

    }

 
    let [singleProduct, setSingleProduct] = useState(
        // {
        //     "proId": '',
        //     "image": '',
        //     "sImages": '',
        //     "oldPrice": 0,
        //     "newPrice": 0,
        //     "category": '',
        //     "sCategory": '',
        //     "stock": 0,
        //     "title": '',
        //     "description": '',
        //     "specification": '',
        // }
        JSON.parse(sessionStorage.getItem('singlepro'))
    )

    const getSingleProduct = (i) => {
        setSingleProduct(i);
        sessionStorage.setItem('singlepro',JSON.stringify(i));
    }

    const handleCart=(i)=>{
        cart.push(i);
    }
    const removeFromCart=(i)=>{
        let t = cart.filter((x) => x.proId != i.proId );
        setCart(t);
        alert(' product remove')
    }
  

    // End of context API


    let [ProList, setProList] = useState(Data);

    // let [proList_chair, setProList_Chair] = useState();
    // let [proList_table, setProList_Table] = useState();
    // let [proList_wardrobe, setProList_Wardrobe] = useState();
    // let [proList_bed, setProList_Bed] = useState();
    // let [proList_desk, setProList_Desk] = useState();
    // let [proList_bookcase, setProList_Bookcase] = useState();


    // useEffect(() => {
    //     let t = ProList.filter((i) => i.category == "chair");
    //     setProList_Chair(t);
    // }, [])

    // useEffect(() => {
    //     let t = ProList.filter((i) => i.category == "table ");
    //     setProList_Table(t);
    // }, [])

    // useEffect(() => {
    //     let t = ProList.filter((i) => i.category == "bed ");
    //     setProList_Bed(t);
    // }, [])

    // useEffect(() => {
    //     let t = ProList.filter((i) => i.category == "wordrobe");
    //     setProList_Wardrobe(t);
    // }, [])

    // useEffect(() => {
    //     let t = ProList.filter((i) => i.category == "bookcase");
    //     setProList_Bookcase(t);
    // }, [])

    // useEffect(() => {
    //     let t = ProList.filter((i) => i.category == "desk");
    //     setProList_Desk(t);
    // }, [])


    // console.log(proList_chair);
    // console.log(proList_table);
    // console.log(proList_wardrobe);
    // console.log(proList_bed);
    // console.log(proList_desk);
    // console.log(proList_bookcase);


     
    return (
        <div>

            <singleProductfromProCardContainerContext.Provider value={{singleProduct,getSingleProduct}}>
                <categoryContext.Provider value={{ category, subCategory, getCategory }}>
                    <cartContext.Provider value={{cart, handleCart,removeFromCart}}>
                    <BrowserRouter>
                        <MainNav />
                        <Routes>
                            <Route path='/' element={<Homepage />} />
                            <Route path='/signup' element={<SignUp />} />
                            <Route path='/signin' element={<SignInn />} />
                            <Route path='/singleproduct' element={<SinglePro />} />
                            <Route path='/procardcontainer' element={<ProCardContainer data={ProList} />} />
                            <Route path='/aboutUs' element={<AboutUs />} />
                            <Route path='/mycart' element={<MyCart />} />

                        </Routes>
                        <Footer />
                        <SubFooter />
                    </BrowserRouter>
                    </cartContext.Provider>
                </categoryContext.Provider>
            </singleProductfromProCardContainerContext.Provider>
        </div>
    );
}

export default Main;