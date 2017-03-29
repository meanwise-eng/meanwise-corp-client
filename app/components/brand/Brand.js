import React, { Component } from "react";

export default class Brand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: undefined
        }
    }
    render() {
        return (
            <div className="content-wrapper">
                <div className="phone">
                    <img src="/assets/images/phone.svg" alt="Phone"/>
                </div>
                <div className="action">
                    <h2>Request Early Access</h2>
                    <input 
                        type="text" 
                        placeholder="Leave your email address here and hit enter" 
                        name="email" 
                        value={this.state.email} />
                </div>
            </div>
        );
    }
}