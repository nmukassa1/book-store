import {Link} from 'react-router-dom'

function RenderCards({data, title, page, id, type}) {


    return ( 
       <>
         {data && (
            <section id={id} className='wrapper'>

             <div id="" className='top-bar flex justify-between px-8'>
              <div id="" className='title'>
                  <h1 className='uppercase text-xl'>{title}</h1>
              </div>
              <Link to={`/view-all/${type}/${page}`}>View all</Link>
             </div>
              
              <div id="" className="slide grid lg:grid-cols-4 md:grid-cols-2">

                {data.slice(0, Math.ceil(data.length / 2)).map(item => (
                  <Link to={`/book/${item.title.toLowerCase()}`} onClick={() => {localStorage.setItem('data', JSON.stringify(item))}} key={item.key} className="border-solid border border-black grow shrink-0">

                    <div id="" className="book-img w-full h-[300px] border-solid border border-black py-5 bg-[#F7F7F7]">
                      <img src={item.img} alt="" className="w-3/4 h-full object-contain mx-auto"/>
                    </div>

                    {item.quantity === 0 && (
                      <div id="" className="book-info p-3 line-through">
                        <div id="book-title">
                            <h1>{item.title}</h1>
                          </div>

                          <div className="book-author">
                            <h3>{item.author.join(' & ')}</h3>
                          </div>

                          <div className="book-price">
                            <span>£{item.price}</span>
                          </div>

                          {item.quantity === 0 && (<p>Out Of Stock</p>)}
                    </div>
                    )}

                    {item.quantity > 0 && (
                        <div id="" className="book-info p-3">
                         <div id="book-title">
                            <h1>{item.title}</h1>
                          </div>

                          <div className="book-author">
                            <h3>{item.author.join(' & ')}</h3>
                          </div>

                          <div className="book-price">
                            <span>£{item.price}</span>
                          </div>

                          {item.quantity > 0 && (<p>In Stock</p>)}
                        </div>
                    )}
                  </Link>
                ))}

              </div>

            </section>
        )}
       </>
    );
}

export default RenderCards;