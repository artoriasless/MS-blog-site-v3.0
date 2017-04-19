import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import CommentsContainer from './comments_container';

import common_getParameter from '../modules/common_get_parameter';

import $ from 'jquery';

class PrevPaper extends React.Component {
    render() {
        const { paper, changePaper } = this.props;

        if (paper.currentPaperId == paper.prevPaper.id) {
            return (
                <span 
                    id = "prevPaper"
                    title = { paper.prevPaper.title }
                    data-paperId = { paper.prevPaper.id }
                >
                    { paper.prevPaper.title }
                </span>
            );
        }
        else {
            return (
                <Link 
                    id = "prevPaper"
                    to = { '/paper?paperId=' + paper.prevPaper.id }
                    title = { paper.prevPaper.title }
                    data-paperId = { paper.prevPaper.id }
                    onClick = { () => changePaper(paper.prevPaper.id) }
                >
                    { paper.prevPaper.title }
                </Link>
            );
        }
    };
};

class NextPaper extends React.Component {
    
    render() {
        const { paper, changePaper } = this.props;

        if (paper.currentPaperId == paper.nextPaper.id) {
            return (
                <span 
                    id = "nextPaper"
                    title = { paper.nextPaper.title }
                    data-paperId = { paper.nextPaper.id }
                >
                    { paper.nextPaper.title }
                </span>
            );
        }
        else {
            return (
                <Link 
                    id = "nextPaper"
                    to = { '/paper?paperId=' + paper.nextPaper.id }
                    title = { paper.nextPaper.title }
                    data-paperId = { paper.nextPaper.id }
                    onClick = { () => changePaper(paper.nextPaper.id) }
                >
                    { paper.nextPaper.title }
                </Link>
            );
        }
    };
};

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
        const { initPaper, initComments } = this.props;

        initPaper(paperId);
        initComments(paperId);
        $('#loading').addClass('hidden');
    };

    componentDidMount() {
        const { paper, initPaper, initComments } = this.props;
        
        if (!paper.currentPaperId) {
            initPaper(common_getParameter('paperId'));
            initComments(common_getParameter('paperId'));
        }
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
        const { paper, comments, initComments } = this.props;
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
                        <PrevPaper 
                            paper = { paper }
                            changePaper = { this.changePaper }
                        />
                    </div>
                    <div className = "col-xs-6 next-title">
                        <NextPaper
                            paper = { paper }
                            changePaper = { this.changePaper }
                        />
                        <FontAwesome
                            name      = "arrow-circle-o-right"
                            tag       = "i"
                            className = "pull-right"
                        />
                    </div>
                </div>
                <hr className = "footer-hr"/>
                <CommentsContainer 
                    comments = { comments }
                    initComments = { initComments }
                />
            </div>
        );
    };
};

export default UI_paperItem;