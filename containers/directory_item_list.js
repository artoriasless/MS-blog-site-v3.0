import React from 'react';

import common_getDomain from '../modules/common_get_domain';

class DirectoryItemList extends React.Component {
    render() {
        return (
            <div 
                id = "paperContent" 
                className = "content-block" 
            >
                <div className = "paper-title">
                    <h1>Directory</h1>
                </div>
                <hr/>
                <div className = "paper-content">目录列表</div>
            </div>
        );
    };
};

export default DirectoryItemList;