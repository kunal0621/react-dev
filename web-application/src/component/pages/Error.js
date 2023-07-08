import React, { Component } from "react";
import '../../App.css';
import logo from '../../jairamlogo.png';

class ErrorPage extends Component {

    render() {
        return (
            <div className="App">
                <div className="header">
                    <nav className="navbarc navbar-dark bg-dark">
                        <button className="navbar-brandc title">
                            <img className="logo-image" src={logo} alt=""></img>
                        </button>
                    </nav>
                </div>
                <section className="page-not-found">
                    <h1 className="page-not-found_heading">404 Error</h1>
                    <h2 className="page-not found_sub-heading">Page not found</h2>
                    <p className="page-not-found_content">The page you are looking for might have been removed, or you are not authorised</p>
                </section>
            </div>
        )
    }
}
export default ErrorPage;