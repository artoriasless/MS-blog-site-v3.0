import React from 'react';

import common_getDomain from '../modules/common_get_domain';

class DirectoryFilterItemList extends React.Component {
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
                <div>筛选的</div>
            </div>
        );
    };
};

export default DirectoryFilterItemList;