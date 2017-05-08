import React    from 'react';
import ReactDOM from 'react-dom';

class InputArea extends React.Component {
    constructor() {
        super();
        this.insertHandler = this.insertHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.enterListenerHandler = this.enterListenerHandler.bind(this);
    };

    enterListenerHandler(e) {
        const contentInput = document.querySelector('#contentInput');
        const contentVal   = contentInput.value;

        if (Boolean(contentVal)) {
            if (e.keyCode == 13) {
                this.insertHandler();''
                return true;
            }
            return false;
        }
        return false;
    };

    insertHandler() {
        const selectedParagraphType = this.props.selectedParagraphType;
        const insertNewParagraph    = this.props.insertNewParagraph;
        const contentInput          = document.querySelector('#contentInput');
        const contentVal            = contentInput.value.replace('\n', '');

        var content;

        /* check not NULL */
        if (!Boolean(contentVal)) { return ; }
        if (selectedParagraphType.name === 'code' || selectedParagraphType.name === 'refer') {
            /* set indent val */
            if (selectedParagraphType.name === 'code') {
                const indentVal = contentVal.split('/')[1] ? contentVal.split('/')[1] : '0';
                const tmpBegin  = selectedParagraphType.begin.replace('/indentVal/', indentVal);
                
                var tmpContent = '';
                
                tmpContent = contentVal.replace('/' + indentVal + '/', '');
                tmpContent = tmpContent.replace('<', '&lt;');
                tmpContent = tmpContent.replace('>', '&gt;');
                content    = [
                        selectedParagraphType.containerBegin, 
                        tmpBegin + tmpContent + selectedParagraphType.end, 
                        selectedParagraphType.containerEnd
                    ];
            }
            else {
                content = [
                        selectedParagraphType.containerBegin, 
                        selectedParagraphType.begin + contentVal + selectedParagraphType.end, 
                        selectedParagraphType.containerEnd
                    ];
            }
        }
        else {
            content = [ selectedParagraphType.begin + contentVal + selectedParagraphType.end ]
        }

        insertNewParagraph(content);
        setTimeout(function() {
            contentInput.value = '';
        }, 1);
    };

    deleteHandler(e) {
        const deleteLatestParagraph = this.props.deleteLatestParagraph;

        deleteLatestParagraph();
    };

    componentDidUpdate() {
        const { addedLink, changeAddedLink } = this.props;
        const $contentInput = document.querySelector('#contentInput');

        if (Boolean(addedLink.linkVal) && Boolean(addedLink.linkTitle)) {
            $contentInput.value = $contentInput.value + '<a class="external-link" target="_blank" href="' + addedLink.linkVal + '">' + addedLink.linkTitle + '</a>';
            changeAddedLink({
                linkVal  : '',
                linkTitle: ''
            });
        }
    };

    render() {
        return (
            <div className = "col-xs-6">
                <div 
                    className                  = "new-paper-input-area"
                    data-addedLink             = { this.props.addedLink.linkVal }
                    data-selectedParagraphType = { this.props.selectedParagraphType.name }
                >
                    <div className = "page-header">
                        <h1>输入区域</h1>
                    </div>
                    <div className = "form-group">
                        <textarea 
                            id        = "contentInput"
                            className = "form-control"
                            onKeyDown = { (e) => this.enterListenerHandler(e) }
                        ></textarea>
                    </div>
                    <div className = "row">
                        <div className = "col-xs-6 delete-btn-container">
                            <button 
                                type      = "button" 
                                className = "btn btn-danger"
                                onClick   = { () => this.deleteHandler() }
                            >
                                删除上段
                            </button>
                        </div>
                        <div className = "col-xs-6 insert-btn-container">
                            <button 
                                type      = "button" 
                                className = "btn btn-default"
                                onClick   = { (e) => this.insertHandler(e) }
                            >
                                插入段落
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default InputArea;