function TeaserTrd(props) {
    return (
        <section className='text-white max-w-screen-md mx-auto'>
            <div className='mt-16 mb-4 max-w-xl '>
                <h1 className="mb-2">{props.heading}</h1>
                <p>{props.children}</p>
            </div>

            <img src={props.imgsrc} />
        </section>
    );
}

export default TeaserTrd;
