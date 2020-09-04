import React from 'react';
import SidebarRow from '../sidebarRow/SidebarRow.js';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className = "sidebar">
            <SidebarRow src = "https://i1.pngguru.com/preview/457/896/952/s-icon-no-background-icon-512x512-2x-color-shade-fan.jpg"
                        title="LD"
            />

            <SidebarRow Icon = {LocalHospitalIcon} title ="COVID-19 Information Center"/>

            <SidebarRow Icon = {EmojiFlagsIcon} title = "Pages"/>

            <SidebarRow Icon = {PeopleIcon} title ="Friends"/>

            <SidebarRow Icon = {ChatIcon} title ="Messenger"/>

            <SidebarRow Icon = {StorefrontIcon} title = "Marketplace"/>

            <SidebarRow Icon = {VideoLibraryIcon} title = "Videos"/>

            <SidebarRow Icon = {ExpandMoreOutlinedIcon} title =""/>
        </div>
    )
}

export default Sidebar;
