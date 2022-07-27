import "./topbar.css"
import{Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';

export default function Topbar() {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">MIke's Project</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                <SearchIcon />
                    <input placeholder="Search for friend Post or Video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                  <span className="topbarlink">Homepage</span>
                  <span className="topbarlink">Timeline</span>
                </div>
                <div className="topbarIcons"></div>
                <div className="topbarIconItem">
                <PersonIcon />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                <ChatIcon/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                <NotificationsActiveIcon/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <Link to={`/profile/${user.username}`}>
                <img src={user.profilePicture ? PF+user.profilePicture : PF+"mike.jpg"} alt="" className="topbarImg" />
                </Link>
            </div>
        </div>
    )
}