import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960) setButton(false);
        else setButton(true);
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-brand">
                        Akki
                    </Link>
                </div>
                <ul className="nav-menu active">
                    <li className="nav-item">
                        <Link to="/resume" className="nav-links">
                            Resume
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links">
                            About
                        </Link>
                    </li>
                </ul>
                {button && (
                    <Button buttonStyle="btn--outline">
                        <a
                            href="mailto:penumallasrisaiakhil@gmail.com"
                            className="mail-link"
                        >
                            Mail
                        </a>
                    </Button>
                )}
            </nav>
        </>
    );
}

export default NavBar;
