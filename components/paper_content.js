import React from 'react';
import { Link } from 'react-router';

import $ from 'jquery';
import common_getDomain from '../modules/get_domain';

class PaperContent extends React.Component {
    constructor() {
        super();

        this.updateData = this.updateData.bind(this);

        this.state = {
            paperTitle  : '',
            paperDate   : '',
            paperTag    : '',
            paperContent: '',
            prevPaper   : {
                id   : '',
                title: ''
            },
            nextPaper: {
                id   : '',
                title: ''
            }
        };
    };

    updateData() {
        const domain         = common_getDomain();
        const jsonData       = this.props.currentPaper;
        const currentPaperId = jsonData.currentPaperId;
        const requestUrl     = domain + '/getPaper.node';

        var self = this;

        $.post(requestUrl, jsonData, function(data) {
            const paperList  = data;
            const paperCount = paperList.length;

            if (paperCount == 2) {
                if (paperList[0].id == currentPaperId) {
                    self.setState({
                        paperTitle  : paperList[0].title,
                        paperDate   : paperList[0].date,
                        paperTag    : (paperList[0].subtag ? (paperList[0].tag + '，' + paperList[0].subtag) : paperList[0].tag),
                        paperContent: paperList[0].content,
                        prevPaper: {
                            id   : currentPaperId,
                            title: '已经是第一篇了！没有上一篇了！'
                        },
                        nextPaper: {
                            id   : paperList[1].id,
                            title: paperList[1].title
                        }
                    });
                }
                else {
                    self.setState({
                        paperTitle  : paperList[1].title,
                        paperDate   : paperList[1].date,
                        paperTag    : (paperList[1].subtag ? (paperList[1].tag + '，' + paperList[1].subtag) : paperList[1].tag),
                        paperContent: paperList[1].content,
                        prevPaper: {
                            id   : paperList[0].id,
                            title: paperList[0].title
                        },
                        nextPaper: {
                            id   : currentPaperId,
                            title: '已经是最后一篇了！没有下一篇了！'
                        }
                    });
                }
            }
            else {
                self.setState({
                    paperTitle  : paperList[1].title,
                    paperDate   : paperList[1].date,
                    paperTag    : (paperList[1].subtag ? (paperList[1].tag + '，' + paperList[1].subtag) : paperList[1].tag),
                    paperContent: paperList[1].content,
                    prevPaper: {
                        id   : paperList[0].id,
                        title: paperList[0].title
                    },
                    nextPaper: {
                        id   : paperList[2].id,
                        title: paperList[2].title
                    }
                });
            }

            $('.paper-content').append(self.state.paperContent);
        });
    };

    componentDidMount() {
        this.updateData();
    };

    componentDidUpdate() {
        this.updateData();
    }

    render() {
        const currentPaperId = this.props.currentPaper.currentPaperId;

        return (
            <div 
                id = "paperContent" 
                className = "content-block hidden"
                data-paperId = { currentPaperId }
            >
                <div className = "paper-title">
                    <h1>
                        { this.state.paperTitle }
                    </h1>
                </div>
                <div className = "paper-subtitle">
                    <h3>
                        <span className = "subtitle-date">
                            <i className = "fa fa-calendar"></i>&nbsp;
                            <span className = "date-val">{ this.state.paperDate }</span>
                        </span>
                        <span className = "subtitle-tags">
                            <i className = "fa fa-tags"></i>&nbsp;
                            <span className = "tags-val">{ this.state.paperTag }</span>
                        </span>
                    </h3>
                </div>
                <hr/>
                <div className = "paper-content"></div>
                <hr className = "footer-hr"/>
                <div className = "paper-footer row">
                    <div className = "col-xs-6 pre-title">
                        <i className = "fa fa-arrow-circle-o-left pull-left"></i>
                        <Link 
                            id = "prePaper"
                            title = { this.state.prevPaper.title }
                            to = {{
                                pathname: '/paperId=' + this.state.prevPaper.id,
                                state   : {
                                    currentPaperId: this.state.prevPaper.id
                                }
                            }}
                        >
                            { this.state.prevPaper.title }
                        </Link>
                    </div>
                    <div className = "col-xs-6 next-title">
                        <Link 
                            id = "nextPaper" 
                            title = { this.state.nextPaper.title }
                            to = {{
                                pathname: '/paperId=' + this.state.nextPaper.id,
                                state   : {
                                    currentPaperId: this.state.nextPaper.id
                                }
                            }}
                        >
                            { this.state.nextPaper.title }
                        </Link>
                        <i className = "fa fa-arrow-circle-o-right pull-right"></i>
                    </div>
                </div>
            </div>
        );
    };
};

export default PaperContent;