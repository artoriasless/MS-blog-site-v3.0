import React from 'react';
import CommonHeader   from './common_header';
import CommonNotice   from './common_notice';
import CommonTags     from './common_tags';
import CommonLatest   from './common_latest';
import CommonTimeline from './common_timeline';
import PaperContent   from '../components/paper_content';

import pageEffects from '../page_effects';

class PaperPage extends React.Component {
    constructor(props) {
        super(props);

        this.scrollToTop = this.scrollToTop.bind(this);

        this.state = {
            directoryFilter: {
                keyword    : '',
                keywordType: ''
            },
            currentPaper  : {
                currentPaperId: props.location.state.currentPaperId
            }
        };
    };

    scrollToTop() {
        $('#topAnchor').HoverTreeScroll(750);
    };

    changeDirectoryFilter(option) {
        this.setState({
            directoryFilter: option
        });
    };

    changePaper(paper) {
        this.setState({
            currentPaper: paper
        })
    };

    componentDidMount() {
        pageEffects();
        $('#paperContent').addClass('hidden');
	    $('#loading').removeClass('hidden');
        setTimeout(function(){
            $('#loading').addClass('hidden');
            $('#paperContent').removeClass('hidden').addClass('fade-in-animate');
        }, 1000);
    };

    componentWillUpdate() {
        $('#paperContent').addClass('hidden');
	    $('#loading').removeClass('hidden');
    };

    componentDidUpdate() {
        setTimeout(function(){
            $('#loading').addClass('hidden');
            $('#paperContent').removeClass('hidden').addClass('fade-in-animate');
        }, 1000);
    };

    componentDidMount() {
        pageEffects();
        setTimeout(function(){
            $('#loading').addClass('hidden');
            $('#paperContent').removeClass('hidden').addClass('fade-in-animate');
        }, 1000)
    };

    scrollToTop() {
        $('#topAnchor').HoverTreeScroll(750);
    };

    render() {
        $('body').removeClass('init-index');

        return (
            <div>
                {/* 遮罩层 */}
                <div className = "mask-container"></div>

                {/* 【载入中】图标 */}
                <div 
                    id = "loading" 
                    className = "loading"
                >
                    Loading
                </div>

                {/* 顶部锚点 */}
                <div id = "topAnchor"></div>

                {/* 【回到顶部】快捷键 */}
                <div 
                    id = "scrollBtn"
                    onClick = { this.scrollToTop }
                >
                    <img src = "./img/scroll-bg.png"/>
                </div>

                {/* 顶部导航栏 */}
                <CommonHeader changeDirectoryFilter = { this.changeDirectoryFilter.bind(this) }/>

                {/* 主体部分 */}
                <div 
                    id = "bodyContainer" 
                    className = "body-container init"
                >
                    <div className = "body-content row">
                        <div className = "col-xs-3">
                            {/* notice部分 */}
                            <CommonNotice />

                            {/* 文章的一些标签 */}
                            <CommonTags changeDirectoryFilter = { this.changeDirectoryFilter.bind(this) }/>

                            {/* 最近的5篇文章的标题 */}
                            <CommonLatest changePaper = { this.changePaper.bind(this) }/>

                            {/* 时间线 */}
                            <CommonTimeline changeDirectoryFilter = { this.changeDirectoryFilter.bind(this) }/>
                        </div>

                        <div className = "col-xs-9">
                            {/* 文章内容 */}
                            <PaperContent currentPaper = { this.state.currentPaper } />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default PaperPage;