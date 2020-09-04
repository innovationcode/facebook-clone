import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SearchIcon from '@material-ui/icons/Search';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './Header.css';

const Header = () => {
    return (
        <div className = "header">
            <div className = "header__left">
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt = "facebook logo image"/>
                <div className = "header__input">
                    <SearchIcon />
                    <input type = "text" />
                </div>
            </div>

            <div className = "header__center">
                <div className = "header__option-active">
                    <HomeIcon fontSize = "Large" />
                </div>
                <div className = "header__option">
                    <FlagIcon fontSize = "Large" />
                </div>
                <div className = "header__option">
                    <SubscriptionsOutlinedIcon fontSize = "Large" />
                </div>
                <div className = "header__option">
                    <StorefrontIcon fontSize = "Large" />
                </div>
                <div className = "header__option">
                    <SupervisedUserCircleIcon fontSize = "Large" />
                </div>
            </div>

            <div className = "header__right">
                <div className = "header__info">
                    <Avatar />
                    <h4>user</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;