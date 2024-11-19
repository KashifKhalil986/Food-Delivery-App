import React from 'react';
import Pizza from '../../../assets/about/pizza.png';
import Salad from '../../../assets/about/salad.png';
import Delivery from '../../../assets/about/delivery-bike.png';
import bdImg from '../../../assets/about/about-1.jpg';
import { Link } from 'react-router-dom';


const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Porta semper auctor lacinia cubilia curae integer orci congue and metus integer primis in integer metus.`,
  },
  {
    image: Salad,
    title: "Quality Foods",
    paragraph: `Porta semper auctor lacinia cubilia curae integer orci congue and metus integer primis in integer metus.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Porta semper auctor lacinia cubilia curae integer orci congue and metus integer primis in integer metus.`,
  },
];

const About = () => {
  return (
    <>
   
      <div>
        
        {/* First Card */}
        <div className="card text-center border-0 mt-5">
          <div className="card-body mt-5">
            <h5 className="card-title">The burger tastes better when you eat it with your family</h5>
            <p className="card-text w-75 mx-auto">
              Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor
              lacinia cubilia curae integer orci congue and metus integer primis in integer metus Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Commodi, sed.
            </p>
            <Link to="/menu" className="btn btn-danger">Explore Full Menu</Link>
          </div>
        </div>

        {/* Background Image Section */}
        <div
          className="bg-image mt-3"
          style={{
            backgroundImage: `url(${bdImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '300px', // Adjust the height as needed
            width: '100%',
          }}
        ></div>

        {/* Second Row of Cards */}
        <div className="row justify-content-center bg-warning w-100">
          {mockData.map((item, index) => (
            <div className="col-md-3 bg-warning" key={index}>
              <div className="card border-0 mx-5 bg-warning mx-auto mt-5" style={{ width: '15rem' }}>
                <img className="card-img-top mx-auto" src={item.image} alt={item.title} style={{ width: '8rem' }} />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
