import { Link } from "react-router-dom";

// const Footer = () => {
//     return (
//         <footer>
//             <nav>
//                 <Link to="/">Home</Link>
//                 <Link to="/cart">Cart</Link>
//             </nav>
//         </footer>
//     )
// }

// export default Footer;

const Footer = ({items}) => {
    return (
        <footer>

            <div className="header-container">
                <div className="header-wrapper">
                    <div className="logo"><Link to="/"><h1>Asam's Furniture Store</h1></Link></div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/cart">Cart</Link>
                    </nav>
                    <div className="cart-icon-container">
                        <Link to="/cart">
                        <p className="total-cart-items">{items}</p>
                        <img className="cart-icon" src={require('./images/cart-icon.png')} alt="cart icon"/>
                        </Link>
                        <p className="cart-text">CART</p>

                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;