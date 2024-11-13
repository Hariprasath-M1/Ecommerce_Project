import React from 'react';
import { useNavigate} from 'react-router-dom';
import '../css/Home.css';

const Home = () => {
  const navigate=useNavigate()

  const handleShopNowClick =()=>{
    navigate('./product')
  }
  return (
    <div className="home-container">
      <div className="background-overlay"></div>
      <div className="content">
        <div className="text-section">
          <h1> Nike shoes Collection</h1>
          <h2>New  Collection 2024</h2>
          <p>
            Take Shoe Step In to elegance
            </p><br />
           <button className='shop-button' onClick={handleShopNowClick}>Shop Now <span className='arrow'>&rarr;</span></button>
        </div>
        <div className="image-section">
          <img src="nikecar.png" alt="Collection" />
        </div>
            
      </div>
    </div>
  );
};

export default Home;