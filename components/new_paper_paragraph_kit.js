import React    from 'react';
import ReactDOM from 'react-dom';

class ParagraphKit extends React.Component {
    constructor() {
        super();
        this.addKitBR   = this.addKitBR.bind(this);
        this.addKitLink = this.addKitLink.bind(this);
    };

    addKitBR(e) {
        const insertNewParagraph  = this.props.insertNewParagraph;

        insertNewParagraph(['<br>']);
    };

    addKitLink(e) {
        const $linkVal        = ReactDOM.findDOMNode(this.refs.linkVal);
        const $linkTitle      = ReactDOM.findDOMNode(this.refs.linkTitle);
        const changeAddedLink = this.props.changeAddedLink;

        if (Boolean($linkVal.value) && Boolean($linkTitle.value)) {
            changeAddedLink({
                linkVal  : $linkVal.value,
                linkTitle: $linkTitle.value
            });
            $linkVal.value = '';
            $linkTitle.value = '';
        }
        return true;
    };

    render() {
        const  css_common_noPadding = {
                padding: 0
            };

        return (
            <div className = "new-paper-paragraph-kit">
                <div className = "page-header">
                    <h1>额外元件</h1>
                </div>
                <div className = "btn-container">
                    <div 
                        style     = { css_common_noPadding }
                        className = "col-xs-3"
                    >
                        <div className = "form-group">
                            <input
                                type        = "text"
                                className   = "form-control"
                                placeholder = "输入链接地址"
                                ref         = "linkVal"
                            />
                        </div>
                    </div>
                    <div 
                        className = "col-xs-3"
                        style = { css_common_noPadding }
                    >
                        <div className = "form-group">
                            <input
                                type        = "text"
                                className   = "form-control"
                                placeholder = "输入标题名称"
                                ref         = "linkTitle"
                            />
                        </div>
                    </div>
                    <div className = "col-xs-3 text-center">
                        <button 
                            type      = "button" 
                            className = "btn btn-default"
                            onClick   = { (e) => this.addKitLink(e) }
                        >
                            添加外链
                        </button>
                    </div>
                    <div className = "col-xs-3 text-center">
                        <button 
                            type      = "button" 
                            className = "btn btn-default"
                            onClick   = { (e) => this.addKitBR(e) }
                        >
                            添加换行
                        </button>
                    </div>
                </div>
            </div>
        );
    };
};

export default ParagraphKit;