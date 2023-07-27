function TeaserMain(props) {
    return (
        <article className='text-white max-w-screen-md mx-auto'>
            <img src={props.imgsrc} />
            <h1>{props.heading}</h1>
            <p>{props.children}</p>
        </article>
    );
}

export default TeaserMain;
