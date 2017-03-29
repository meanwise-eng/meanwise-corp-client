import React, { Component } from "react";

export default class NavBar extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="globalnav-container">
                    <a href="#" className="globalnav-icon">
                        <img className="logo" src="/assets/images/m-logo.svg" alt="Meanwise Inc."/> 
                    </a>
                    <div className="globalnav-item globalnav-home-link">
                        <a className="globalnav-link" href="#"><span>About</span></a>
                    </div>
                    <div className="globalnav-item globalnav-Blog-link">
                        <a className="globalnav-link" href="#"><span>Blog</span></a>
                    </div>
                </div>
            </div>
        );
    }
}