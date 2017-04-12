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
                },
                'imgContainer_lg': {
                    name : 'imgContainer',
                    begin: '<div class="img-container size-lg">',
                    end  : '</div>'
                },
                'imgContainer_md': {
                    name : 'imgContainer',
                    begin: '<div class="img-container size-md">',
                    end  : '</div>'
                },
                'imgContainer_sm': {
                    name : 'imgContainer',
                    begin: '<div class="img-container size-sm">',
                    end  : '</div>'
                },
                'imgContainer_xs': {
                    name : 'imgContainer',
                    begin: '<div class="img-container size-xs">',
                    end  : '</div>'
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
                <div className = "row">
                    <div className = "col-xs-6">
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
                    <div className = "col-xs-6">
                        <div className = "form-group">
                            <div className = "radio">
                                <label>
                                    <input 
                                        type = "radio" 
                                        name = "paragraphType" 
                                        value = "imgContainer_lg"
                                        onChange = { (e) => this.changeType(e) }
                                    />
                                    <h2>图片（大）</h2>
                                </label>
                            </div>
                        </div>
                        <div className = "form-group">
                            <div className = "radio">
                                <label>
                                    <input 
                                        type = "radio" 
                                        name = "paragraphType" 
                                        value = "imgContainer_md"
                                        onChange = { (e) => this.changeType(e) }
                                    />
                                    <h2>图片（中）</h2>
                                </label>
                            </div>
                        </div>
                        <div className = "form-group">
                            <div className = "radio">
                                <label>
                                    <input 
                                        type = "radio" 
                                        name = "paragraphType" 
                                        value = "imgContainer_sm"
                                        onChange = { (e) => this.changeType(e) }
                                    />
                                    <h2>图片（小）</h2>
                                </label>
                            </div>
                        </div>
                        <div className = "form-group">
                            <div className = "radio">
                                <label>
                                    <input 
                                        type = "radio" 
                                        name = "paragraphType" 
                                        value = "imgContainer_xs"
                                        onChange = { (e) => this.changeType(e) }
                                    />
                                    <h2>图片（超小）</h2>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default ParagraphType;