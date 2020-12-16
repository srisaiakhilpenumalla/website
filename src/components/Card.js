import React from 'react';
import CardComponent from './CardComponent';
import './Card.css';
import PostData from '../data.json';
import CardTest from './Cardtest';

function Card() {
    return (
        <div className="cards">
            <h1>Welcome</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {PostData.map((postdata, index) => {
                            return (
                                // <CardComponent
                                //     src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9"
                                //     text={postdata.projectShortDescription}
                                //     label={postdata.projectName}
                                //     path={postdata.projectId}
                                // />
                                <CardTest
                                    link="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9"
                                    text={postdata.projectShortDescription}
                                    label={postdata.projectName}
                                    path={postdata.projectId}
                                />
                            );
                        })}
                    </ul>

                    {/* <ul className="cards__items">
                        <CardComponent
                            src="/src/components/yelp-1.png"
                            text="YelpCamp"
                            label="yelpcamp"
                            path="/yelpcamp"
                        />
                        <CardComponent
                            src="../images/react-1.png"
                            text="React Colors"
                            label="reactcolors"
                            path="/react-colors"
                        />
                    </ul> */}

                    {/* <ul className="cards__items">
                        <CardComponent
                            src="../images/chat-1.png"
                            text="Chat App"
                            label="chatapp"
                            path="/chat-app"
                        />
                        <CardComponent
                            src="../images/covid-2.png"
                            text="Covid Tracker"
                            label="covidtracker"
                            path="/covid-tracker"
                        />
                        <CardComponent
                            src="../images/angcrud-3.png"
                            text="Angular Web Api"
                            label="angularwebapi"
                            path="/angular-web-api"
                        />
                    </ul> */}
                </div>
            </div>
        </div>
    );
}

export default Card;
