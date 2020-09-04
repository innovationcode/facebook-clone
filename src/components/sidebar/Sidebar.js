import React from 'react';
import SidebarRow from '../sidebarRow/SidebarRow.js';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import TheatersOutlinedIcon from '@material-ui/icons/TheatersOutlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import WorkOutlinedIcon from '@material-ui/icons/WorkOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className = "sidebar">
            <SidebarRow src = "https://i1.pngguru.com/preview/457/896/952/s-icon-no-background-icon-512x512-2x-color-shade-fan.jpg"
                        title="LD"
            />

            <SidebarRow Icon = {LocalHospitalIcon}  iconColor = "red" title ="COVID-19 Information Center"/>

            <SidebarRow Icon = {EmojiFlagsIcon} iconColor = "blue" title = "Pages"/>

            <SidebarRow Icon = {PeopleIcon} iconColor = "green" title ="Friends"/>

            <SidebarRow Icon = {ChatIcon} iconColor = "#FFA500"  title ="Messenger"/>

            <SidebarRow Icon = {StorefrontIcon} iconColor = " #40e1c1" title = "Marketplace"/>

            <SidebarRow Icon = {VideoLibraryIcon} iconColor = "red" title = "Videos"/>

            <SidebarRow Icon = {TheatersOutlinedIcon} iconColor = "black" title = "Movies"/>

            <SidebarRow Icon = {WbSunnyOutlinedIcon} iconColor = "#FFA500" title = "Weather"/>

            <SidebarRow Icon = {WorkOutlinedIcon} iconColor = "green" title = "Jobs"/>

            <SidebarRow Icon = {ExpandMoreOutlinedIcon} iconColor = "action" title =""/>
        </div>
    )
}

export default Sidebar;
