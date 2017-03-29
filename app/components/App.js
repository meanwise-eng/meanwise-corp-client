import React, { Component } from "react";
import NavBar from "./common/NavBar";
import Brand from "./brand/Brand";
import Footer from "./common/Footer"

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div>
                    <Brand />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}