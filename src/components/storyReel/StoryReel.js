import React from 'react';
import Story from '../story/Story.js'

import './StoryReel.css';

const StoryReel = () => {

    return (
        <div className = "storyReel">
            
            <Story 
                image = 'https://greepx.com/wp-content/uploads/2018/11/1542891580_829_tropical-flowers-wallpapers-wallpaper-cave.jpg'
                profileSrc = "../assets/face2 (2).png"
                title = "Tina..."    
            />
            <Story 
                image = 'https://greepx.com/wp-content/uploads/2018/11/1543231768_751_flowers-with-butterfly-wallpapers-hd.jpg'
                profileSrc = "../assets/face2 (3).png"
                title = "Bina..."    
            />
            <Story 
                image = 'https://greepx.com/wp-content/uploads/2018/11/1542891584_154_tropical-flowers-wallpapers-wallpaper-cave.jpg'
                profileSrc = "../assets/face2 (4).png"
                title = "Cina..."    
            />

            <Story 
                image = 'https://greepx.com/wp-content/uploads/2018/11/1542891546_466_tropical-flowers-wallpapers-wallpaper-cave.jpg'
                profileSrc = "../assets/face2 (4).png"
                title = "Tom..."    
            />

            <Story 
                image = 'https://greepx.com/wp-content/uploads/2018/11/1543231766_818_flowers-with-butterfly-wallpapers-hd.jpg'
                profileSrc = "../assets/face2.png"
                title = "Bob..."    
            />

        </div>
    )
}

export default StoryReel;
