import { Link } from 'react-router-dom';
import '../CSS/CategoryNav.css';
import { useState, useContext, useEffect } from 'react';
import { categoryContext } from './Main';


const CategoryNav = (props) => {

    //  Functions for DropDown
    function Open(list, id) {
        document.getElementById(list).style.height = "150px";
        document.getElementById(id).style.rotate = '180deg';

    }
    function Close(list, id) {
        document.getElementById(list).style.height = "0px";
        document.getElementById(id).style.rotate = '0deg';

    }

    const cateContext=useContext(categoryContext);

    
    
    return (
        <div className='subNav'>
          
            <div className="sabNavContainer container flex">
                <div className='chairDiv' >

                    <button id='wer' className="cate"
                        // onClick={()=>cateContext.getCategory("chair")}
                        onMouseEnter={() => Open('chairList', 'chairId')}
                        onMouseLeave={() => Close('chairList', 'chairId')}>Chair  <i id='chairId' class="fa-solid fa-arrow-down arrow" ></i>

                    </button>
                    <ul id='chairList' onMouseEnter={() => Open('chairList', 'chairId')}
                        onMouseLeave={() => Close('chairList', 'chairId')}
                        onClick={() => Close('chairList', 'chairId')}>
                        <Link to='/procardcontainer'><li onClick={()=>cateContext.getCategory(null,'Stool')}>Stool</li></Link>
                        <Link to='/procardcontainer'><li onClick={()=>cateContext.getCategory(null,'Arm Chair')}>Arm Chair</li></Link>
                        <Link to='/procardcontainer'><li onClick={()=>cateContext.getCategory(null,'Dinning Chair')}>Dinning Chair</li></Link>
                        <Link to='/procardcontainer'><li onClick={()=>cateContext.getCategory('chair',null)}>Chairs</li></Link>
                    </ul>
                </div>
                <div className='tableDiv' >
                    <button className="cate"

                        onMouseEnter={() => Open('tableList', 'tableId')}
                        onMouseLeave={() => Close('tableList', 'tableId')}>Table  <i id='tableId' class="fa-solid fa-arrow-down arrow" ></i>

                    </button>
                    <ul id='tableList' onMouseEnter={() => Open('tableList', 'tableId')}
                        onMouseLeave={() => Close('tableList', 'tableId')}
                        onClick={() => Close('tableList', 'tableId')}>
                        <Link to='/procardcontainer'><li onClick={()=>cateContext.getCategory(null,'FoldingTable')}>Folding Table</li></Link>
                        <Link to='/procardcontainer'><li onClick={()=>cateContext.getCategory('table ',null)}>Tables</li></Link>
                    </ul>
                </div>
                <div onClick={()=>cateContext.getCategory('wordrobe',null)}>
                    <Link to='/procardcontainer'><button className="cate">Wardrobe</button></Link>
                </div>
                <div className='bedDiv' >
                    <button className="cate"

                        onMouseEnter={() => Open('bedList', 'bedId')}
                        onMouseLeave={() => Close('bedList', 'bedId')}>Bed  <i id='bedId' class="fa-solid fa-arrow-down arrow" ></i>

                    </button>
                    <ul id='bedList' onMouseEnter={() => Open('bedList', 'bedId')}
                        onMouseLeave={() => Close('bedList', 'bedId')}
                        onClick={() => Close('bedList', 'bedId')}>
                        <Link to='/procardcontainer'><li onClick={()=>cateContext.getCategory(null, 'SofaBed')}>Sofa Bed</li></Link>
                        <Link to='/procardcontainer'><li onClick={()=>cateContext.getCategory('bed ',null)}>Beds</li></Link>
                    </ul>
                </div>
                <div onClick={()=>cateContext.getCategory('desk',null)}>
                    <Link to='/procardcontainer'> <button className="cate">Desk</button></Link>
                </div>
                <div onClick={()=>cateContext.getCategory('bookcase',null)}>
                    <Link to='/procardcontainer'> <button className="cate">Bookcase</button></Link>
                </div>
            </div>

        </div>
    );
}

export default CategoryNav;