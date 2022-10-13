
const Cart = ({productsList, items}) => {

    function filterProducts(){
        if(items){
            let filteredList = productsList.filter(product => items[product.id]);
            console.log("filtered list: ",filteredList)
            filteredList.map(item => {
                if(items[item.id]){
                    item.quantity = items[item.id];
                }
                return item;
            })
            return filteredList;
        }
    }


    return ( 
        <div className="cart-container">
            {items && filterProducts().map((product) =>(
                <div className="cart-item" key={product.id}>{product.id}</div>
            ) )}
            {!items && <div className="cart-empty">No items found</div>}

        </div>
    )
}

export default Cart;