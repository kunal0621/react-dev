import React, { Component } from "react";
import '../../App.css';
class ErrorPage extends Component {

    render() {
        return (
            <div className="App">
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