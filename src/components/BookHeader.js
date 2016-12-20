import React, {Component} from "react";

export default class BookHeader extends Component {
    render() {
        return (
            <header className="intro-header book-header" style={{"backgroundImage": "url('images/home-bg.jpg')"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <div className="site-heading">
                                <h1>React Clean Blog</h1>
                                <hr className="small"/>
                                <span className="subheading">文献格式生成</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
