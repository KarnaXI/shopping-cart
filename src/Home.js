import Cards from "./Cards";

const Home = ({productsList, value, handleClick, handleChange}) => {
    const products = productsList;

    return(
        <div className="app-wrapper">
            <h1>Products</h1>
            <div className="sidebar">
                <p>Sofas</p>
                <p>Beds</p>
                <p>Tables</p>
            </div>
            <Cards products={products} handleClick={handleClick} handleChange={handleChange} value={value} />
      </div>
    )
}

export default Home;