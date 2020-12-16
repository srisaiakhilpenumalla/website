import React from 'react';
import PostData from '../data.json';

function ReactColors() {
    return (
        <div>
            <p>{PostData[1].projectId}</p>
            <p>{PostData[1].projectDescription}</p>
            <p>{PostData[1].projectName}</p>
            <p>{PostData[1].projectShortDescription}</p>
            <p>{PostData[1].projectTags + ''} </p>
        </div>
    );
}

export default ReactColors;
