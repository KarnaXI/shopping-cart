import { Link } from "react-router-dom";
const Header = ({items}) => {
    return (
        <header>

            <div className="header-container">
                <div className="header-wrapper">
                    <div className="logo"><Link to="/shopping-cart/"><h1>Asam's Furniture Store</h1></Link></div>
                    <nav>
                        <Link to="/shopping-cart/">Home</Link>
                        <Link to="/shopping-cart/cart/">Cart</Link>
                    </nav>
                    <div className="cart-icon-container">
                        <Link to="/shopping-cart/cart/">
                        <p className="total-cart-items">{items}</p>
                        <img className="cart-icon" src={require('./images/cart-icon.png')} alt="cart icon"/>
                        </Link>
                        <p className="cart-text">CART</p>

                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;