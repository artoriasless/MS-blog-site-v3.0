import React from 'react';

class InputArea extends React.Component {
    render() {
        return (
            <div className = "col-xs-6">
                <div className = "new-paper-input-area">
                    <div className = "page-header">
                        <h1>输入区域</h1>
                    </div>
                    <div className = "form-group">
                        <textarea className = "form-control"></textarea>
                    </div>
                    <div className = "insert-btn-container">
                        <button 
                            type = "button" 
                            className = "btn btn-default"
                        >
                            插入段落
                        </button>
                    </div>
                </div>
            </div>
        );
    };
};

export default InputArea;