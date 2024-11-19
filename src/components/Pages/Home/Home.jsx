import React from 'react';
import Hero from '../../../assets/hero/hero-2.png';
import HeroBg from '../../../assets/hero/hero-1.jpg';
import Price from '../../../assets/hero/price.png';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        paddingTop:'37px'
      
      }}
    >
      <div className="row pt-5" >
       
        <div className="col-md-6 ms-5 mt-5 position-relative">
          <img
            src={Hero}
            alt="Hero"
            className="img-fluid"
            style={{ width: '40vw' }}
          />
      <img
  src={Price}
  alt="Price"
  className="position-absolute"
  style={{
    right: '23%',
    width: '15vw', 
    maxWidth: '130px', 
  }}
/>
<p
  className="text-black position-absolute fw-bold"
  style={{
    top: '5vh',
    right: '27%',
    fontSize: 'clamp(1.5rem, 2vw, 1.5rem)', 
  }}
>
  ONLY
  <span className="d-block">Rs 499</span>
</p>

        </div>

        {/* Text Column */}
        <div className="col-md-4 text-white mt-5">
          <h1>
            <span className="ms-5 fw-bold">NEW</span>
            <span className="ms-3 fw-bold d-block">BURGER</span>
          </h1>
          <h3 className="ms-4 fw-bold">WITH ONION</h3>
          <p className="me-1 col-md-8">
            Lorem ipsum dolor sit amet consectetur, Earum molestiae sdf saew wewe totam possimus totam possimus perferendis?
          </p>
          <Link to="/Menu" className="btn btn-warning ms-5">Explore Full Menu</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
