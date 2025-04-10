import { useRef, useState, useEffect } from 'react';
import './Row.css';

const RowThree = () => {
    const tagetRef = useRef(null);
    const [isScroll, setIsScroll] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showParagraph, setShowParagraph] = useState(false);
    const [backgroundSize, setBackgroundSize] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (tagetRef.current) {
                const tagetOffsetTop = tagetRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                const elementHeight = tagetRef.current.offsetHeight;
                
                // 섹션이 화면에 보이기 시작할 때
                if (tagetOffsetTop <= windowHeight * 0.8) {
                    setIsScroll(true);
                    
                    // 배경 이미지 크기 계산
                    // const progress = Math.min(
                    //     Math.max(
                    //         // (windowHeight - tagetOffsetTop) / (elementHeight * 0.6),
                    //         (windowHeight - tagetOffsetTop) / (elementHeight),
                    //         0
                    //     ),
                    //     1
                    // );
                    const progress=((windowHeight - tagetOffsetTop) / (elementHeight));
                    // console.log(progress);
                    setBackgroundSize(progress * 100);
                    // if (progress <= 0.3) {
                    //     setBackgroundSize(0);
                    // } else if (progress <= 0.6) {
                    //     setBackgroundSize(50);
                    // } else {
                    //     setBackgroundSize(100);
                    // }

                    // 제목이 나타날 위치
                    if (tagetOffsetTop <= windowHeight * 0.7) {
                        setShowTitle(true);
                    }
                    // 문단이 나타날 위치 (제목보다 더 아래)
                    if (tagetOffsetTop <= windowHeight * 0.3) {
                        setShowParagraph(true);
                    }
                } else {
                    setIsScroll(false);
                    setShowTitle(false);
                    setShowParagraph(false);
                    setBackgroundSize(0);
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
                <div className="content-box" ref={tagetRef}>
                    <div className="sticky-box">
                        <h1 
                            className={`${showTitle ? 'fade-in' : ''}`}
                            style={{ backgroundSize: `${backgroundSize}% 100%` }}
                        >
                            Why Reform?
                        </h1>
                        <p 
                            className={`${isScroll ? 'animating' : ''} ${showParagraph ? 'fade-in' : ''}`}
                            style={{ backgroundSize: `${backgroundSize}% 100%` }}
                        >
                            Our products are designed from the ground up to be as open
                        </p>
                        <p 
                            className={`${isScroll ? 'animating' : ''} ${showParagraph ? 'fade-in' : ''}`}
                            style={{ backgroundSize: `${backgroundSize}% 100%` }}
                        >
                            and transparent as possible,
                        </p>
                        <p 
                            className={`${isScroll ? 'animating' : ''} ${showParagraph ? 'fade-in' : ''}`}
                            style={{ backgroundSize: `${backgroundSize}% 100%` }}
                        >
                            supporting a free and open source software from the start.
                        </p>
                    </div>
                </div>
                <div className="bg-img">
                    <img src="/assets/images/wallpaper-3.jpg" alt="" />
                </div>
            </div>
        </div>
    )
};

export default RowThree;