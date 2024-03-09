import {useState, useEffect} from 'react'
import {Outlet, useLocation} from 'react-router-dom'

import Header from './components/Global/Header'
import Cart from './components/Global/Cart'

import useScrollToTop from './Hooks/useScrollToTop';

function RootLayout() {
    
    const location = useLocation()
    const {scrollToTop} = useScrollToTop()

    useEffect(() => {
        scrollToTop()
        setCartPosition('right-[-100%]')
    }, [location])

    const [cartItems, setCartItems] = useState([])
    const [confirmAddToCart, setConfirmAddToCart] = useState('hidden')
    const [cartPosition, setCartPosition] = useState('right-[-100%]')

    const addToCart = (data) => {
        // const book = JSON.parse(localStorage.getItem('data'));
        const book = data;
        const bookKey = book.key
        //Does item already exist in cart??
        const exist = cartItems.find(item => item.key === bookKey)
        if(!exist){
        // Add to cart if doesn't exist
        setCartItems([...cartItems, {...book, qty: 1}])
        handleAddToCartAnimation()
        }else {
        //Update quantity if already in cart
        setCartItems(
            cartItems.map(item =>
            item.key === bookKey ? {...exist, qty: exist.qty + 1 } : item
            )
        )
        handleAddToCartAnimation()
        }
    }

    function handleAddToCartAnimation(){
        if(cartPosition === 'right-[-100%]') {
            setCartPosition('right-0')
            setTimeout(() =>{
                setCartPosition('right-[-100%]')
            }, 2500)
        } else{
            setTimeout(() =>{
                setCartPosition('right-[-100%]')
            }, 2500)
        }
    }

    const toggleCart = () => {
        cartPosition === 'right-[-100%]' ? setCartPosition('right-0') : setCartPosition('right-[-100%]');
    }

    return ( 
        <div id="root-layout" className='min-h-screen relative'>
            <Header cartItems={cartItems} toggleCart={toggleCart}/>
            <Cart position={cartPosition} cartItems={cartItems} setCartItems={setCartItems}/>
            <main className=''>
                <Outlet context={[addToCart, cartItems, setCartItems]} />
            </main>
        </div>
    );
}

export default RootLayout;