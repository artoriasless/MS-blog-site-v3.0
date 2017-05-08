import React from 'react';

class IndexSection01 extends React.Component {
    render() {
        const css_class_button = {
                display        : 'block',
                float          : 'left',
                width          : 200,
                padding        : '12px 8px 12px 8px',
                lineHeight     : '25px',
                marginRight    : 14,
                borderTop      : 'solid 1px #cbcbcb',
                borderLeft     : 'solid 1px #b7b7b7',
                borderRight    : 'solid 1px #b7b7b7',
                borderBottom   : 'solid 1px #b3b3b3',
                borderRadius   : 30,
                boxShadow      : '0px 1px 5px #e8e8e8',
                filter         : 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#fdfdfd\', endColorstr=\'#f2f2f2\',GradientType=0 )',
                background     : 'linear-gradient(top,  #fdfdfd 0%,#f2f2f2 100%)',
                backgroundColor: '#fdfdfd', /* Old browsers */
                color          : '#303030',
                fontSize       : 15,
                fontWeight     : 'bold'
            };
        const css_tag_span = {
                display    : 'block',
                height     : 23,
                paddingLeft: 50,
                background : 'transparent url(./img/octocat-icon.png) 12px 50% no-repeat'
            };

        return (
            <section 
                id        = "downloads" 
                className = "clearfix"
            >
                <a 
                    id        = "viewGithub" 
                    style     = { css_class_button }
                    className = "button" 
                    href      = "https://github.com/MonkingStand" 
                    target    = "_blank" 
                >
                    <span style = { css_tag_span }>
                        View on GitHub
                    </span>
                </a>
            </section>
        );
    };
};

export default IndexSection01;