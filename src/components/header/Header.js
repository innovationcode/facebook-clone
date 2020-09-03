import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

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
                <div className = "header__option">
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

            </div>
        </div>
    )
}

export default Headers;