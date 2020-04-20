import React, { Component } from "react";

class Navbar extends Component {
    state = {
        stateContent: "Something Meaningful"
    };


    render() {
        return (
            <>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">RTS Labs React Exercise</span>
                </nav>
            </>
        )
    }
}

export default Navbar;

