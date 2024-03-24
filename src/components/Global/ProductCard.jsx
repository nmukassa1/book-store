import {Link} from 'react-router-dom'

function ProductCard({product, type}) {
    return ( 
        // <Link to={`/book/${product.title.toLowerCase()}`} onClick={() => {localStorage.setItem('data', JSON.stringify(product))}} key={product.key} className="product-card border-solid border border-black grow shrink-0">
        <Link to={`/product?name=${product.title}`} onClick={() => {localStorage.setItem('data', JSON.stringify(product))}} key={product.key} className="product-card border-solid border border-black grow shrink-0">

          <div id="" className="book-img w-full h-[300px] border-solid border border-black py-5 bg-[#F7F7F7]">
            <img src={product.img} alt="" className="w-3/4 h-full object-contain mx-auto"/>
          </div>

          {/* {product.quantity > 0 && <AddToCartButton product={product} />} */} 

          <div id="" className={`book-info p-3 ${product.quantity === 0 ? `line-through` : ''}`}>
              <div id="book-title">
                <h1>{product.title}</h1>
              </div>
              <div className="book-author">
                <h3>{product.author.join(' & ')}</h3>
              </div>
              <div className="book-price">
                <span>£{product.price}</span>
              </div>
              <p>{product.quantity === 0 ? 'Out Of Stock' : 'In Stock'}</p>
          </div>
          
        
        </Link>
     );
}

export default ProductCard;