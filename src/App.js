import React from 'react';
import './App.css';

function App() {
    return (
        <div className="root">
            <div className="background-image"></div>
            <div className="title">
                <h1>Logs4Dogs</h1>
                <p>Think - Plan - Do</p>
            </div>
            <div className="content">
                <div className="about">
                    <p>
                        Logs4Dogs is a app that will help you be a better trainer by:
                    </p>
                    <ul>
                        <li>helps plan your training</li>
                        <li>collect data form your training sessions</li>
                        <li>analyse your training data</li>
                    </ul>
                    <div className="demo-button-container">
                    <div className="demo-button">
                        <button className="button">Want to watch a demo?</button>
                    </div>
                    </div>
                </div>
                <div className="buttons">
                    <button className="button button-inverted">Join beta testing iOS</button>
                    <button className="button button-inverted">Join beta testing Android</button>
                </div>
            </div>
        </div>
    );
}

export default App;
