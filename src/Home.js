import Cards from "./Cards";

const Home = ({productsList, value, handleClick, handleChange, filterProducts}) => {
    const products = productsList;

    return(
        <div className="app-wrapper">
            
            <div className="sidebar">
                <h2>Products</h2>
                <p onClick={() => filterProducts("SOFA")}>Sofas</p>
                <p onClick={() => filterProducts("BED")}>Beds</p>
                <p onClick={() => filterProducts("TABLE")}>Tables</p>
                <p onClick={() => filterProducts("ALL")}>All</p>
            </div>
            <Cards products={products} handleClick={handleClick} handleChange={handleChange} value={value} />
      </div>
    )
}

export default Home;