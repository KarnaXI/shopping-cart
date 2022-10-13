
const Cart = ({productsList, items}) => {
    // console.log(items);
    // console.log(typeof(productsList));


    return (
        <div>
            { items ? 
            productsList.map((product) =>(console.log(product))) : null }
        </div>
    )
}

export default Cart;