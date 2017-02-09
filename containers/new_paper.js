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
    };

    scrollToTop() {
        $('#topAnchor').HoverTreeScroll(750);
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
                            <ParagraphType />
                            {/* 段落元件 */}
                            <ParagraphKit />
                        </div>

                        {/* 输入区域 */}
                        <InputArea />
                        
                        {/* 提交文章保存 */}
                        <SubmitContainer />

                        {/* 预览区域 */}
                        <ViewContent />
                    </div>
                </div>
            </div>
        );
    };
};

export default NewPaper;