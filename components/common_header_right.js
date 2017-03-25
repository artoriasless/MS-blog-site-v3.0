import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

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
                        <FontAwesome
                            name = "sign-out"
                            tag  = "i"
                        />
                    </Link>
                </li>
            </ul>
        );
    };
};

export default CommonHeaderRight;