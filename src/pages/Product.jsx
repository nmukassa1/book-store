import { useOutletContext } from 'react-router-dom';
import ProductPageImage from '../components/ProductPage/ProductPageImage';
import ProductPageInfo from '../components/ProductPage/ProductPageInfo';

function Book() {

    

    const [addToCart, cartItems] = useOutletContext() 
    const data = JSON.parse(localStorage.getItem('data'))
   
    return ( 
        <div id='product-section' className='page-height relative grid md:grid-cols-2'>
            <ProductPageImage img={data.img} />

            <ProductPageInfo data={data} />
        </div>
    );
}

export default Book;