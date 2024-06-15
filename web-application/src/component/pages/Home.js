import React, {Component} from "react";
import '../../App.css';
import Example from '../../style/offcanvas/offcanvas';
import DataTable from '../../style/table/table'

class HomePage extends Component {

    render() { 
        return ( 
            <div className="App">
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