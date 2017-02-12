import React from 'react';
import CommonHeader   from './common_header';
import CommonNotice   from './common_notice';
import CommonTags     from './common_tags';
import CommonLatest   from './common_latest';
import CommonTimeline from './common_timeline';
import DirectoryList  from './directory_list';

import pageEffects from '../page_effects';

class DirectoryPage extends React.Component {
    constructor(props) {
        super(props);

        var defaultState;
        if (Boolean(props.location.state)) {
            if (Boolean(props.location.state.keyword)) {
                defaultState = props.location.state;
            }
            else {
                defaultState = {
                        keyword    : '',
                        keywordType: ''
                    };
            }
        }
        else {
            defaultState = {
                    keyword    : '',
                    keywordType: ''
                };
        }

        this.scrollToTop = this.scrollToTop.bind(this);

        this.state = {
            directoryFilter: defaultState 
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

    changePaper(newPaper) {
        this.setState({
            currentPaper: newPaper
        })
    };

    componentDidMount() {
        pageEffects();
        $('#bodyContainer').addClass('hidden');
	    $('#loading').removeClass('hidden');
        setTimeout(function(){
            $('#loading').addClass('hidden');
            $('#bodyContainer').removeClass('hidden').addClass('fade-in-animate');
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
                    className = "body-container init hidden"
                >
                    <div className = "body-content row">
                        <div className = "col-xs-3">
                            {/* notice部分 */}
                            <CommonNotice changePaper = { this.changePaper.bind(this) }/>

                            {/* 文章的一些标签 */}
                            <CommonTags changeDirectoryFilter = { this.changeDirectoryFilter.bind(this) }/>

                            {/* 最近的5篇文章的标题 */}
                            <CommonLatest changePaper = { this.changePaper.bind(this) }/>

                            {/* 时间线 */}
                            <CommonTimeline changeDirectoryFilter = { this.changeDirectoryFilter.bind(this) }/>
                        </div>

                        <div className = "col-xs-9">
                            {/* 目录列表 */}
                            <DirectoryList directoryFilter = { this.state.directoryFilter }/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default DirectoryPage;