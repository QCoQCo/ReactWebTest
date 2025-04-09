import { Link } from 'react-router-dom';
import './Gnb.css';

const Gnb=({setHoverHeight})=>{

    const handleD1MouseHover=(e)=>{
        // const depth2El=e.currentTarget.quarySelector('.depth2');
        const depth2El=e.currentTarget.querySelector('.depth2');
        // const height=depth2El.getBoundingClientRect().height;
        const height=depth2El.getBoundingClientRect().height;
        setHoverHeight(height);
    };

    const handleD1MouseLeave=()=>{
        setHoverHeight(0);
    };

    return(
        <nav className="gnb">
            <ul>
                <li onMouseEnter={handleD1MouseHover} onMouseLeave={handleD1MouseLeave}>
                    <Link to='/'>News</Link>
                    <div className="depth2">
                        <div className="depth2-menu">
                            <ul>
                                <li><Link to='/'>Latest News</Link></li>
                                <li><Link to='/'>Archive</Link></li>
                                <li><Link to='/'>Newsletter</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="has3" onMouseEnter={handleD1MouseHover} onMouseLeave={handleD1MouseLeave}>
                    <Link to='/'>Shop</Link>
                    <div className="depth2">
                        <div className="depth2-inner">
                            <div className="depth2-menu">
                                <ul>
                                    <li>
                                        <Link to='/'>All Products</Link>
                                        <div className="depth3-menu">
                                            <ul>
                                                <li><Link to='/'>Reform Laptop</Link></li>
                                                <li><Link to='/'>Add-On</Link></li>
                                                <li><Link to='/'>Customize</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to='/'>Merch</Link>
                                        <div className="depth3-menu">
                                            <ul>
                                                <li><Link to='/'>Hoodies</Link></li>
                                                <li><Link to='/'>Hats</Link></li>
                                                <li><Link to='/'>More</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to='/'>Accessory</Link>
                                        <div className="depth3-menu">
                                            <ul>
                                                <li><Link to='/'>Keyboards</Link></li>
                                                <li><Link to='/'>Mouse & Earsets</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li onMouseEnter={handleD1MouseHover} onMouseLeave={handleD1MouseLeave}>
                    <Link to='/'>Open Hardware</Link>
                    <div className="depth2">
                        <div className="depth2-menu">
                            <ul>
                                <li><Link to='/'>Philosophy</Link></li>
                                <li><Link to='/'>Modularity</Link></li>
                                <li><Link to='/'>Sources</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li onMouseEnter={handleD1MouseHover} onMouseLeave={handleD1MouseLeave}>
                    <Link to='/'>Documentation</Link>
                    <div className="depth2">
                        <div className="depth2-menu">
                            <ul>
                                <li><Link to='/'>All Docs</Link></li>
                                <li><Link to='/'>Community</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li onMouseEnter={handleD1MouseHover} onMouseLeave={handleD1MouseLeave}>
                    <Link to='/'>About Us</Link>
                    <div className="depth2">
                        <div className="depth2-menu">
                            <ul>
                                <li><Link to='/'>Jobs</Link></li>
                                <li><Link to='/'>Legal</Link></li>
                                <li><Link to='/'>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
};

export default Gnb;