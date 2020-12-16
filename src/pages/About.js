import React from 'react';
import '../App.css';
import CardTest from '../components/Cardtest';

function About() {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="column">
                    <CardTest />
                </div>
                <div class="column">
                    <CardTest />
                </div>
            </div>
        </div>
    );
}

export default About;
