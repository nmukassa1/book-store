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
                    <RenderCards data={books.fiction.genre.fantasy} title={'Fantasy'} page={"fantasy"} type={'fiction'} id={'fantasy-section'} />
                    <RenderCards data={books.fiction.genre.romance} title={'Romance'} page={"romance"} type={'fiction'} id={'romance-section'} />
                    <RenderCards data={books.non_fiction.genre.biography} title={'Biography'} page={"biography"} type={'non_fiction'} id={'biography-section'} />
                </div>
            )}
            {!books && (<>No file</>)}
        </>
    );
}

export default Home;