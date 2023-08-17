import React, { useEffect, useRef, useState } from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
    
    const imageRef = useRef(null);

    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    // Track if image is in the browser's Viewing Window
    const [inView, setInView] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    const scrollHandler = () => {
        setInView(isInView());
    };
    
    return (
        <img src={inView ? secondaryImg : primaryImg} 
            alt="" ref={imageRef}
        />
    );
};

export default ImageToggleOnScroll;