import React, {Component} from 'react';
import mainLogo from './assets/mainlogo.png';
import homepage from './assets/homepage.jpg';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <main>
                    <div className="header">
                        <div className="App-header">
                            <img src={mainLogo} className="App-logo" alt="logo"/>
                        </div>
                        <nav className="header-navigation">
                            <a href="/html/">پارسـی</a> |
                            <a href="/css/">استـخدام</a> |
                            <a href="/js/">En</a>
                            <a href="/jquery/">Login</a>
                        </nav>
                    </div>
                 <div className="left-menu">
                     <ul className="left-menu-panel">
                         <li>
                             <a>
                                 <img src={logo}  alt="logo"/>
                                <label>
                                    What we do
                                </label>
                             </a>
                         </li>
                         <li>
                             <a>
                                 <img src={logo}  alt="logo"/>
                                 <label>
                                     What we do
                                 </label>
                             </a>
                         </li>
                         <li>
                             <a>
                                 <img src={logo}  alt="logo"/>
                                 <label>
                                     What we do
                                 </label>
                             </a>
                         </li>
                         <li>
                             <a>
                                 <img src={logo}  alt="logo"/>
                                 <label>
                                     What we do
                                 </label>
                             </a>
                         </li>
                         <li>
                             <a>
                                 <img src={logo}  alt="logo"/>
                                 <label>
                                     What we do
                                 </label>
                             </a>
                         </li>
                     </ul>
                     <div className="main-panel">
                         <img src={homepage} className="home-slider" alt="logo"/>
                     </div>
                 </div>
                  <footer className="footer">All rights reserved - Radhoosh Dade Negar - 2017</footer>
                </main>
            </div>
        );
    }
}

export default App;
