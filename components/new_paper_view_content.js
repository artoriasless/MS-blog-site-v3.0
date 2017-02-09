import React from 'react';

class ViewHtml extends React.Component {
    render() {
        return (
            <div className = "new-paper-view-container">
                <div 
                    id = "viewToggleContainer" 
                    className = "col-xs-3 view-toggle-container"
                >
                    <ul className = "nav nav-pills nav-stacked">
                        <li 
                            role = "presentation" 
                            className = "active"
                        >
                            <a href="#textPaperContent">view text</a>
                        </li>
                        <li role="presentation">
                            <a href="#htmlPaperContent">view html</a>
                        </li>
                    </ul>
                </div>
                <div className = "col-xs-9 tab-content">
                    <div 
                        id="textPaperContent"
                        role = "tabpanel" 
                        className = "tab-pane active view-content"
                    >
                        <div className = "page-header">
                            <h1>TEXT文本</h1>
                        </div>
                        <div id = "textContent">
                            文本内容div
                        </div>
                    </div>
                    <div 
                        id="htmlPaperContent"
                        role = "tabpanel" 
                        className = "tab-pane view-content"
                    >
                        <div className = "page-header">
                            <h1>HTML文本</h1>
                        </div>
                        <div id = "htmlContent">
                            文本内容div
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default ViewHtml;