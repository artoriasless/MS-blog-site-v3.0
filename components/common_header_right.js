import React    from 'react';
import { Link } from 'react-router';

class CommonHeaderRight extends React.Component {
    render() {
        return (
            <ul className = "nav pull-right">
                <li>
                    <Link 
                        id = "backLink"
                        to = '/index'
                    >
                        Back To Homepage&nbsp;
                        <i className = "fa fa-sign-out"></i>
                    </Link>
                </li>
            </ul>
        );
    };
};

export default CommonHeaderRight;