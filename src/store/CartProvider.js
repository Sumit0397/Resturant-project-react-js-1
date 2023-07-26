import CartContext from "./cart-context"

const CartProvider = (props) => {

    const addItemToCarthandler = (item) => { };

    const removeItemFromCartHandler = (id) => { };

    const contextData = {
        items: [],
        addItem: addItemToCarthandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={contextData}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider