import React, { Component } from 'react';
import './header.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Header extends Component {
render(){
    return <header className="header">
        <h1 className="header-title animate-pop-in">Welcome to the football journey!</h1>
        <h3 className="header-subtitle animate-pop-in">It's a place where football is at hand.</h3>
        <AnchorLink href="#livescores">
        <button className="header-slide-down buttonStyle">Go on!</button>
        </AnchorLink>
    </header>;
}
}

export default Header;