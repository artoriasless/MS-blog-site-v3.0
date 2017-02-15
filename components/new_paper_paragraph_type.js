import React from 'react';
import ReactDOM from 'react-dom';

class ParagraphType extends React.Component {
    constructor() {
        super();

        this.changeType = this.changeType.bind(this);
    };

    changeType(e) {
        const changeParagraphType = this.props.changeParagraphType;
        const typeList = {
                'title': {
                    name : 'title',
                    begin: '<strong>',
                    end  : '</strong>'
                },
                'normal': {
                    name : 'normal',
                    begin: '<p>',
                    end  : '</p>'
                },
                'subChapter': {
                    name : 'subChapter',
                    begin: '<p class="sub-chapter">',
                    end  : '</p>'
                },
                'code': {
                    name          : 'code',
                    begin         : '<pre class="indent-/indentVal/">',
                    end           : '</pre>',
                    containerBegin: '<div class="code-container"><code>',
                    containerEnd  : '</code></div>'
                },
                'refer': {
                    name          : 'refer',
                    begin         : '<p>',
                    end           : '</p>',
                    containerBegin: '<div class="refer-content">',
                    containerEnd  : '</div>'
                }
            };
        const selectedType = typeList[e.target.value];

        changeParagraphType(selectedType);
    };

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.defaultParagraphType).checked = true;
    };

    render() {
        return (
            <div className = "new-paper-paragraph-type">
                <div className = "page-header">
                    <h1>段落类别</h1>
                </div>
                <div className = "form-group">
                    <div className = "radio">
                        <label>
                            <input 
                                type = "radio" 
                                name = "paragraphType"
                                value = "title"
                                onChange = { (e) => this.changeType(e) }
                            />
                            <h2>副标题</h2>
                        </label>
                    </div>
                </div>
                <div className = "form-group">
                    <div className = "radio">
                        <label>
                            <input 
                                type = "radio" 
                                name = "paragraphType" 
                                value = "normal"
                                ref = "defaultParagraphType"
                                onChange = { (e) => this.changeType(e) }
                            />
                            <h2>普通段落</h2>
                        </label>
                    </div>
                </div>
                <div className = "form-group">
                    <div className = "radio">
                        <label>
                            <input 
                                type = "radio" 
                                name = "paragraphType" 
                                value = "subChapter"
                                onChange = { (e) => this.changeType(e) }
                            />
                            <h2>段落标题</h2>
                        </label>
                    </div>
                </div>
                <div className = "form-group">
                    <div className = "radio">
                        <label>
                            <input 
                                type = "radio" 
                                name = "paragraphType"
                                value = "code"
                                onChange = { (e) => this.changeType(e) }
                            />
                            <h2>代码</h2>
                        </label>
                    </div>
                </div>
                <div className = "form-group">
                    <div className = "radio">
                        <label>
                            <input 
                                type = "radio" 
                                name = "paragraphType"
                                value = "refer"
                                onChange = { (e) => this.changeType(e) }
                            />
                            <h2>引用</h2>
                        </label>
                    </div>
                </div>
            </div>
        );
    };
};

export default ParagraphType;