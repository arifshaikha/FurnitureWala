import './App.css';
import Homepage from './JAVASCRPT/HomePage';
import Footer from './JAVASCRPT/Footer';
import SubFooter from './JAVASCRPT/SubFooter';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './JAVASCRPT/SignUp';
import SignInn from './JAVASCRPT/SignInn';
import ProCardContainer from './JAVASCRPT/ProCardContainer';
import MainNav from './JAVASCRPT/MainNav';
import SinglePro from './JAVASCRPT/SinglePro';
import AboutUs from './JAVASCRPT/AboutUs';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>

      <BrowserRouter>

        <MainNav />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignInn />} />
          <Route path='/singleproduct' element={<SinglePro />} />
          <Route path='/procardcontainer' element={<ProCardContainer />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          {/* <Homepage /> */}
          {/* <ProCardContainer /> */}
          {/* <SignUp /> */}
          {/* <SignInn /> */}
          {/* <SinglePro /> */}
          {/* <AboutUs /> */}

        </Routes>

        <Footer />
        <SubFooter />
      </BrowserRouter>





    </div>
  );
}

export default App;
