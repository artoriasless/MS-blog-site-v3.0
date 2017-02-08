import React from 'react';
import { Link } from 'react-router';

class CommonTagsItem extends React.Component {
    constructor() {
        super();

        this.clickHandler = this.clickHandler.bind(this);
    };

    clickHandler(e) {
        const { tagItem, changeDirectoryFilter } = this.props;

        changeDirectoryFilter({
            keyword    : tagItem.tagName,
            keywordType: 'tag'
        });
    };

    render() {
        const { tagName, paperCount } = this.props.tagItem;
        const passState = {
                keyword    : tagName,
                keywordType: 'tag'
            };

        return (
            <dd>
                <Link 
                    to = { {
                        pathname: "/directory",
                        state   : passState
                    } }
                    onClick = { (e) => this.clickHandler(e) }
                >
                    <span className = "tag-name">{ tagName }</span>
                    (<span className = "tag-count">{ paperCount }</span>)
                </Link>
            </dd>
        );
    };
};

export default CommonTagsItem;