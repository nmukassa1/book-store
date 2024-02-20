function BookPageProductImage({img}) {
    return ( 
        <aside className='h-full border border-solid border-black bg-[#F7F7F7]'>
            <div id="book-img" className='h-full grid place-content-center'>
                <img src={img} alt="" />
            </div>
        </aside>
     );
}

export default BookPageProductImage;