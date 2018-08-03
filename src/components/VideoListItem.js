import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    return (
        <li onClick={() => onVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        </li>
    )
}

export default VideoListItem;