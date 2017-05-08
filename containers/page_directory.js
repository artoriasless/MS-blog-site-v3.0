import React from 'react';
import $     from 'jquery';

import CommonHeader      from '../components/common_header';
import CommonNotice      from '../components/common_notice';
import CommonTags        from '../components/common_tags';
import CommonLatest      from '../components/common_latest';
import CommonTimeline    from '../components/common_timeline';
import DirectoryItemList from '../components/directory_item_list';

import smoothScroll from '../modules/plugin_smooth_scroll';

class PageDirectory extends React.Component {
    constructor() {
        super();

        this.scrollToTop = this.scrollToTop.bind(this);
    };

    scrollToTop() {
        smoothScroll('#topAnchor', 750);
    };

    componentDidMount() {
        /* 隐藏整个页面内容 */
        $('#bodyContainer').addClass('hidden');
	    $('#loading').removeClass('hidden');
        setTimeout(function(){
            /* 显示整个页面内容 */
            $('#loading').addClass('hidden');
            $('#bodyContainer').removeClass('hidden').addClass('fade-in-animate');
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
                <CommonHeader />

                {/* 主体部分 */}
                <div 
                    id = "bodyContainer" 
                    className = "body-container init hidden"
                >
                    <div className = "body-content row">
                        <div className = "col-xs-3">
                            {/* notice部分 */}
                            <CommonNotice />

                            {/* 文章的一些标签 */}
                            <CommonTags />

                            {/* 最近的5篇文章的标题 */}
                            <CommonLatest />

                            {/* 时间线 */}
                            <CommonTimeline />
                        </div>

                        <div className = "col-xs-9">
                            {/* 目录列表 */}
                            <DirectoryItemList />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default PageDirectory;