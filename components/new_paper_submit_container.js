import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import common_formatTime from '../modules/common_format_time';
import common_getDomain  from '../modules/common_get_domain';

class SubmitContainer extends React.Component {
    constructor() {
        super();

        this.insertNewPaper = this.insertNewPaper.bind(this);
    };

    insertNewPaper(e) {
        var $paperTitle     = ReactDOM.findDOMNode(this.refs.paperTitle),
            $paperTag       = ReactDOM.findDOMNode(this.refs.paperTag),
            $paperSubtag    = ReactDOM.findDOMNode(this.refs.paperSubtag),
            $paperAbstract  = ReactDOM.findDOMNode(this.refs.paperAbstract),
            $paperPermitKey = ReactDOM.findDOMNode(this.refs.paperPermitKey);
        
        const paperTitle     = $paperTitle.value;
        const paperTag       = $paperTag.value;
        const paperSubtag    = $paperSubtag.value;
        const paperAbstract  = $paperAbstract.value;
        const paperPermitKey = $paperPermitKey.value;

        if (!Boolean(paperTitle) || !Boolean(paperTag) || !Boolean(paperAbstract) || !Boolean(paperPermitKey)) {
            console.info('miss something');
            return false;
        }
        /* check permit key */
        if (paperPermitKey !== '大佬的密钥') {
            console.info('wrong permit key value');
            return false;
        }

        const tmpTime     = new Date();
        const currentTime = common_formatTime(tmpTime.getFullYear() + '-' + (parseInt(tmpTime.getMonth()) + 1) + '-' + tmpTime.getDate() + ' ' + tmpTime.getHours() + ':' + tmpTime.getMinutes() + ':' + tmpTime.getSeconds(), 'full');
        const jsonData = {
                title       : paperTitle,
                tag         : paperTag,
                subtag      : paperSubtag,
                publish_data: currentTime,
                timeline    : currentTime.slice(0, 7),
                abstract    : paperAbstract,
                content     : this.props.contentList.join('')
            };
        
        /* submit one paper and save */
        const domain     = common_getDomain();
        const requestUrl = domain + '/addPaper.node';
        $.post(requestUrl, jsonData, function(data) {
            alert(data.status);
            if (data.status === 'success') {
                location.reload();
            }
        });
    };

    render() {
        return (
            <div className = "new-paper-submit-container row col-xs-12">
                <div className = "col-xs-6 title-input-container">
                    <div className = "form-group">
                        <input
                            className = "form-control"
                            type = "text"
                            placeholder = "输入文章的标题"
                            ref = "paperTitle"
                        />
                    </div>
                </div>
                <div className = "col-xs-3 tag-input-container">
                    <div className = "form-group">
                        <input
                            className = "form-control"
                            type = "text"
                            placeholder = "输入文章的分类标签"
                            ref = "paperTag"
                        />
                    </div>
                </div>
                <div className = "col-xs-3 subtag-input-container">
                    <div className = "form-group">
                        <input
                            className = "form-control"
                            type = "text"
                            placeholder = "输入文章的分类副标签"
                            ref = "paperSubtag"
                        />
                    </div>
                </div>
                <div className = "col-xs-12 abstract-input-container">
                    <div className = "form-group">
                        <textarea
                            className = "form-control"
                            placeholder = "输入文章的摘要"
                            ref = "paperAbstract"
                        ></textarea>
                    </div>
                </div>
                <div className = "col-xs-10 key-input-container">
                    <div className = "form-group">
                        <input 
                            className = "form-control" 
                            type = "text" 
                            placeholder = "输入密钥代码，用于校验admin身份"
                            ref = "paperPermitKey"
                        />
                    </div>
                </div>
                <div className = "col-xs-2 submit-btn-container">
                    <button 
                        type = "button" 
                        className = "btn btn-success"
                        onClick = { (e) => this.insertNewPaper(e) }
                    >
                        提交文章
                    </button>
                </div>
            </div>
        );
    };
};

export default SubmitContainer;