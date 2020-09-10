import React from 'react';
import StoryReel from '../storyReel/StoryReel.js'
import MessageSender from '../messageSender/MessageSender.js';
import Post from '../post/Post.js';

import './Feed.css';

const Feed = () => {
    return (
        <div className = "feed">
            <StoryReel />
            <MessageSender />

            <Post
                profilePic = ""
                message = "This is beautiful..."
                timestamp = "timestamp"
                username = "LI"
                image = "https://i.pinimg.com/originals/b4/c2/d7/b4c2d7c9fb28e69bff7ec8a1e37b8b42.jpg"
            />
            
            <Post
                profilePic = ""
                message = "This is beautiful..."
                timestamp = "timestamp"
                username = "LI"
                image = "https://i.pinimg.com/originals/b4/c2/d7/b4c2d7c9fb28e69bff7ec8a1e37b8b42.jpg"
            />
            
            <Post
                profilePic = ""
                message = "This is beautiful..."
                timestamp = "timestamp"
                username = "LI"
                image = "https://i.pinimg.com/originals/b4/c2/d7/b4c2d7c9fb28e69bff7ec8a1e37b8b42.jpg"
            />
        </div>
    )
}

export default Feed;
