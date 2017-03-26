import React from 'react';
import CommonHeaderLeft   from './common_header_left';
import CommonHeaderCenter from './common_header_center';
import CommonHeaderRight  from './common_header_right';

class CommonHeader extends React.Component {
    render() {
        return (
            <nav className = "nav-container">
                <div className = "nav-content">
                    <CommonHeaderLeft />
                    <div className = "nav-body">
                        <CommonHeaderCenter />
                        <CommonHeaderRight />
                    </div>
                </div>
            </nav>
        );
    };
};

export default CommonHeader;