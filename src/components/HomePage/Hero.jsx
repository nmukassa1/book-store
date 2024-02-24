import {Link} from 'react-router-dom'

function Hero() {
    return ( 
        <section id="hero" className='grid md:grid-cols-2 h-[50vh]'>
            <div id="fiction-hero" className='grid place-content-center relative'>
                <Link to="view-all/fiction/fiction" className='bg-black text-white px-3 py-2 hover:text-black hover:bg-white'>FICTION</Link>
            </div>
            <div id="non-fiction-hero" className='grid place-content-center'>
                <Link to="view-all/non_fiction/non_fiction" className='bg-black text-white px-3 py-2 hover:text-black hover:bg-white'>NON-FICTION</Link>
            </div>
        </section>
    );
}

export default Hero;