import {Link} from 'react-router-dom'

function RenderCardsViewAll({data, title, id, type, genreName}) {

  //type = fiction or non_fiction
  //id = am I traversing futher into object value to get specific genre?
  //genreName = what is the genre, "fantasy", "romance"...

    

    let dataValues;
    let isArray;

    if(id === 'fiction' || id === 'non_fiction')
    { 
      dataValues = Object.values(data[type].genre)
      isArray = Array.isArray(data[type].genre)
    } else {
      dataValues = Object.values(data[type].genre[genreName])
      isArray = Array.isArray(data[type].genre[genreName])
    } 

    // console.log(dataValues)
    // console.log(isArray)

    let arr;

    if(!isArray) {
      arr = dataValues.reduce((initial, current) => initial.concat(current))
    } else {
      arr = dataValues
    }

   

    return ( 
       <>
         {arr && (
            <section className='wrapper'>

             <div id="" className='top-bar flex justify-between px-8'>
              <div id="" className='title'>
                  <h1 className='uppercase text-xl'>{title}</h1>
                </div>
             </div>

              <div id="" className="slide grid lg:grid-cols-4 md:grid-cols-2">

                {arr.map(item => (
                  <Link to={`/book/${item.title}`} onClick={() => {localStorage.setItem('data', JSON.stringify(item))}} key={item.key} className="border-solid border border-black grow shrink-0">

                    <div id="" className="book-img w-full h-[300px] border-solid border border-black py-5 bg-[#F7F7F7]">
                      <img src={item.img} alt="" className="w-3/4 h-full object-contain mx-auto"/>
                    </div>

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
                      {item.quantity === 0 && (<p>Out Of Stock</p>)}
                   </div>
                  </Link>
                ))}

              </div>

            </section>
        )}
       </>
    );
}

export default RenderCardsViewAll;