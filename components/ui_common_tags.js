import React from 'react';
import { Link } from 'react-router';

class TagItem extends React.Component {
    constructor() {
        super();

        this.directoryFilter = this.directoryFilter.bind(this);
    };

    directoryFilter(keyword, keywordType) {
        const { initDirectoryFilter } = this.props;

        initDirectoryFilter(keyword, keywordType);
    };

    render() {
        const { tagName, papersCount } = this.props.tagItem;

        return (
            <dd>
                <Link 
                    to = "/directoryFilter"
                    onClick = { () => this.directoryFilter(tagName, 'tag') }
                >
                    <span className = "tag-name">{ tagName }</span>
                    (<span className = "tag-count">{ papersCount }</span>)
                </Link>
            </dd>
        );
    };
};

class UI_commonTags extends React.Component {
    componentDidMount() {
        const { initTags } = this.props;
        
        initTags();
    };

    render() {
        const { tags, initDirectoryFilter } = this.props;

        return (
            <div className = "content-block">
                <dl 
                    id = "tagList" 
                    className = "comm-dl"
                >
                    <dt>Tags</dt>
                    {
                        tags.map((tagItem, tagIndex) => {
                            return (
                                <TagItem 
                                    key     = { 'tagKey_' + tagIndex }
                                    tagItem = { tagItem } 
                                    initDirectoryFilter = { initDirectoryFilter }
                                />
                            )
                        })
                    }
                </dl>
            </div>
        );
    };
};

export default UI_commonTags;