import React from 'react';
import { Link } from 'react-router';

class TagItem extends React.Component {
    render() {
        const { tagName, papersCount } = this.props.tagItem;

        return (
            <dd>
                <Link 
                    to = { {
                        pathname: "/directory"
                    } }
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
        const { tags } = this.props;

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