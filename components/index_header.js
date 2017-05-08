import React    from 'react';
import { Link } from 'react-router';

class IndexHeader extends React.Component {
    render() {
        const css_tag_header = {
                paddingTop   : 10,
                paddingBottom: 10
            };
        const css_tag_h1 = {
                lineHeight   : 1.2,
                color        : '#303030',
                fontSize     : 48,
                fontWeight   : 900,
                fontFamily   : '\'Chivo\', \'Helvetica Neue\', Helvetica, Arial, serif',
                letterSpacing: -1
            };
        const css_tag_h2 = {
                lineHeight   : 1.3,
                color        : '#aaa',
                fontSize     : 24,
                fontWeight   : 'normal',
                letterSpacing: -1
            };
        const css_id_viewBolg = {
                marginRight : 0,
                borderRadius: 15
            };

        return (
            <header style = { css_tag_header }>
                <h1 style = { css_tag_h1 }>
                    Monkingstand.GitHub.io
                </h1>
                <h2 style = { css_tag_h2 }>
                    blog of MS
                    <Link 
                        id        = "viewBlog" 
                        style     = { css_id_viewBolg }
                        className = "pull-right btn btn-default btn-sm" 
                        to        = "/directory"
                    >
                        View Blog&nbsp;&nbsp;
                        <i className = "fa fa-sign-in"></i>
                    </Link>
                </h2>
            </header>
        );
    };
};

export default IndexHeader;