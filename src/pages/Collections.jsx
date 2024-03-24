import { useSearchParams } from 'react-router-dom';
import catalog from '../product-catalog.json';
import ProductCard from '../components/Global/ProductCard';
import { useEffect, useState } from 'react';

function Collections() {
    const [searchParams] = useSearchParams(); // Getting URL search parameters
    const [queryExist, setQueryExist] = useState(false); // State to track if query exists
    const [products, setProducts] = useState([]); // State to store products
    const [genre, setGenre] = useState()
    const [title, setTitle] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        const type = searchParams.get('type'); // Getting the 'type' parameter from URL
        setType(searchParams.get('type')); // Getting the 'type' parameter from URL
        const genre = searchParams.get('genre'); // Getting the 'genre' parameter from URL
    
        if (catalog[type]) {
            // Extracting books based on 'genre' or 'type' from catalog
            const productPath = genre ? catalog[type].genre[genre] : Object.values(catalog[type].genre).flat();
            setProducts(productPath); // Updating products state with the array of products
            setQueryExist(!!productPath);
            console.log(genre ? `Genre is: ${genre}` : 'No genre specified.');
        } else{
            setProducts(Object.values(catalog)
                .flatMap(element => Object.values(element.genre))
                .flat()
            );
            setQueryExist(true)
        }

        if(genre){
            setTitle(genre.toUpperCase())
        } else if(type){
            setTitle(type.replace('_', ' ').toUpperCase())
        }else{
            setTitle('COLLECTION')
        }
    }, [searchParams]); // Running the effect when searchParams change
    

    return ( 
        <div>
            <h1 className='text-center text-xl my-4 cursor-default'>{title}</h1>
            {/* Rendering the product cards */}
            <div className='grid lg:grid-cols-4 md:grid-cols-2'>
                {queryExist && products.map((item, index) => (
                    <ProductCard key={index} product={item} type={type} /> 
                ))}
            </div>
        </div>
     );
}

export default Collections;
