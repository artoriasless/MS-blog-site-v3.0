import React from 'react';

class CommonHeaderLeft extends React.Component {
    render() {
        return (
            <div className = "nav-header pull-left">
                <img 
                    id  = "logoImg" 
                    src = "./img/logo.png"
                />
            </div>
        );
    };
};

export default CommonHeaderLeft;