import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class IndexHeader extends React.Component {
    render() {
        const css_tag_header = {
                paddingTop   : 10,
                paddingBottom: 10
            };
        const css_tag_h1 = {
                fontFamily   : '\'Chivo\', \'Helvetica Neue\', Helvetica, Arial, serif',
                fontSize     : 48,
                fontWeight   : 900,
                lineHeight   : 1.2,
                color        : '#303030',
                letterSpacing: -1
            };
        const css_tag_h2 = {
                fontSize     : 24,
                fontWeight   : 'normal',
                lineHeight   : 1.3,
                color        : '#aaa',
                letterSpacing: -1
            };
        const css_id_viewBolg = {
                borderRadius: 15,
                marginRight : 0
            };
        
        const passState = {
                keyword: '', 
                keywordType: '' 
            };

        return (
            <header style = { css_tag_header }>
                <h1 style = { css_tag_h1 }>
                    Monkingstand.GitHub.io
                </h1>
                <h2 style = { css_tag_h2 }>
                    blog of MS
                    <Link 
                        id = "viewBlog" 
                        className = "pull-right btn btn-default btn-sm" 
                        style = { css_id_viewBolg }
                        to = { {
                            pathname: "/directory",
                            state   : passState
                        } }
                    >
                        View Blog&nbsp;&nbsp;
                        <FontAwesome 
                            name = "sign-in"
                            tag  = "i"
                        />
                    </Link>
                </h2>
            </header>
        );
    };
};

export default IndexHeader;