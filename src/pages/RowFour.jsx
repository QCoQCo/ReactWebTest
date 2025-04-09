import { useRef, useState, useEffect } from 'react';
import { useWindowScrollEvent, checkIsInViewport } from '../components/ect';
import './Row.css';


const RowFour = () => {
    const [isVisible, setIsVisible] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (contentRef.current) {
                setIsVisible(checkIsInViewport(contentRef.current));
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="RowFour">
            <div className="row_inner">
                <div className="fullscreen-image">
                    <img src="/assets/images/tech-bg.avif" alt="Technology Background" />
                </div>
                <div className={`content-wrapper ${isVisible ? 'visible' : ''}`} ref={contentRef}>
                    <div className="grid-container">
                        <div className="grid-item">
                            <div className="image-box">
                                <img src="/assets/images/cpu-1.jpg" alt="CPU" />
                            </div>
                            <div className="text-box">
                                <h3>The Hottest Powerup For You</h3>
                                <p>Experience lightning-fast processing</p>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="image-box">
                                <img src="/assets/images/gpu-1.jpg" alt="GPU" />
                            </div>
                            <div className="text-box">
                                <h3>More Than Just Graphics</h3>
                                <p>Immerse in breathtaking visuals</p>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="image-box">
                                <img src="/assets/images/sound-card-1.jpg" alt="Sound Card" />
                            </div>
                            <div className="text-box">
                                <h3>Take Your Audio Experience To The Next Level</h3>
                                <p>Feel every beat with crystal clear sound</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RowFour;