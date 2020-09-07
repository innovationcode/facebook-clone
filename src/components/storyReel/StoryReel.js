import React from 'react';
import Story from '../story/Story.js'

import './StoryReel.css';

const StoryReel = () => {
    return (
        <div className = "feed">
            <Story 
                image = '../assets/flower1.jpg'
                profileSrc = "../assets/face2 (2).png"
                title = "Tina..."    
            />
            <Story 
                image = '../assets/flower3.jpg'
                profileSrc = "../assets/face2 (3).png"
                title = "Bina..."    
            />
            <Story 
                image = '../assets/flower2.jpg'
                profileSrc = "../assets/face2 (4).png"
                title = "Cina..."    
            />
            <Story 
                image = '../assets/flower4.jpg'
                profileSrc = "../assets/face2.png"
                title = "Jina..."    
            />

        </div>
    )
}

export default StoryReel;
