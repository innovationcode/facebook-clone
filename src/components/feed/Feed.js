import React from 'react';
import StoryReel from '../storyReel/StoryReel.js'
import MessageSender from '../messageSender/MessageSender.js';

import './Feed.css';

const Feed = () => {
    return (
        <div className = "feed">
            <StoryReel />
            <MessageSender />
        </div>
    )
}

export default Feed;
