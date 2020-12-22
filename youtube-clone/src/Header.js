import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
function Header() {
    return (
        <div classNam="header">
            <h1>I am a header</h1>
            <MenuIcon />
            <img className="header__logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt=" "/>
            <input type ="text" />
            <SearchIcon />
            <VideoCallIcon />
            <AppsIcon />
            <NotificationsIcon />
            <Avatar alt="Joel Siby" src="https://avatars1.githubusercontent.com/u/67756104?s=460&u=5b8077489de475d760dbc41fea716bf8be69bf56&v=4" />
        </div>
    )
}

export default Header