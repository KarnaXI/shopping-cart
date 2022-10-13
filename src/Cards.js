const Cards = ({products, handleClick, handleChange, value}) => {
    
    return (
        <div className="products-container">
            {products.map((product) => (
                <div className='card-item' key={product.id}>
                    <img src={product.img} alt={product.name}/>
                    <p>{product.name}</p>
                    <div className="quantity-add-to-cart-container">
                        <input type="number" min="0" id={product.id} name="quantity" value={value[product.id]} onChange={handleChange} />
                        {<button onClick={() => handleClick(product.id)} key={product.id} className="add-to-cart">Add to cart</button>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards;