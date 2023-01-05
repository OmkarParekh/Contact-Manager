import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-st  navbar-dark  bg-primary">
                    <div class='container'>
                        <a class="navbar-brand text-white" href="/">Contact Manager</a>
                        <button class="navbar-toggler "
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto ">
                                <li class="nav-link ">
                                    <Link class='text-white' to='/'>Home</Link>
                                </li>
                                <li class="nav-link">
                                    <Link class='text-white' to='/add'>Add</Link>
                                </li>
                                <li class="nav-link">
                                    <Link class='text-white' to='/About'>About</Link>
                                </li>
                                {/* <li class="nav-link">
                                    <Link class='text-white' to='/Visualize'>Visualize</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
