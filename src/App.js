
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import ProductsList from "./ProductsList";
import Home from './Home';
import Cart from './Cart';

function App() {
  const [cartItems, setCartItems] = useState();

  const [value, setValue] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
  });

  useEffect(()=>{
    // console.log(value);
    // console.log(cartItems);
  }, [value, cartItems]);

  const handleClick = (id) => {
    let quantityToAdd = (value[id]);
    if(cartItems && cartItems[id]){
      quantityToAdd = cartItems[id] + quantityToAdd;
    }
    setCartItems({...cartItems, [id]: quantityToAdd})
    setValue({...value,[id]: 0});
  }

  const handleChange = (e) => {
    const newValue = Number(e.target.value.replace(/\D/g, ''));
    setValue({...value,[e.target.id]: newValue});
  }

  return (
    <div className="App">
      <Header/>
      <Home cartItems={cartItems} productsList={ProductsList} handleClick={handleClick} handleChange={handleChange} value={value}/>
      <Cart productsList={ProductsList} items={cartItems}/>
      
      <Footer/>
    </div>

  );
}

export default App;
