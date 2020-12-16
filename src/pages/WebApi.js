import React from 'react';
import PostData from '../data.json';

function WebApi() {
    return (
        <div>
            <p>{PostData[4].projectId}</p>
            <p>{PostData[4].projectDescription}</p>
            <p>{PostData[4].projectName}</p>
            <p>{PostData[4].projectShortDescription}</p>
            <p>{PostData[4].projectTags + ''} </p>
        </div>
    );
}

export default WebApi;
