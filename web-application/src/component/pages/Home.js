import React, {Component} from "react";
import '../../App.css';
import logo from '../../jairamlogo.png';
import Example from '../../style/offcanvas/offcanvas';
import DataTable from '../../style/table/table'

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

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
                <section className="header">
                <h3 className="home-header">JaiRam Groups</h3>
                </section>
                <Example/>
                <div className="tableClass">
                    <DataTable/>
                </div>
            </div>
         );
    }
}
 
export default HomePage;