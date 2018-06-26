// Untouched bootstrap nav code
import React from "react";
import "./Navbar.css";


const Navbar = props => (
    // <div className="navbar">{props.children}>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"> <p class="intro">Architecture Game</p> <p>Your Current Score is : </p> {props.currentScore} <p>The Highest Score is : </p> {props.highScore}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

        </div>
    </nav>


);

export default Navbar;