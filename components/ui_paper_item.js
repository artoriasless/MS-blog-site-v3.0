import React from 'react';
import FontAwesome from 'react-fontawesome';

import $ from 'jquery';

class UI_paperItem extends React.Component {
    constructor() {
        super();

        this.addCodeCount = this.addCodeCount.bind(this);
        this.changePaper  = this.changePaper.bind(this);
    };

    addCodeCount() {
        $('.code-container').each(function() {
            var count = 1;

            $(this).find('pre').each(function() {
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

    changePaper(paperId) {
        const { initPaper } = this.props;

        initPaper(paperId);
        $('#loading').addClass('hidden');
    };

    componentDidUpdate() {
        this.addCodeCount();
        /* 隐藏整个页面内容 */
        $('#paperContent').addClass('hidden');
	    $('#loading').removeClass('hidden');
        setTimeout(function(){
            /* 显示整个页面内容 */
            $('#loading').addClass('hidden');
            $('#paperContent').removeClass('hidden').addClass('fade-in-animate');
        }, 1000);
    };

    render() {
        const { paper }      = this.props;
        const currentPaperId = paper.currentPaperId;
        const paperContent   = paper.paperContent;

        return (
            <div 
                id = "paperContent" 
                className = "content-block hidden"
                data-paperId = { currentPaperId }
            >
                <div className = "paper-title">
                    <h1>
                        { paper.paperTitle }
                    </h1>
                </div>
                <div className = "paper-subtitle">
                    <h3>
                        <span className = "subtitle-date">
                            <FontAwesome
                                name = "calendar"
                                tag  = "i"
                            />
                            &nbsp;
                            <span className = "date-val">{ paper.paperDate }</span>
                        </span>
                        <span className = "subtitle-tags">
                            <FontAwesome
                                name = "tags"
                                tag  = "i"
                            />
                            &nbsp;
                            <span className = "tags-val">{ paper.paperTag }</span>
                        </span>
                    </h3>
                </div>
                <hr/>
                <div 
                    className = "paper-content"
                    dangerouslySetInnerHTML = {{ __html: paperContent }}
                ></div>
                <hr className = "footer-hr"/>
                <div className = "paper-footer row">
                    <div className = "col-xs-6 pre-title">
                        <FontAwesome
                            name      = "arrow-circle-o-left"
                            tag       = "i"
                            className = "pull-left"
                        />
                        <a 
                            id = "prePaper"
                            title = { paper.prevPaper.title }
                            data-paperId = { paper.prevPaper.id }
                            onClick = { () => this.changePaper(paper.prevPaper.id) }
                        >
                            { paper.prevPaper.title }
                        </a>
                    </div>
                    <div className = "col-xs-6 next-title">
                        <a 
                            id = "nextPaper" 
                            title = { paper.nextPaper.title }
                            data-paperId = { paper.nextPaper.id }
                            onClick = { () => this.changePaper(paper.nextPaper.id) }
                        >
                            { paper.nextPaper.title }
                        </a>
                        <FontAwesome
                            name      = "arrow-circle-o-right"
                            tag       = "i"
                            className = "pull-right"
                        />
                    </div>
                </div>
            </div>
        );
    };
};

export default UI_paperItem;