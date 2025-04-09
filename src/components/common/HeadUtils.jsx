import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './HeadUtils.css';

const HeadUtils = () => {
    // const { user, logout } = useContext(AuthContext);
    // const [isSearch, setIsSearch] = useState(false);

    // const handleSearchView = () => {
    //     setIsSearch(!isSearch);
    // };

    return (
        <div id="HeadUtils">
            <div><Link to='/'>Login</Link></div>
            <div><Link to='/'>Join</Link></div>
            <div><Link to='/'>Cart(0)</Link></div>
            <div className="btn-search"><FontAwesomeIcon icon={faSearch} /></div>
        </div>
    )
};

export default HeadUtils;