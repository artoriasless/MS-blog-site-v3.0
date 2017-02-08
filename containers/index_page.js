import React from 'react';
import IndexHeader    from '../components/index_header';
import IndexSection01 from '../components/index_section_01';
import IndexSection02 from '../components/index_section_02';
import IndexFooter    from '../components/index_footer';

import $ from 'jquery';

class IndexPage extends React.Component {
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
                paddingBottom: '1em',
                marginTop    : '1em',
                lineHeight   : 1,
                background   : 'transparent url(\'./img/hr.png\') 50% 0 no-repeat',
                border       : 'none'
            };
        
        $('body').addClass('init-index');
        console.log('Thx for visiting my blog!');

        return (
            <div 
                id = "container" 
                style = { css_id_container }
            >
                <div 
                    className = "inner" 
                    style = { css_class_inner }
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

export default IndexPage;