
import './Row.css';

const RowOne=()=>{
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (tagetRef.current) {
    //             const tagetOffsetTop = tagetRef.current.offsetTop;
    //             if (window.scrollY >= tagetOffsetTop) {
    //                 setIsScroll(true);
    //             } else {
    //                 setIsScroll(false);
    //             }
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);
    return(
        <div className="RowOne">
            <div className="row_inner">
                <div className="intro">
                    <img src="/assets/images/intro.jpg" alt="" />
                </div>
                <div className="intro_text">
                    <h1>☠️</h1>
                    <h1>Build Your Own PC</h1>
                </div>
            </div>
        </div>
    )
};

export default RowOne;