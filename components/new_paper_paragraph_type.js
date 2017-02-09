import React from 'react';

class ParagraphType extends React.Component {
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
                            />
                            <h2>一级标题</h2>
                        </label>
                    </div>
                </div>
                <div className = "form-group">
                    <div className = "radio">
                        <label>
                            <input 
                                type = "radio" 
                                name = "paragraphType"
                            />
                            <h2>二级标题</h2>
                        </label>
                    </div>
                </div>
                <div className = "form-group">
                    <div className = "radio">
                        <label>
                            <input 
                                type = "radio" 
                                name = "paragraphType" 
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