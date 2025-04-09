import { useState } from 'react';
import { Link } from 'react-router-dom';
import Gnb from './Gnb';
import HeadUtils from './HeadUtils';
import Side from './Side';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './Header.css';

const Header=()=>{
    // const ls=()=>{};
    const[hoverHeight,setHoverHeight]=useState(null);
    // const[hoverHeigh,setHoverHeigh]=useState(0);
    const [isSide, setIsSide] = useState(false);

    const handleSideOpen = () => {
        setIsSide(!isSide);
    }

    
    return(
        <header id="header">
            <div className="header_inner">
                <div className="header_left">
                    <h1 className='logo'>
                        <Link to={'/'}>
                            <img src='/assets/images/logo.png'alt='logo'/>
                        </Link>
                    </h1>
                    <Gnb setHoverHeight={setHoverHeight}/>
                </div>
                <p className="mo-title">
                    <span>Welcome to Reform</span>
                </p>
                <div className="mobile-icons">
                    <p className="mo-open-search"><button><FontAwesomeIcon icon={faSearch} /></button></p>
                    <p className="mo-open-cart"><button><FontAwesomeIcon icon={faCartShopping} /></button></p>
                    <p className="mo-open-side"><button onClick={handleSideOpen}><FontAwesomeIcon icon={faBars} /></button></p>
                </div>
                <Side isSide={isSide} handleSideOpen={handleSideOpen}/>
                <HeadUtils />
            </div>
            <div className="hover-bg" style={{ height: hoverHeight }}></div>
        </header>
    )
};

export default Header;