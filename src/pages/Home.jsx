import Hero from '../components/HomePage/Hero';
import RenderCards from '../components/Global/RenderCards';
import useBookDatabase  from '../useBookDatabase';

import { useEffect } from 'react';

function Home() {
    const {books} = useBookDatabase();

    return ( 
        <>
            {books && (
                <div className='page-height'>
                    <Hero />
                    <RenderCards data={books} type={'fiction'} genreName='fantasy' renderAmount='4' id={'fantasy-section'} />
                    <RenderCards data={books} type={'fiction'} genreName='romance' renderAmount='4' id={'romance-section'} />
                    <RenderCards data={books} type={'non_fiction'} genreName='biography' renderAmount='4' id={'biography-section'} />
                </div>
            )}
            {!books && (<>No file</>)}
        </>
    );
}

export default Home;