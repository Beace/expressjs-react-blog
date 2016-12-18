import React, {Component} from "react";
import _ from "lodash";
export default class BookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: {
                bookType: "N",
                author: "",
                name: "",
                address: "",
                bookPerson: "",
                bookYear: "",
                pageStart: 0,
                pageEnd: 0
            },
            bookModel: []
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
    }

    onChangeField(fieldName) {
        return function(e) {
            let value = e.target.value;
            let model = this.state.model;
            model[fieldName] = value;

            this.setState({
                model: model
            })
        }
    }

    submitHandler(e) {
        e.preventDefault();
        let model = this.state.model;
        console.log(model);
        let bookModel = this.state.bookModel;
        let tempString = model.name + "." + model.author + "[" + model.bookType + "]." + model.address + ":" + model.bookPerson + "," + model.bookYear + "." + model.pageStart + "-" + model.pageEnd;
        bookModel.push({
            id: _.uniqueId(),
            book: tempString
        });
        this.setState({
            bookModel: bookModel
        })
    }

    resetHandler(e) {
        e.preventDefault();
        let bookModel = this.state.bookModel;
        this.setState({
            bookModel: []
        })
    }
    render() {
        let model = this.state.model;
        let bookModel = this.state.bookModel;
        return (
            <div className="container">
                <form role="form">
                    <h3>添加新文献</h3>
                    <div className="form-group">
                        <label htmlFor="author">文献种类</label>
                            <select className="form-control" value={model.bookType} onChange={this.onChangeField('bookType').bind(this)}>
                                <option value="M">专著</option>
                                <option value="C">论文集</option>
                                <option value="D">学位论文</option>
                                <option value="R">报告</option>
                                <option value="">期刊文章</option>
                                <option value="">论文集中的析出文献</option>
                                <option value="">报纸文章</option>
                                <option value="">国际、国家标准</option>
                                <option value="">专利</option>
                                <option value="">电子文献</option>
                                <option value="">各种未定义类型的文献</option>
                            </select>
                    </div>
                    <p>专著、论文集、学位论文、报告：</p>
                    <div className="form-group">
                        <label htmlFor="title">主要责任者</label>
                        <input type="text" className="form-control" id="author" placeholder="主要责任者" value={model.author} onChange={this.onChangeField('author').bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="abstract">文献题名</label>
                        <input type="text" className="form-control" id="abstract" placeholder="文献题名" value={model.name} onChange={this.onChangeField('name').bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="abstract">出版地</label>
                        <input type="text" className="form-control" id="abstract" placeholder="出版地" value={model.address} onChange={this.onChangeField('address').bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="abstract">出版者</label>
                        <input type="text" className="form-control" id="abstract" placeholder="出版者" value={model.bookPerson} onChange={this.onChangeField('bookPerson').bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="abstract">出版年</label>
                        <input type="text" className="form-control" id="abstract" placeholder="出版年" value={model.bookYear} onChange={this.onChangeField('bookYear').bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="abstract">起始页码</label>
                        <div className="input-group">
                          <input type="text" className="form-control" value={model.pageStart} onChange={this.onChangeField('pageStart').bind(this)}/>
                          <span className="input-group-addon">页</span>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="abstract">终止页码</label>
                        <div className="input-group">
                          <input type="text" className="form-control" value={model.pageEnd} onChange={this.onChangeField('pageEnd').bind(this)}/>
                          <span className="input-group-addon">页</span>
                        </div>
                    </div>
                    <button className="btn btn-default" onClick={this.submitHandler}>提交</button>
                    <button className="btn btn-danger" style={{marginLeft: "20px"}} onClick={this.resetHandler}>清空文献数据</button>
                </form>
                <h3>以下为已选择的文献</h3>
                {
                    bookModel.length === 0 ? "空" :
                    _.map(bookModel, function(item) {
                        let key = _.uniqueId();
                        return (
                            <p key = {item.id}>
                                {bookModel.indexOf(item) + 1}.&nbsp;{item.book}
                            </p>
                        )
                    })
                }
            </div>
        )
    }
}
