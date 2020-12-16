import React from 'react';
import PostData from '../data.json';

function YelpCamp() {
    return (
        <div>
            <p>{PostData[0].projectId}</p>
            <p>{PostData[0].projectDescription}</p>
            <p>{PostData[0].projectName}</p>
            <p>{PostData[0].projectShortDescription}</p>
            <p>{PostData[0].projectTags + ''} </p>
        </div>
    );
}

export default YelpCamp;
