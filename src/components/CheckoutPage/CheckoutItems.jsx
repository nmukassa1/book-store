import RenderCartItems from "../Global/RenderCartItems";

function CheckoutItems({cartItems, setCartItems}) {
    return ( 
        <div id="checkout-items">
             <RenderCartItems cartItems={cartItems} setCartItems={setCartItems} />
        </div>
     );
}

export default CheckoutItems;