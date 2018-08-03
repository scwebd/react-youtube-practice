import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
    return (
        <ul>
            {videos.map(video => (
                <VideoListItem 
                    video={video} 
                    onVideoSelect={onVideoSelect}
                    key={video.id.videoId} 
                />    
            ))}
        </ul>
    )
}

export default VideoList;