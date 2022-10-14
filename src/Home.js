import Cards from "./Cards";

const Home = ({productsList, value, handleClick, handleChange, filterProducts}) => {
    const products = productsList;

    return(
        <div className="app-wrapper">
            
            <div className="sidebar">
                <h2>PRODUCTS</h2>
                <p onClick={() => filterProducts("SOFA")}>SOFAS</p>
                <p onClick={() => filterProducts("BED")}>BEDS</p>
                <p onClick={() => filterProducts("TABLE")}>TABLES</p>
                <p onClick={() => filterProducts("ALL")}>ALL</p>
            </div>
            <Cards products={products} handleClick={handleClick} handleChange={handleChange} value={value} />
      </div>
    )
}

export default Home;