const Cart = ({productsList, items, handleChange}) => {

    function filterProducts(){
        if(items){
            let filteredList = productsList.filter(product => items[product.id]);
            filteredList.map(item => {
                if(items[item.id]){
                    item.quantity = items[item.id];
                }
                return item;
            })
            return filteredList;
        }
    }

    function getCartTotal(){
        let cartTotal = filterProducts().map( product => product.quantity * product.price);
        cartTotal = (cartTotal.reduce((previousValue, currentValue) => previousValue + currentValue));
        if (cartTotal > 10000 && cartTotal < 100000){
            cartTotal = cartTotal.toString()
            cartTotal = cartTotal.slice(0, 2) + "," + cartTotal.slice(2);
        }
        if (cartTotal > 100000 && cartTotal < 1000000){
            cartTotal = cartTotal.toString()
            cartTotal = cartTotal.slice(0, 3) + "," + cartTotal.slice(3);
        }
        if (cartTotal > 1000000){
            cartTotal = cartTotal.toString()
            cartTotal = cartTotal.slice(0, 1) + "," + cartTotal.slice(1, 4) + "," + cartTotal.slice(4);
        }
        
        return cartTotal
    }

    return ( 
        <div className="cart-container">
            <h1>My Cart</h1>
            {!items && <div className="cart-empty">No items added to cart</div>}
            <table className="cart-table">
                <thead>
                    <tr className="cart-header">
                        <th className="cart-first-column">SKU</th>
                        <th className="cart-second-column">Image</th>
                        <th className="cart-third-column">Product</th>
                        <th className="cart-fourth-column">Price</th>
                        <th className="cart-fifth-column">Qty</th>
                        <th className="cart-sixth-column">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {items && filterProducts().map((product) =>(
                        <tr className="cart-item" key={product.id}>
                            <td className="cart-item-first-column">{product.sku}</td>
                            <td className="cart-item-second-column"><img className="cart-image" src={product.img} alt={product.name}/></td>
                            <td className="cart-item-third-column">{product.name} {product.type}</td>
                            <td className="cart-item-fourth-column">${product.price}</td>
                            <td className="cart-item-fifth-column"><input className="cart-quantity" type="number" min="0" id={product.id} name="quantity" defaultValue={product.quantity} onChange={handleChange} /></td>
                            <td className="cart-item-sixth-column">${product.price*product.quantity}</td>
                        </tr>
                    ) )}
            
                </tbody>
            </table>
            {items && <div className="cart-total" key={5184}>
               Total: ${getCartTotal()}
                </div>}
    

        </div>
    )
}

export default Cart;