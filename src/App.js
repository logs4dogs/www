import React from 'react';
import './App.css';
import logo from './images/l4d-logo.png';

function App() {
    return (
        <div className="App">

            <div className="grid-container">
                <div className="logo">
                    <img src={logo}/>
                </div>
                <div className="title">
                    <h1>Logs4Dogs</h1>
                    <p>Think - Plan - Do</p>
                </div>
                <div className="about">
                    <p>
                        Logs4Dogs is a app that will help you be a better trainer by:
                    </p>
                    <ul>
                        <li>helps plan your training</li>
                        <li>collect data form your training sessions</li>
                        <li>analyse your training data</li>
                    </ul>
                    <p>In short, the app will help to monitoring your progress in training.</p>
                    <div className="demo-button-container">
                        <div className="demo-button">
                            <button className="button button-no-spacing">Want to watch a demo?</button>
                        </div>
                    </div>
                </div>
                <div className="beta">
                    <button className="button button-inverted button-spacing">Join beta testing iOS</button>
                    <button className="button button-inverted button-spacing">Join beta testing Android</button>
                </div>
                <div className="sponsor">
                    <a href="https://www.simonprins.com/">
                        <div className="sponsor-logo-container">
                            <img src="https://www.simonprins.com/wp-content/uploads/Logo-Simon-ACT-websitelogo.png"
                                 alt="ACT logo"/>
                        </div>
                    </a>
                </div>
                <div className="copyright">
                    <p className="code">
                        Logs4Dogs - Copyright © 2019 Frode Sjovatsen.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default App;
