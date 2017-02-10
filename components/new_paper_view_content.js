import React from 'react';

import $ from 'jquery';

class ViewHtml extends React.Component {
    constructor() {
        super();

        this.addCodeCount = this.addCodeCount.bind(this);
    };

    addCodeCount() {
        $('.code-container').each(function() {
            var count = 1;

            $(this).find('xmp').each(function() {
                if ($(this).hasClass('indent-4') && count > 100) { 
                    $(this).addClass('indent-lg'); 
                }
                else if ($(this).hasClass('indent-5') && count > 9 && count < 100) { 
                    $(this).addClass('indent-sm'); 
                }
                else if ($(this).hasClass('indent-5') && count < 9) { 
                    $(this).addClass('indent-xs'); 
                }
                else if ($(this).hasClass('indent-6') && count > 9 && count < 100) { 
                    $(this).addClass('indent-sm'); 
                }
                else if ($(this).hasClass('indent-6') && count < 9) { 
                    $(this).addClass('indent-xs'); 
                }

                $(this).attr('data-line', count++);
            });
        });
    };

    componentDidUpdate() {
        const contentList  = this.props.contentList;
        const contentCount = contentList.length;
        const contentText  = contentList.join('');
        
        /* render text content */
        $('#textContent').empty().append(contentText);
        /* render html content */
        for (let i = 0; i < contentCount; i ++) {
            console.info('todo for html content');
        }

        this.addCodeCount();
    };

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
                        <div 
                            id = "textContent"
                            className = "paper-content"
                        ></div>
                    </div>
                    <div 
                        id="htmlPaperContent"
                        role = "tabpanel" 
                        className = "tab-pane view-content"
                    >
                        <div className = "page-header">
                            <h1>HTML文本</h1>
                        </div>
                        <div id = "htmlContent"></div>
                    </div>
                </div>
            </div>
        );
    };
};

export default ViewHtml;