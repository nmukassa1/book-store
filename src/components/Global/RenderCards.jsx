import {Link} from 'react-router-dom'
import AddToCartButton from '../Global/AddToCartButton'
import ProductCard from './ProductCard';
import { render } from 'react-dom';

function RenderCards({data, title, page, id, type, genreName, renderAmount}) {

  let listOfProducts;
    /* CHECK IF DATA RETURNED IS AN ARRAY SO WE CAN ITTERATE OVER IT. IF NOT THEN CONVERT OBJECT TO ARRAY */
    let isArray; 

    if(id === 'fiction' || id === 'non_fiction')
    { 
      listOfProducts = Object.values(data[type].genre)
      isArray = Array.isArray(data[type].genre)
    } else {
      listOfProducts = Object.values(data[type].genre[genreName])
      isArray = Array.isArray(data[type].genre[genreName])
    } 
    

    let listOfProductsArray;

    if(!isArray) {
      // Convert object to array
      listOfProductsArray = listOfProducts.reduce((initial, current) => initial.concat(current))
    } else {
      listOfProductsArray = listOfProducts
    }

  

    return ( 
       <>
         {listOfProductsArray && (
            <section id={id} className='wrapper'>

             <div id="" className='top-bar flex justify-between px-8'>
              <div id="" className='title'>
                  <h1 className='uppercase text-xl'>{title.replace('_', ' ')}</h1>
              </div>
              {renderAmount && <Link to={`/view-all/${type}/${page}`}>View all</Link>}
             </div>
              
              <div id="" className="slide grid lg:grid-cols-4 md:grid-cols-2">

                {renderAmount ? (
                  listOfProductsArray.slice(0, Number(renderAmount)).map((item, key) => (
                    <ProductCard product={item} />
                  ))
                ) :
                  listOfProductsArray.map((item, key) => (
                    <ProductCard product={item} />
                  ))
                }

              </div>

            </section>
        )}
       </>
    );
}

export default RenderCards;