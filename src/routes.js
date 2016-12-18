import React , {Component} from "react"
import {Route, IndexRoute, Link, browserHistory} from "react-router"
import Nav from "./components/Nav.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Contacts from "./components/Contacts.js"
import Post from "./components/Post.js"
import Abouts from "./components/About.js"
import TextArea from "./beComponents/TextArea.js";
import _ from "lodash";
class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                {this.props.children}
                <hr/>
                <Footer/>
            </div>
        )
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            models: []
        }
    }

    componentDidMount() {
        let _this = this;
        fetch('http://localhost:3000/articles').then(function(response) {
            return response.json().then(function(json) {
                if(json) {
                    _this.setState({
                        models: json
                    })
                } else {
                    throw error;
                }
            });
        })
    }

    detailHandler(model) {
        let id = model._id;
        browserHistory.push("/article/" + id);
    }

    render(){
        let models = this.state.models ? this.state.models : [];
        let _this = this;
        console.log(models);
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            {
                                models.length === 0 ? <div className="post-preview">
                                    loading ......
                                </div> : _.map(models, function(item) {
                                    let key = item._id;
                                    return (
                                        <div key={key}>
                                            <div className="post-preview">
                                                <a onClick={_this.detailHandler.bind(this, item)}>
                                                    <h2 className="post-title">
                                                        {item.title}
                                                    </h2>
                                                    <h3 className="post-subtitle">{item.abstract}</h3>
                                                </a>
                                                <p className="post-meta">Posted by <a href="#">{item.author}</a> on {item.date ? item.date.substring(0,10) : Date.now()}</p>
                                            </div>
                                            <hr/>
                                        </div>
                                    )
                                })
                            }
                            <ul className="pager">
                                <li className="next">
                                    <Link to="/work">Older Posts &rarr;</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class ArticleList extends Component {
    render() {
        return (
            <div>
                <Abouts/>
            </div>
        )
    }
}

//文章详情
// class Article extends Component {
//     render() {
//         return (
//             <div>
//                 <Post/>
//             </div>
//         )
//     }
// }

class About extends Component {
    render() {
        return (
            <div>
                <Abouts/>
            </div>
        )
    }
}



class Contact extends Component {
    render() {
        return (
            <div>
                <div>
                    <Contacts/>
                </div>
            </div>
        )
    }
}

class NoMatch extends Component {
    render () {
        return (
            <div>
                <Header/>
                <div className="container text-center">404 NOMATCH</div>
            </div>
        )
    }
}

class Admin extends Component {
    render() {
        return (
            <div>
                <Header/>
                <TextArea/>
            </div>
        )
    }
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="article">
            <Route path=":id" component={Post}/>
        </Route>
        <Route path="about" component={About}/>
        <Route path="contact" component={Contact}/>
        <Route path="admin" component={Admin}/>
        <Route path="*" component={NoMatch}/>
    </Route>
)
