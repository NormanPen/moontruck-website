function TeaserTrd(props) {
    return (
        <section className='text-white max-w-screen-md mx-auto'>
            <h1>{props.heading}</h1>
            <p>{props.children}</p>
            <img src={props.imgsrc} />
        </section>
    );
}

export default TeaserTrd;
