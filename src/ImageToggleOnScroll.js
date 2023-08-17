import React, { useEffect, useRef, useState } from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
    
    const imageRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);

    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    // Track if image is in the browser's Viewing Window
    const [inView, setInView] = useState(false);

    useEffect(() => {
        setIsLoading(false);
        setInView(isInView());
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    const scrollHandler = () => {
        setInView(isInView());
    };
    
    return (
        <img src={ isLoading ? "data:image/gif;base64,R0lGODlhAQABAIAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            : inView ? secondaryImg : primaryImg} 
            alt="" ref={imageRef}
        />
    );
};

export default ImageToggleOnScroll;