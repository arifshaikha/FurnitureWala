
import '../CSS/MainNav.css';
import CategoryNav from './CategoryNav';
import NavMenu from './NavMenu';

const MainNav=()=>{


    // let[category,setCategory]=useState();

    // const getCategory=(i)=>{
    //     setCategory(i);
    // }
    return(
        <nav className='jhj flex'>
            <NavMenu/>
            <CategoryNav  />
        </nav>
    );
}

export default MainNav;