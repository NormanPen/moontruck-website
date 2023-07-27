import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

// Define the props
const ImageSlider = ({children, ...options}) => {
    // 1. useEmblaCarousel returns a `emblaRef` and we must attach the ref to a container element like a div.
    // EmblaCarousel will use that ref as basis for swipe and other functionality.
    const [emblaRef] = useEmblaCarousel(options);

    return (
        // Attach ref to a div
        // 2. The wrapper div must have overflow:hidden
        <div>
            <div className='overflow-hidden' ref={emblaRef}>
                {/* 3. The inner div must have a display:flex property for horizontal scrolling*/}
                {/* 4. We pass the children as-is so that the outside component can style it accordingly */}
                <div className='flex'>{children}</div>
            </div>
            <p className='text-white  max-w-screen-md mx-auto'>
                Wenn es etwas Besseres gäbe, würden wir es nutzen. Dellen,
                Schäden und Langzeitkorrosion sind beim Cybertruck kein Thema
                mehr. Mit seiner ultrafesten, einfarbigen Karosserie bietet der
                Cybertruck ein schlag- und stoßfestes Außenskelett der
                Sonderklasse und seinen Insassen maximalen Schutz.
            </p>
        </div>
    );
};

export default ImageSlider;
