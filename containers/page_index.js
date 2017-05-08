import React from 'react';
import $     from 'jquery';

import IndexHeader    from '../components/index_header';
import IndexSection01 from '../components/index_section_01';
import IndexSection02 from '../components/index_section_02';
import IndexFooter    from '../components/index_footer';

class PageIndex extends React.Component {
    render() {
        const css_id_container = {
                minHeight : 595,
                paddingTop: 95,
                background: 'transparent url(./img/highlight-bg.jpg) 50% 0 no-repeat'
            };
        const css_class_inner = {
                width : 620,
                margin: '0 auto'
            };
        const css_tag_hr = {
                height       : 1,
                border       : 'none',
                marginTop    : '1em',
                lineHeight   : 1,
                background   : 'transparent url(\'./img/hr.png\') 50% 0 no-repeat',
                paddingBottom: '1em'
            };
        
        console.info('Thx for visiting my blog!');
        $('body').addClass('init-index');
        
        return (
            <div 
                id    = "container" 
                style = { css_id_container }
            >
                <div 
                    style     = { css_class_inner }
                    className = "inner" 
                >
                    <IndexHeader />
                    <IndexSection01 />
                    <hr style = { css_tag_hr } />
                    <IndexSection02 />
                    <IndexFooter />
                </div>
            </div>
        );
    };
};

export default PageIndex;