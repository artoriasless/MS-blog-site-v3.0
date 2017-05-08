import React from 'react';

class IndexFooter extends React.Component {
    render() {
        const css_tag_footer = {
                paddingTop   : 20,
                paddingBottom: 30,
                marginTop    : 40,
                background   : 'transparent url(\'./img/hr.png\') 0 0 no-repeat',
                fontSize     : 13,
                color        : '#aaa',
                textAlign    : 'right'
            };
        const css_tag_blockquote = {
                padding   : 0,
                margin    : 0,
                borderLeft: 'none',
                fontSize  : '1em'
            };

        return (
            <footer style = { css_tag_footer }>
                <blockquote style = { css_tag_blockquote }>
                    valar morghulis,valar dohaeris
                </blockquote>
            </footer>
        );
    };
};

export default IndexFooter;