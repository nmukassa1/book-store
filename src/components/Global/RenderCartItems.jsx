import { useEffect, useState } from "react";
import RootLayout from "../../RootLayout";

function RenderCartItems({cartItems, setCartItems}) {

    const [value, setValue] = useState(1)
    // const updateInputField = (e) => {
    //     setValue(e.target.value);
    // }

    const updateInputField = (e, key) => {
        const updatedValue = parseInt(e.target.value);
        setCartItems(prevItems => prevItems.map(item => {
            if (item.key === key) {
                return { ...item, qty: updatedValue };
            }
            return item;
        }));
    }

    const updateBasket = (e) => {
        const itemToUpdate = cartItems.find(item => item.key === parseInt(e.target.parentElement.parentElement.id))

        if(itemToUpdate){
            const updatedValue = parseInt(e.target.parentElement.firstChild.value);
            console.log(typeof updatedValue);
            setCartItems(
                cartItems.map((item) => {  
                    if(item.key === itemToUpdate.key){
                        const updatedItem = { ...itemToUpdate, qty: updatedValue }
                        return updatedItem
                    } else{
                        return item
                    }
                })
            );
        }
    }

    const  handleRemoveItemFromBasket = (e) => {
        const itemToRemove = parseInt(e.target.parentElement.parentElement.id);
        const newBasket = cartItems.filter((item) => item.key != itemToRemove);
        setCartItems([...newBasket]);
        console.log(cartItems);
    }

//     <input 
//     type="number" 
//     className='border border-black w-[40px] h-[40px] text-center text-2xl font-thin' 
//     value={item.qty}
//     onChange={(e) => updateBasket(e)}
//     // onChange={handleChange}
// />

    return ( 
        <div id="cart-items" className='h-full'>
            { cartItems.map((item, index) => (
                <div key={item.key} id={item.key} className="flex w-full justify-around items-center mb-2">
                    <img src={item.img} alt="" className='w-[90px] h-auto'/>
                    <div className="item__info w-1/2">
                        <span className='block'>{item.title}</span>
                        <span className='block'>£{item.price}</span>
                        <span className='block'>{item.author.join(' & ')}</span>
                    </div>
                    <div className='cart-items-qty-box flex flex-col items-center'>
                        <input 
                            type="number" 
                            className='border border-black w-[40px] h-[40px] text-center text-2xl font-thin' 
                            value={item.qty}
                            // value={value}
                            // onChange={(e) => updateBasket(e)}
                            onChange={(e) => updateInputField(e, item.key)}
                            // onChange={handleChange}
                        />
                        <button 
                            className='update-item text-xs mt-1.5 tracking-wider' 
                            onClick={(e) => updateBasket(e)}>update</button>
                        <button 
                            className='remove-item text-xs mt-1.5 tracking-wider' 
                            onClick={(e) => handleRemoveItemFromBasket(e)}>remove</button>
                    </div>
                </div>
            )) }
        </div>
    );
}

export default RenderCartItems;