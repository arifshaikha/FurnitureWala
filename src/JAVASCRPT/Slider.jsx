import '../CSS/Slider.css';
import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  overflow:'hidden'
  
};
const contentStyleImg={
    width:'100%',
    
};
const Slider = () => (
  <Carousel style={contentStyle} autoplay>
    <div>
        <img src="../Assests/1.jpg" alt="" style={contentStyleImg}/>
      
    </div>
    <div>
        <img src="../Assests/2.webp" alt="" style={contentStyleImg}/>
      
    </div>
    <div>
        <img src="../Assests/3.webp" alt="" style={contentStyleImg}/>
      
    </div>
    <div>
        <img src="../Assests/4.jpg" alt="" style={contentStyleImg}/>
      
    </div>
    <div>
        <img src="../Assests/5.webp" alt="" style={contentStyleImg}/>
      
    </div>
    
  </Carousel>
);
export default Slider;