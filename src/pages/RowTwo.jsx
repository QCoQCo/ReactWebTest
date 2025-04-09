import { useRef, useState, useEffect } from 'react';
import { useWindowScrollEvent, checkIsInViewport } from '../components/ect';
import './Row.css';

const RowTwo = () => {
    const [visibleBoxes, setVisibleBoxes] = useState([false, false, false, false]);
    const boxRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    useEffect(() => {
        const handleScroll = () => {
            const newVisibleBoxes = boxRefs.map((ref, index) => {
                if (ref.current) {
                    return checkIsInViewport(ref.current);
                }
                return false;
            });
            setVisibleBoxes(newVisibleBoxes);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="RowTwo">
            <div className="row_inner">
                <div className={`row2-box ${visibleBoxes[0] ? 'visible' : ''}`} ref={boxRefs[0]}>
                    <div className="rowImg">
                        <img src="/assets/images/laptop-14.jpg" alt="" />
                    </div>
                    <div className="rowText">
                        <p>Open Computing<br/>Autonomy</p>
                    </div>
                </div>
                <div className={`row2-box ${visibleBoxes[1] ? 'visible' : ''}`} ref={boxRefs[1]}>
                    <div className="rowImg">
                        <img src="/assets/images/laptop-15.jpeg" alt="" />
                    </div>
                    <div className="rowText">
                        <p>Open Source<br/>Hardware</p>
                    </div>
                </div>
                <div className={`row2-box ${visibleBoxes[2] ? 'visible' : ''}`} ref={boxRefs[2]}>
                    <div className="rowImg">
                        <img src="/assets/images/key-board-1.jpg" alt="" />
                    </div>
                    <div className="rowText">
                        <p>Modularity by<br/>Design</p>
                    </div>
                </div>
                <div className={`row2-box ${visibleBoxes[3] ? 'visible' : ''}`} ref={boxRefs[3]}>
                    <div className="rowImg">
                        <img src="/assets/images/key-board-2.jpg" alt="" />
                    </div>
                    <div className="rowText">
                        <p>Right<br/>to<br/>Repair</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RowTwo;