import { useEffect, useRef, useState } from "react";
import styles from "./FadeInWrapper.module.scss";

const FadeInWrapper = (props: {children:any}) => {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef<any>();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            //Runs every time the observation state changes and decides if we show the section o not
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        // This will observe the current element for changes
        observer.observe(domRef.current);
        //Clean up
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
            <div
                className={styles[`fadeInSection${isVisible ? '__isVisible' : ''}`]}
                ref={domRef}
            >
                {props.children}
            </div>
        )
}

export default FadeInWrapper;