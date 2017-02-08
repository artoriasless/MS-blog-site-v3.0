import React from 'react';
import { Link } from 'react-router';
import aboutModal    from './common_about_modal';
import contactModal from './common_contact_modal';

class CommonHeaderCenter extends React.Component {
    constructor() {
        super();

        this.viewAboutModal   = this.viewAboutModal.bind(this);
        this.viewContactModal = this.viewContactModal.bind(this);
        this.clickHandler     = this.clickHandler.bind(this);
    };

    viewAboutModal() {
        $(aboutModal).modal('show');
    };

    viewContactModal() {
        $(contactModal).modal('show');
        /* tooltip init */
        $('[data-toggle="tooltip"]').tooltip();
    };

    clickHandler(e) {
        const changeDirectoryFilter = this.props.changeDirectoryFilter;

        changeDirectoryFilter({
            keyword    : '',
            keywordType: ''
        });
    };

    render() {
        const passState = {
                keyword: '', 
                keywordType: '' 
            };

        return (
            <ul className = "nav nav-list pull-left">
                <li>
                    <Link 
                        id = "blogLink"
                        to = { {
                            pathname: "/directory",
                            state   : passState
                        } }
                        onClick = { (e) => this.clickHandler(e) }
                    >
                        <i className = "fa fa-book"></i>&nbsp;
                        <span data-hover = "目录">Blog</span>
                    </Link>
                </li>
                <li>
                    <a 
                        id = "aboutLink"
                        onClick = { this.viewAboutModal }
                    >
                        <i className = "fa fa-info-circle"></i>&nbsp;
                        <span data-hover = "关于">About</span>
                    </a>
                </li>
                <li>
                    <a 
                        id = "contactLink"
                        onClick = { this.viewContactModal }
                    >
                        <i className = "fa fa-envelope-o"></i>&nbsp;
                        <span data-hover = "粉我！">Contact</span>
                    </a>
                </li>
            </ul>
        );
    };
};

export default CommonHeaderCenter;