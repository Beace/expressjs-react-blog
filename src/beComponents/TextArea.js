import React, { Component } from "react";
import Modal from "../components/Modal.js";
export default class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: {
        author: "beace",
        abstract: "",
        title: "",
        content: ""
      },
      errors: {
        author: [],
        abstract: [],
        title: [],
        content: []
      }
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    var testEditor;
    testEditor = editormd("myEditor", {
      width: "100%",
      height: 640,
      emoji: true,
      path: "../../bower_components/editor.md/lib/"
    });
  }

  onChangeField(fieldName) {
    return function(e) {
      let value = e.target.value;
      let model = this.state.model;
      model[fieldName] = value;

      this.setState({
        model: model
      });
    };
  }

  submitHandler(e) {
    e.preventDefault();
    let _this = this,
      model = this.state.model;
    model.content = $(".editormd-markdown-textarea").val();

    for (var i in model) {
      if (model[i] == "" || model[i].toString().length === 0) {
        switch (i) {
          case "author":
            alert("作者未填写");
            break;
          case "abstract":
            alert("摘要未填写");
            break;
          case "title":
            alert("标题未填写");
            break;
          case "content":
            alert("内容未填写");
            break;
          default:
          // nothing
        }
        return false;
      }
    }

    fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(model)
    }).then(
      res => {
        if (res.ok) {
          $("#myModal").modal("show");
          $(".editormd-markdown-textarea").text("");
          _this.setState({
            model: {
              author: "beace",
              abstract: "",
              title: "",
              content: ""
            }
          });
        } else if (res.status === 401) {
          alert("Oops! You are not authorized.");
        }
      },
      function(e) {
        alert("Error submitting form!");
      }
    );
  }

  render() {
    let model = this.state.model;
    return (
      <div className="container">
        <form role="form">
          <div className="form-group">
            <label htmlFor="author">作者</label>
            <input
              type="text"
              className="form-control"
              id="author"
              placeholder="作者"
              value={model.author}
              onChange={this.onChangeField("author").bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">标题</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="标题"
              value={model.title}
              onChange={this.onChangeField("title").bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="abstract">摘要</label>
            <input
              type="text"
              className="form-control"
              id="abstract"
              placeholder="摘要"
              value={model.abstract}
              onChange={this.onChangeField("abstract").bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">内容</label>
            <div id="myEditor" />
          </div>
          <button className="btn btn-default" onClick={this.submitHandler}>
            提交
          </button>
        </form>
        <Modal />
      </div>
    );
  }
}
