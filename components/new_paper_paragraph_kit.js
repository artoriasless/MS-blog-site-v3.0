import React from 'react';

class ParagraphKit extends React.Component {
    render() {
        return (
            <div className = "new-paper-paragraph-kit">
                <div className = "page-header">
                    <h1>额外元件</h1>
                </div>
                <div className = "btn-container">
                    <div className = "col-xs-6 text-center">
                        <button 
                            type = "button" 
                            className = "btn btn-default"
                        >
                            添加外链
                        </button>
                    </div>
                    <div className = "col-xs-6 text-center">
                        <button 
                            type = "button" 
                            className = "btn btn-default"
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