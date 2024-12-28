import { useRef } from "react";

const useScroll = () => {

    const contentRef = useRef(null);

    const scrollToCategory = () => {
        if (contentRef.current) {
            const yOffset = 965; // Adjust this value to fine-tune scroll position
            const element = contentRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth'

            });
        }
    };


    return { scrollToCategory, contentRef };
}

export default useScroll;
