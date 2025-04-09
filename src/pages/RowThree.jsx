import { useRef, useState, useEffect } from 'react';
import { useWindowScrollEvent, checkIsInViewport } from '../components/ect';
import './Row.css';

const RowThree = () => {
    const tagetRef = useRef(null);
    const [isScroll, setIsScroll] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showParagraph, setShowParagraph] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (tagetRef.current) {
                const tagetOffsetTop = tagetRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                // 섹션이 화면에 보이기 시작할 때
                if (tagetOffsetTop <= windowHeight * 0.8) {
                    setIsScroll(true);
                    
                    // 제목이 나타날 위치
                    if (tagetOffsetTop <= windowHeight * 0.7) {
                        setShowTitle(true);
                    }
                    
                    // 문단이 나타날 위치 (제목보다 더 아래)
                    if (tagetOffsetTop <= windowHeight * 0.5) {
                        setShowParagraph(true);
                    }
                } else {
                    setIsScroll(false);
                    setShowTitle(false);
                    setShowParagraph(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // const handleScroll=()=>{
    //     setIsScroll(
    //         tagetRef?.current?checkIsInViewport(tagetRef?.current):false
    //     );
    // };

    // useWindowScrollEvent(handleScroll);

    return (
        <div className="RowThree">
            <div className="row_inner">
                <div className="content-box">
                    <div className="sticky-box">
                        <h1 className={`${showTitle ? 'fade-in' : ''}`}>Why Reform?</h1>
                        <p className={`${isScroll ? 'animating' : ''} ${showParagraph ? 'fade-in' : ''}`}>
                            Our products are designed from the ground up to be as open
                            <br/>and transparent as possible,
                            <br/>supporting a free and open source software from the start.
                        </p>
                    </div>
                </div>
                <div className="bg-img" ref={tagetRef}>
                    <img src="/assets/images/wallpaper-3.jpg" alt="" />
                </div>
            </div>
        </div>
    )
};

export default RowThree;