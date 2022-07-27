import "./sidebar.css";
import {Users} from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import FeedIcon from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

export default function Sidebar() {
  return (
      <div className="sidebar">
        <div classname="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
               <FeedIcon/>
            <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
                <ChatIcon/>
            <span className="sidebarListItemText">Chat</span>
            </li>
            <li className="sidebarListItem">
            <SlowMotionVideoIcon/>
            <span className="sidebarListItemText">Video</span>
            </li>
            <li className="sidebarListItem">
            <GroupsIcon/>
            <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
            <BookmarkIcon />
            <span className="sidebarListItemText">Bookmark</span>
            </li>
            <li className="sidebarListItem">
            <HelpIcon/>
            <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
            <WorkOutlineIcon/>
            <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
            <EventIcon/>
            <span className="sidebarListItemText">Event</span>
            </li>
            <li className="sidebarListItem">
            <SchoolIcon/>
            <span className="sidebarListItemText">Event</span>
            </li>
          </ul>
          <button class="sidebarButton">Show More</button>
          <hr className="sidebarHr"/>
          <ul className="sidebarFriendList">
          {Users.map((u)=>(
                 <CloseFriend key={u.id} user={u}/>
               ))}
          </ul>
        </div>
      </div>
  )
}