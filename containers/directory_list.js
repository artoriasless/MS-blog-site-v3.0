import React from 'react';
import DirectoryItem from '../components/directory_item';

import common_getDomain from '../modules/get_domain';

class DirectoryList extends React.Component {
    constructor() {
        super();

        this.updateData = this.updateData.bind(this);

        this.state = { 
            directory: [] 
        };
    };

    updateData() {
        const domain          = common_getDomain();
        const directoryFilter = this.props.directoryFilter;

        var self = this;

        if (Boolean(directoryFilter.keyword) && Boolean(directoryFilter.keywordType)) {
            const requestUrl = domain + '/getDirectoryFilter.node';

            $.post(requestUrl, directoryFilter, function(data) {
                self.setState({
                    directory: data
                });
            });
        }
        else {
            const requestUrl = domain + '/getDirectory.node';

            $.post(requestUrl, function(data) {    
                self.setState({
                    directory: data 
                });
            });
        }
    };

    componentDidMount() {
        this.updateData();
    };

    componentWillUpdate() {
        this.updateData();
    };

    render() {
        const directoryFilter       = this.props.directoryFilter;
        const param_dataKeyword     = directoryFilter.keyword;
        const param_dataKeywordType = directoryFilter.keywordType;

        return (
            <div 
                id = "paperContent" 
                className = "content-block" 
                data-keyword = { param_dataKeyword }
                data-keywordType = { param_dataKeywordType }
            >
                <div className = "paper-title">
                    <h1>Directory</h1>
                </div>
                <hr/>
                <div className = "paper-content">
                    {
                        this.state.directory.map((directoryItem, directoryIndex) => {
                            return (
                                <DirectoryItem 
                                    key           = { directoryIndex }
                                    directoryItem = { directoryItem } 
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    };
};

export default DirectoryList;