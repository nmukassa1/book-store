import {useState, useEffect} from 'react'
import { useOutletContext } from 'react-router-dom';
import '../scss/dist/styles.css'
import CheckoutSummary from '../components/CheckoutPage/CheckoutSummary';
import CheckoutItems from '../components/CheckoutPage/CheckoutItems';


function Checkout() {

    const [basketTotalPrice, setBasketTotalPrice] = useState(0)

    const [, cartItems, setCartItems] = useOutletContext()

    useEffect(() => {
        /* 
            NOTES:
            Filtering items that have a quantity higher than 1 
            in order to not return NaN when displaying total basket price & quantity in basket
        */
        let filteredItemsAboveZero = cartItems.filter(item => item.qty > 0);
        setBasketTotalPrice(filteredItemsAboveZero.reduce((prev, current) => prev + current.price * current.qty, 0))
        // console.log(cartItems);
    }, [cartItems])

    return ( 
        <div id="checkout-page" className="h-full px-8">
            <h1 id="checkout-page-title" className="py-10 text-2xl text-center">Checkout</h1>

            <div className="checkout-page__container">
                <CheckoutItems cartItems={cartItems} setCartItems={setCartItems} />
                <CheckoutSummary basketTotalPrice={basketTotalPrice} />
            </div>
        </div>
     );
}

export default Checkout;