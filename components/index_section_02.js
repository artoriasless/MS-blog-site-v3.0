import React from 'react';

class IndexSection02 extends React.Component {
    render() {
        const css_tag_p = {
                marginBottom: 20,
                fontWeight  : 300, 
                textAlign   : 'center'
            };

        return (
            <section id="main_content">
                <p style = { css_tag_p }>
                    code less，do more
                </p>
            </section>
        );
    };
};

export default IndexSection02;