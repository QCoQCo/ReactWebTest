import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="f_inner">
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src="/assets/images/logo.png" alt="logo" />
                    </div>
                    <div className="footer-social">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="mailto:contact@example.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="footer-links">
                        <div className="link-group">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/careers">Careers</a></li>
                                <li><a href="/press">Press</a></li>
                            </ul>
                        </div>
                        <div className="link-group">
                            <h3>Support</h3>
                            <ul>
                                <li><a href="/contact">Contact Us</a></li>
                                <li><a href="/faq">FAQ</a></li>
                                <li><a href="/shipping">Shipping</a></li>
                            </ul>
                        </div>
                        <div className="link-group">
                            <h3>Legal</h3>
                            <ul>
                                <li><a href="/privacy">Privacy Policy</a></li>
                                <li><a href="/terms">Terms of Service</a></li>
                                <li><a href="/cookies">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Reform. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;