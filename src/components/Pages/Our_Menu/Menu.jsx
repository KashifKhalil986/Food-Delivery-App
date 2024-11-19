import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../../assets/menu/burger-11.jpg';
import Image2 from '../../../assets/menu/burger-12.jpg';
import Image3 from '../../../assets/menu/burger-13.jpg';
import Image4 from '../../../assets/menu/burger-14.jpg';
import Image5 from '../../../assets/menu/burger-15.jpg';
import Image6 from '../../../assets/menu/burger-16.jpg';
import Image7 from '../../../assets/menu/burger-17.jpg';
import Image8 from '../../../assets/menu/burger-18.jpg';
import MenuModal from './MenuModal';

const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Crispy Chicken",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    price: 'Rs 399',
  },
  {
    id: "0002",
    image: Image2,
    title: "Ultimate Bacon",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 'Rs 599',
  },
  {
    id: "0003",
    image: Image3,
    title: "Black Sheep",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 4,
    price: 'Rs 699',
  },
  {
    id: "0004",
    image: Image4,
    title: "Vegan Burger",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 'Rs 400',
  },
  {
    id: "0005",
    image: Image5,
    title: "Double Burger",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    price: 'Rs 750',
  },
  {
    id: "0006",
    image: Image6,
    title: "Turkey Burger",
    paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 3,
    price: 'Rs 599',
  },
  {
    id: "0007",
    image: Image7,
    title: "Smokey House",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 'Rs 600',
  },
  {
    id: "0008",
    image: Image8,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 'Rs 450',
  },
];

const Menu = () => {
  const [selectedBurger, setSelectedBurger] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClick = (burger) => {
    setSelectedBurger(burger);
    setIsModalOpen(true);
  };

  const handleOnClose = () => {
    setIsModalOpen(false);
    setSelectedBurger(null);
  };

  return (
    <div>
      <div className="card text-center  border-0 mt-5">
        <div className="card-body">
          <h5 className="card-title text-danger fs-1 mt-5">OUR CRAZY BURGERS</h5>
          <p className="card-text w-75 mx-auto">
            Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna
          </p>
        </div>
      </div>

      <div className="row g-0 ms-auto ps-5 ">
        {mockData.map((item, index) => (
          <div className="col-md-3 my-2" key={index}>
            <div className="card" style={{ width: '16rem' }}>
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.paragraph}</p>
                <a href="#" className="btn btn-danger">{item.price}</a>
                <button onClick={() => handleOnClick(item)} className="btn btn-danger mx-2">ORDER NOW</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <MenuModal show={isModalOpen} close={handleOnClose} burger={selectedBurger} />
    </div>
  );
};

export default Menu;
