import React, { useState, useEffect } from 'react';
import StoryReel from '../storyReel/StoryReel.js'
import MessageSender from '../messageSender/MessageSender.js';
import Post from '../post/Post.js';
import db from '../../firebase/firebase.js';

import './Feed.css';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
          .orderBy('timestamp', 'desc')
          .onSnapshot(snapshot => (
                setPosts(snapshot.docs.map(doc => ({id: doc.id,
                                                data: doc.data()
                                            })))
        ))
    }, [])

    return (
        <div className = "feed">
            <StoryReel />
            <MessageSender />

            {posts.map(post => (
                <Post
                    key = {post.data.id}
                    profilePic = {post.data.profilePic}
                    timestamp = {post.data.timestamp}
                    username = {post.data.user}
                    image = {post.data.image}
                />
            ))}

            {/* <Post
                profilePic = ""
                message = "This is beautiful..."
                timestamp = "timestamp"
                username = "LI"
                image = "https://i.pinimg.com/originals/b4/c2/d7/b4c2d7c9fb28e69bff7ec8a1e37b8b42.jpg"
            /> */}
        </div>
    )
}

export default Feed;
