import React, {Component} from "react";
import _ from "lodash";
export default class BookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: {
                //专著、论文集、学术论文、报告
                bookType: "M",
                author: "",
                name: "",
                address: "",
                bookPerson: "",
                bookYear: "",
                pageStart: 0,
                pageEnd: 0,
                //期刊文章
                journalAuthor: "",
                journalTitle: "",
                journalName: "",
                journalYear: "",
                journalPaper: "",
                journalStage: "",
                journalPageStart: 0,
                journalPageEnd: 0,
                //报纸文章
                paperAuthor: "",
                paperTitle: "",
                paperName: "",
                paperDate: "",
                paperTimes: "",
                //国际、国家标准
                standardNo: "",
                standardName: "",
                //专利
                patentPerson: "",
                patentName: "",
                patentCountry: "",
                patentNo: "",
                patentDate: "",
                //电子文献
                ePerson: "",
                eName: "",
                eUrl: "",
                eStartDate: "",
                eEndDate: "",
                //各种未定义的文献
                unPerson: "",
                unName: "",
                unAddress: "",
                unAuthor: "",
                unYear: ""
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
        let tempString = "";
        switch (model.bookType) {
            case "M":
            case "C":
            case "D":
            case "R":
                tempString = model.name + "." + model.author + "[" + model.bookType + "]." + model.address + ":" + model.bookPerson + ", " + model.bookYear + "." + model.pageStart + "-" + model.pageEnd;
                break;
            case "J":
                tempString = model.journalAuthor + ". " + model.journalTitle + "[" + model.bookType + "]." + model.journalName + ", " + model.journalYear + "," + model.journalPaper + "(" + model.journalStage + "): " + model.journalPageStart + "-" + model.journalPageEnd + ".";
                break;
            case "N":
                tempString = model.paperAuthor + "." + model.paperTitle + "[" + model.bookType + "]." + model.paperName + ", " + model.paperDate + "(" + model.paperTimes + ")."
                break;
            case "S":
                tempString = model.standardNo + "," + model.standardName + "[" + model.bookType + "].";
                break;
            case "P":
                tempString = model.patentPerson + "." + model.patentName + "[" + model.bookType + "]." + model.patentCountry + ": " + model.patentNo + "," + model.patentDate + ".";
                break;
            case "EB/OL":
                if(model.eEndDate.toString().length === 0 ) {
                    tempString = model.ePerson + "." + model.eName + "[" + model.bookType + "]." + model.eUrl + "," + model.eStartDate;
                } else if (model.eStartDate.toString().length === 0 ) {
                    tempString = model.ePerson + "." + model.eName + "[" + model.bookType + "]." + model.eUrl + "," + model.eEndDate;
                }else if(model.eEndDate.toString().length === 0 && model.eStartDate.toString().length === 0 ) {
                    tempString = model.ePerson + "." + model.eName + "[" + model.bookType + "]." + model.eUrl + ".";
                }else {
                    tempString = model.ePerson + "." + model.eName + "[" + model.bookType + "]." + model.eUrl + "," + model.eStartDate + "-" + model.eEndDate;
                }
                break;
            case "Z":
                tempString = model.unPerson + "." + model.unName + "[" + model.bookType + "]." + model.unAddress + ": " + model.unAuthor + "," + model.unYear;
                break;
            default:
                //nothing
        }
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
                                <option value="J">期刊文章</option>
                                <option value="N">报纸文章</option>
                                <option value="S">国际、国家标准</option>
                                <option value="P">专利</option>
                                <option value="EB/OL">电子文献</option>
                                <option value="Z">各种未定义类型的文献</option>
                            </select>
                    </div>

                    {
                        (() => {
                            switch (model.bookType) {
                                case "M":
                                case "C":
                                case "D":
                                case "R":
                                    return (
                                        <div>
                                            <p>专著、论文集、学位论文、报告：</p>
                                            <div className="form-group">
                                                <label htmlFor="title">主要责任者</label>
                                                <input type="text" className="form-control" placeholder="主要责任者" value={model.author} onChange={this.onChangeField('author').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="abstract">文献题名</label>
                                                <input type="text" className="form-control" placeholder="文献题名" value={model.name} onChange={this.onChangeField('name').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="abstract">出版地</label>
                                                <input type="text" className="form-control" placeholder="出版地" value={model.address} onChange={this.onChangeField('address').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="abstract">出版者</label>
                                                <input type="text" className="form-control" placeholder="出版者" value={model.bookPerson} onChange={this.onChangeField('bookPerson').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="abstract">出版年</label>
                                                <input type="text" className="form-control" placeholder="出版年" value={model.bookYear} onChange={this.onChangeField('bookYear').bind(this)}/>
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
                                        </div>
                                    )
                                case "J":
                                    return(
                                        <div>
                                            <p>期刊文章：</p>
                                            <div className="form-group">
                                                <label htmlFor="title">主要责任者</label>
                                                <input type="text" className="form-control" placeholder="主要责任者" value={model.journalAuthor} onChange={this.onChangeField('journalAuthor').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">文献提名</label>
                                                <input type="text" className="form-control" placeholder="文献提名" value={model.journalTitle} onChange={this.onChangeField('journalTitle').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">刊名</label>
                                                <input type="text" className="form-control" placeholder="刊名" value={model.journalName} onChange={this.onChangeField('journalName').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">年</label>
                                                <input type="text" className="form-control" placeholder="年" value={model.journalYear} onChange={this.onChangeField('journalYear').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">卷</label>
                                                <input type="text" className="form-control" placeholder="卷" value={model.journalPaper} onChange={this.onChangeField('journalPaper').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">期</label>
                                                <input type="text" className="form-control" placeholder="期" value={model.journalStage} onChange={this.onChangeField('journalStage').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="abstract">起始页码</label>
                                                <div className="input-group">
                                                  <input type="text" className="form-control" value={model.journalPageStart} onChange={this.onChangeField('journalPageStart').bind(this)}/>
                                                  <span className="input-group-addon">页</span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="abstract">终止页码</label>
                                                <div className="input-group">
                                                  <input type="text" className="form-control" value={model.journalPageEnd} onChange={this.onChangeField('journalPageEnd').bind(this)}/>
                                                  <span className="input-group-addon">页</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                case "N":
                                    return (
                                        <div>
                                            <p>报纸文章：</p>
                                            <div className="form-group">
                                                <label htmlFor="title">主要责任者</label>
                                                <input type="text" className="form-control" placeholder="主要责任者" value={model.paperAuthor} onChange={this.onChangeField('paperAuthor').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">文献提名</label>
                                                <input type="text" className="form-control" placeholder="文献提名" value={model.paperTitle} onChange={this.onChangeField('paperTitle').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">报纸名</label>
                                                <input type="text" className="form-control" placeholder="报纸名" value={model.paperName} onChange={this.onChangeField('paperName').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">出版日期</label>
                                                <input type="text" className="form-control" placeholder="出版日期" value={model.paperDate} onChange={this.onChangeField('paperDate').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">版次</label>
                                                <input type="text" className="form-control" placeholder="版次" value={model.paperTimes} onChange={this.onChangeField('paperTimes').bind(this)}/>
                                            </div>
                                        </div>
                                    )
                                case "S":
                                    return (
                                        <div>
                                            <p>国际、国家标准：</p>
                                            <div className="form-group">
                                                <label htmlFor="title">标准编号</label>
                                                <input type="text" className="form-control" placeholder="标准编号" value={model.standardNo} onChange={this.onChangeField('standardNo').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">标准名称</label>
                                                <input type="text" className="form-control" placeholder="标准名称" value={model.standardName} onChange={this.onChangeField('standardName').bind(this)}/>
                                            </div>
                                        </div>
                                    )
                                case "P":
                                    return (
                                        <div>
                                            <p>专利：</p>
                                            <div className="form-group">
                                                <label htmlFor="title">专利所有者</label>
                                                <input type="text" className="form-control" placeholder="专利所有者" value={model.patentPerson} onChange={this.onChangeField('patentPerson').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">标准名称</label>
                                                <input type="text" className="form-control" placeholder="标准名称" value={model.patentName} onChange={this.onChangeField('patentName').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">专利国别</label>
                                                <input type="text" className="form-control" placeholder="专利国别" value={model.patentCountry} onChange={this.onChangeField('patentCountry').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">专利号</label>
                                                <input type="text" className="form-control" placeholder="专利号" value={model.patentNo} onChange={this.onChangeField('patentNo').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">出版日期</label>
                                                <input type="text" className="form-control" placeholder="出版日期" value={model.patentDate} onChange={this.onChangeField('patentDate').bind(this)}/>
                                            </div>
                                        </div>
                                    )
                                case "EB/OL":
                                    return(
                                        <div>
                                            <p>电子文献：</p>
                                            <div className="form-group">
                                                <label htmlFor="author">电子文献类型</label>
                                                    <select className="form-control" value={model.eType} onChange={this.onChangeField('eType').bind(this)}>
                                                        <option value="M">一般网址</option>
                                                        <option value="C">网上电子公告</option>
                                                        <option value="D">网上期刊</option>
                                                        <option value="R">联机网上数据库</option>
                                                        <option value="J">磁带数据库</option>
                                                        <option value="">光盘图书</option>
                                                        <option value="N">光盘数据库</option>
                                                    </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">主要责任者</label>
                                                <input type="text" className="form-control" placeholder="主要责任者" value={model.ePerson} onChange={this.onChangeField('ePerson').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">电子文献题名</label>
                                                <input type="text" className="form-control" placeholder="电子文献题名" value={model.eName} onChange={this.onChangeField('eName').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">电子文献的出处或可获得地址</label>
                                                <input type="text" className="form-control" placeholder="电子文献的出处或可获得地址" value={model.eUrl} onChange={this.onChangeField('eUrl').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">发表或更新日期</label>
                                                <input type="text" className="form-control" placeholder="发表或更新日期" value={model.eStartDate} onChange={this.onChangeField('eStartDate').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">引用日期</label>
                                                <input type="text" className="form-control" placeholder="引用日期" value={model.eEndDate} onChange={this.onChangeField('eEndDate').bind(this)}/>
                                            </div>
                                        </div>
                                    )
                                case "Z":
                                    return(
                                        <div>
                                            <p>各种未定义类型的文献：</p>
                                            <div className="form-group">
                                                <label htmlFor="title">主要责任者</label>
                                                <input type="text" className="form-control" placeholder="主要责任者" value={model.unPerson} onChange={this.onChangeField('unPerson').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">文献题名</label>
                                                <input type="text" className="form-control" placeholder="文献题名" value={model.unName} onChange={this.onChangeField('unName').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">出版地</label>
                                                <input type="text" className="form-control" placeholder="出版地" value={model.unAddress} onChange={this.onChangeField('unAddress').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">出版者</label>
                                                <input type="text" className="form-control" placeholder="出版者" value={model.unAuthor} onChange={this.onChangeField('unAuthor').bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="title">出版年</label>
                                                <input type="text" className="form-control" placeholder="出版年" value={model.unYear} onChange={this.onChangeField('unYear').bind(this)}/>
                                            </div>
                                        </div>
                                    )
                                default:
                                    //nothing

                            }
                        })()
                    }

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
