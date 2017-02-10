import React from 'react';

class SubmitContainer extends React.Component {
    render() {
        return (
            <div className = "new-paper-submit-container">
                <div className = "col-xs-6 title-input-container">
                    <div className = "form-group">
                        <input
                            className = "form-control"
                            type = "text"
                            placeholder = "输入文章的标题"
                        />
                    </div>
                </div>
                <div className = "col-xs-3 tag-input-container">
                    <div className = "form-group">
                        <input
                            className = "form-control"
                            type = "text"
                            placeholder = "输入文章的分类标签"
                        />
                    </div>
                </div>
                <div className = "col-xs-3 subtag-input-container">
                    <div className = "form-group">
                        <input
                            className = "form-control"
                            type = "text"
                            placeholder = "输入文章的分类副标签"
                        />
                    </div>
                </div>
                <div className = "col-xs-12 abstract-input-container">
                    <div className = "form-group">
                        <textarea
                            className = "form-control"
                            placeholder = "输入文章的摘要"
                        ></textarea>
                    </div>
                </div>
                <div className = "col-xs-10 key-input-container">
                    <div className = "form-group">
                        <input 
                            className = "form-control" 
                            type = "text" 
                            placeholder = "输入密钥代码，用于校验admin身份"
                        />
                    </div>
                </div>
                <div className = "col-xs-2 submit-btn-container">
                    <button 
                        type = "button" 
                        className = "btn btn-success"
                    >
                        提交文章
                    </button>
                </div>
            </div>
        );
    };
};

export default SubmitContainer;