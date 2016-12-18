import React, {Component} from "react";


export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: {
                author: null,
                content: null,
                title: null,
                date: null
            }
        }
    }
    componentDidMount() {
        let _this = this;
        let id = this.props.params.id;
        fetch('https://beace.tech/post/' + id).then(function(response) {
            return response.json().then(function(json) {
                if(json) {
                    _this.setState({
                        model: json
                    })
                } else {
                    throw error;
                }
            });
        })
    }
    render() {
        let model = this.state.model;
        return (
            <div>
                <header className="intro-header post-header-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                                <div className="post-heading">
                                    <h1>{model.title}</h1>
                                    <h2 className="subheading">{model.abstract}</h2>
                                    <span className="meta">Posted by <a href="#">{model.author}</a> on {model.date ? model.date.substring(0,10) : ""}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                <article>
                    <div className="container">
                        <div className="row">
                            {
                                model.content ? <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1" dangerouslySetInnerHTML={{__html: model.content}}></div> :
                                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">Loading ... </div>
                            }
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
