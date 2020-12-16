import React from 'react';
import '../App.css';
import { Chrono } from 'react-chrono';

const Resume = () => {
    const items = [
        {
            title: 'May 2020',
            cardTitle: 'UTA Graduated',
            cardSubtitle: 'UTA Masters in Computer Science',
            cardDetailedText:
                'Graduated with Masters degree from University of Texas at Arlington majoring in Computer Science',
        },
        {
            title: 'Jun 2019',
            cardTitle: 'Mouser Electronics',
            cardSubtitle: 'Software Engineer',
            cardDetailedText:
                'Did a 3 month internship at Mouser Electronics as a Software Engineer working on their Ecommerce and Internal Web Applications.',
        },
        {
            title: 'Jan 2018',
            cardTitle: 'UTA',
            contentText: 'Joined UTA',
            cardDetailedText:
                'Came to the United States for my Masters in Computer Science at The University of Texas at Arlington',
        },
        {
            title: 'Sept 2017',
            cardTitle: 'Left Wipro',
            cardDetailedText:
                'Left Wipro to pursue my passion of learning and developing myself and thus paving my path for my Masters program at UTA.',
        },
        {
            title: 'Aug 2015',
            cardTitle: 'Wipro',
            cardSubtitle: 'Software Engineer',
            cardDetailedText:
                'Joined Wipro as a Software Engineer after graduating from my Undergraduate program from Osmania University.',
        },
        {
            title: 'Jan 2015',
            cardTitle: 'Bdl',
            cardSubtitle: 'Software Engineer',
            cardDetailedText:
                'Joined BDL as a Software Engineer to develop applications for the company and to gain realtime experience.',
        },
        {
            title: 'Mar 2014',
            cardTitle: 'Cybertel Software Limited',
            cardSubtitle: 'Software Engineer',
            cardDetailedText:
                'Did an Internship program during my Undergraduate as a Software Developer working on developing applications',

            // media: {
            //     type: 'IMAGE',
            //     source: {
            //         url: 'http://someurl/image.jpg',
            //     },
            // },
        },
    ];

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Chrono
                items={items}
                cardHeight="400"
                // theme={{
                //     primary: 'blue',
                //     secondary: 'Yellow',
                //     cardBgColor: 'aqua',
                //     cardForeColor: 'violet',
                // }}
                mode="VERTICAL_ALTERNATING"
            />
        </div>
    );
};

// function Resume() {
//     return <div className="resume">Resume</div>;
// }

export default Resume;
