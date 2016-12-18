import React, {Component} from "react";

export default class About extends Component {
    render() {
        return (
            <div>
                <header className="intro-header" style={{"backgroundImage": "url('images/about-bg.jpg')"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                                <div className="page-heading">
                                    <h1>About Me</h1>
                                    <hr className="small"/>
                                    <span className="subheading">This is what I do.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container text-center">
                    <a href="https://beacelee.com" target="_blank">This is what I do.</a>
                </div>
            </div>
        )
    }
}
