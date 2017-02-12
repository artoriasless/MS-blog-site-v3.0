import React from 'react';
import ParagraphType   from '../components/new_paper_paragraph_type';
import ParagraphKit    from '../components/new_paper_paragraph_kit';
import InputArea       from '../components/new_paper_input_area';
import SubmitContainer from '../components/new_paper_submit_container';
import ViewContent     from '../components/new_paper_view_content';

import pageEffects from '../page_effects';

class NewPaper extends React.Component {
    constructor() {
        super();

        this.scrollToTop = this.scrollToTop.bind(this);

        this.state = {
            addedLink: {
                linkVal  : '',
                linkTitle: ''
            },
            selectedParagraphType: {
                name : 'normal',
                begin: '<p>',
                end  : '</p>'
            },
            contentList  : []
        };
    };

    scrollToTop() {
        $('#topAnchor').HoverTreeScroll(750);
    };

    changeAddedLink(newLink) {
        this.setState({
            addedLink: newLink
        });
    };

    changeParagraphType(newType) {
        this.setState({
            selectedParagraphType: newType
        });
    };

    insertNewParagraph(content) {
        const selectedParagraphType = this.state.selectedParagraphType;
        const oldContentList        = this.state.contentList.slice(0);
        const oldContentCloseTag    = (oldContentList.length !== 0) ? oldContentList[oldContentList.length - 1] : '';
        
        var newContentList;

        if (selectedParagraphType.name === 'title' || selectedParagraphType.name === 'normal') {
            newContentList = oldContentList.concat(content);
        }
        else {
            if (oldContentCloseTag !== selectedParagraphType.containerEnd || oldContentCloseTag == '<br>') {
                /* first time to add or content is <br> */
                newContentList = oldContentList.concat(content);
            }
            else {
                oldContentList.pop();
                newContentList = oldContentList.concat(content.slice(1));
            }
        }
        
        this.setState({
            contentList: newContentList
        });
    };

    deleteLatestParagraph() {
        const listCount      = this.state.contentList.length;
        const newContentList = (listCount === 0) ? [] : this.state.contentList.slice(0, -1);
        
        this.setState({
            contentList: newContentList
        });
    };

    componentDidMount() {
        pageEffects();
    };

    render() {
        const css_id_newPaperPage = {
                margin : 0,
                padding: 0
            };

        return (
            <div>
                {/* 遮罩层 */}
                <div className = "mask-container"></div>

                {/* 顶部锚点 */}
                <div id = "topAnchor"></div>

                {/* 【回到顶部】快捷键 */}
                <div 
                    id = "scrollBtn"
                    onClick = { this.scrollToTop }
                >
                    <img src = "./img/scroll-bg.png"/>
                </div>

                {/* 主体部分 */}
                <div 
                    id = "newPaperPage" 
                    className = "body-container"
                    style = { css_id_newPaperPage }
                >
                    <div className = "body-content row new-paper-container">
                        <div className = "col-xs-6">
                            {/* 段落类别选择 */}
                            <ParagraphType changeParagraphType = { this.changeParagraphType.bind(this) }/>
                            {/* 段落元件 */}
                            <ParagraphKit 
                                insertNewParagraph = { this.insertNewParagraph.bind(this) } 
                                changeAddedLink    = { this.changeAddedLink.bind(this) }
                            />
                        </div>

                        {/* 输入区域 */}
                        <InputArea 
                            addedLink             = { this.state.addedLink } 
                            selectedParagraphType = { this.state.selectedParagraphType } 
                            insertNewParagraph    = { this.insertNewParagraph.bind(this) } 
                            changeAddedLink       = { this.changeAddedLink.bind(this) }
                            deleteLatestParagraph = { this.deleteLatestParagraph.bind(this) }
                        />
                        
                        {/* 提交文章保存 */}
                        <SubmitContainer contentList = { this.state.contentList }/>

                        {/* 预览区域 */}
                        <ViewContent contentList = { this.state.contentList }/>
                    </div>
                </div>
            </div>
        );
    };
};

export default NewPaper;