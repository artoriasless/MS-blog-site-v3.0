import React from 'react';
import CommonTagsItem   from '../components/common_tags_item';
import common_getDomain from '../modules/get_domain';

class CommonTags extends React.Component {
    constructor() {
        super();

        this.state = {
            tags: []
        };
    };

    componentDidMount() {
        const domain     = common_getDomain();
        const requestUrl = domain + '/getTags.node';

        var self = this;

        $.post(requestUrl, function(data) {
            self.setState({ 
                tags: data 
            });
		});
    };

    render() {
        return (
            <div className = "content-block">
                <dl 
                    id = "tagList" 
                    className = "comm-dl"
                >
                    <dt>Tags</dt>
                    {
                        this.state.tags.map((tagItem, tagIndex) => <CommonTagsItem tagItem = { tagItem } key = { tagIndex } changeDirectoryFilter = { this.props.changeDirectoryFilter } />)
                    }
                </dl>
            </div>
        );
    };
};

export default CommonTags;