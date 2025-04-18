import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHome, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './Side.css';


const Side = ({ isSide, handleSideOpen }) => {
    // const sideRef=useRef(null);

    // useEffect(()=>{
        
    //     const windowWidth=window.innerWidth;
    //     // if(isSide&&windowWidth>=1280)handleSideOpen();
        
    //     if(sideRef.current){
    //         const windowWidth=window.innerWidth;
    //         if(windowWidth>=1280)handleSideOpen();
    //     }

    //     console.log(windowWidth)
    // });
    return (
        <div className={`Side ${isSide ? 'view' : ''}`}>
            <div className="side-inner">
                <div className="border-line">
                    <div className="side-top">
                        <button className="side-close" onClick={handleSideOpen}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <p className="side-logo">
                            <img src="/assets/images/logo.png" alt="logo" />
                        </p>
                    </div>
                    <div className="side-content">
                        <ul>
                            <li>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faHome} />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faUser} />
                                    login
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    cart
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className="side-gnb">
                        <ul>
                            <li>
                                <Link to="/">News</Link>
                            </li>
                            <li>
                                <Link to="/">Shop</Link>
                            </li>
                            <li>
                                <Link to="/">Open Hardware</Link>
                            </li>
                            <li>
                                <Link to="/">Documentation</Link>
                            </li>
                            <li>
                                <Link to="/">About Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="side-utills">
                        <ul>
                            <li>
                                <Link to="/">Contact</Link>
                            </li>
                            <li>
                                <Link to="/">Support</Link>
                            </li>
                            <li>
                                <Link to="/">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/">Terms</Link>
                            </li>
                            <li>
                                <Link to="/">Privacy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Side;