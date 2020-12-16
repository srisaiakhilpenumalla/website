import React from 'react';
import PostData from '../data.json';
function ChatApp() {
    return (
        <div>
            <p>{PostData[3].projectId}</p>
            <p>{PostData[3].projectDescription}</p>
            <p>{PostData[3].projectName}</p>
            <p>{PostData[3].projectShortDescription}</p>
            <p>{PostData[3].projectTags + ''} </p>
        </div>
    );
}

export default ChatApp;
