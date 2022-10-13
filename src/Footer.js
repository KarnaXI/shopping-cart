import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </footer>
    )
}

export default Footer;