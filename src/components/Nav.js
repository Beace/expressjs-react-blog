import React, {Component} from "react";
import {Route, IndexRoute, Link} from "react-router"
export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            Menu <i className="fa fa-bars"></i>
                        </button>
                        <Link className="navbar-brand" to = "/">HOME</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to = "/">HOME</Link></li>
                            <li><Link to = "/about">about</Link></li>
                            <li><Link to = "/contact">contact</Link></li>
<<<<<<< HEAD
                            <li><Link to = "/book">book</Link></li>                            
=======
>>>>>>> 2284341c131389bae2448f89056c3acea9475e54
                            <li><Link to = "/work">work</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
