import {useEffect, useState} from 'react'
import emptyCart from '../../assets/empty-cart.png'
import RenderCartItems from '../Global/RenderCartItems';
import {Link, useOutletContext} from 'react-router-dom'

function Cart({position, cartItems, setCartItems}) {

    // const [addToCart] = useOutletContext()


    const [basketTotalPrice, setBasketTotalPrice] = useState(0)
    const [totalItemsInBasket, setTotalItemsInBasket] = useState(0)

    useEffect(() => {
        /* 
            NOTES:
            Filtering items that have a quantity higher than 1 
            in order to not return NaN when displaying total basket price & quantity in basket
        */
       let filteredItemsAboveZero = cartItems.filter(item => item.qty > 0);
        setBasketTotalPrice(filteredItemsAboveZero.reduce((prev, current) => prev + current.price * current.qty, 0))
        setTotalItemsInBasket(filteredItemsAboveZero.reduce((prev, current) => prev + current.qty, 0))
        // console.log(addToCart);
    }, [cartItems])

    return ( 
        <div className={`bg-white fixed top-[48px] ${position} h-[370px] w-screen md:w-[370px] transition-all duration-700 z-50 shadow-lg p-3 overflow-hidden`}>
            {cartItems.length === 0 && <div className='w-full h-full'><img src={emptyCart} alt="empty cart" className='object-cover w-full h-full'/></div>}

            {cartItems.length > 0 && (
                <form action="" className='h-full' onSubmit={(e) => e.preventDefault()}>
                         <div className='h-[65%] overflow-scroll'>
                            <RenderCartItems cartItems={cartItems} setCartItems={setCartItems} />
                            {/* <RenderCartItems /> */}
                         </div>

                        <hr className='my-3 border-black' />

                        <div id="summary" className='flex items-center justify-between'>
                            <span id="basket__qty">{totalItemsInBasket} {totalItemsInBasket > 1 ? <>Items</> : <>Item</>}</span>
                            <span id="total">£{basketTotalPrice.toFixed(2)}</span>
                        </div>

                        {/* <button className='bg-black text-white w-full py-3 mt-[10px]' type='submit'>Checkout</button> */}
                        <Link className='block text-center bg-black text-white w-full py-3 mt-[10px]' to={'/checkout'}>Checkout</Link>
                </form>
            )}
        </div>
    );
}

export default Cart;