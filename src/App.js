
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import ProductsList from "./ProductsList";
import Home from './Home';
import Cart from './Cart';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = useState();
  const [totalCartItems, setTotalCartItems] = useState(0);

  const [categorizedProducts, setCategorizedProducts] = useState([...ProductsList]);

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
    if(cartItems){
      const cartValues = Object.values(cartItems);
      setTotalCartItems(cartValues.reduce((accumulator, theValue) => {
        return accumulator + theValue;
      }, 0))
    }
  }, [cartItems]);

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

  const handleChangeCart = (e) => {
    const newValue = Number(e.target.value.replace(/\D/g, ''));
    setCartItems({...cartItems, [e.target.id]: newValue})
  }

  const renderFilteredItems = (category) => {
    if(category === "ALL"){
      setCategorizedProducts(ProductsList);
    }
    else{
      setCategorizedProducts(ProductsList.filter(product => product.type === category));
    }

  }

  return (
    <Router>
    <div className="App">
      <Header items={totalCartItems}/>
      <Routes>

        <Route exact path="/" element={<Home cartItems={cartItems} filterProducts={renderFilteredItems} productsList={categorizedProducts} handleClick={handleClick} handleChange={handleChange} value={value}/>} />
       
        <Route exact path="/cart" element={<Cart productsList={ProductsList} items={cartItems} handleChange={handleChangeCart} />} />

      </Routes>

      <Footer/>
    </div>
    </Router>

  );
}

export default App;
