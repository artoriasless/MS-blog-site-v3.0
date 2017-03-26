import React from 'react';
import { Link } from 'react-router';

class DirectoryItem extends React.Component {
    render() {
        const directoryItem = this.props.directoryItem;
        const itemId        = directoryItem.id;
        const param_title   = directoryItem.title;
        const text_title    = directoryItem.title;
        const text_tag      = !directoryItem.subtag ? directoryItem.tag : directoryItem.tag + '，' + directoryItem.subtag;
        const text_date     = directoryItem.date;
        const text_abstract = directoryItem.abstract;
        const passState     = {
                currentPaperId: itemId
            }
        
        return (
            <div className = "category-item">
                <div className = "item-title">
                    <h2>
                        <Link 
                            to = { {
                                pathname: "/paper"
                            } }
                            title = { param_title }
                            data-hover = { param_title }
                        >
                            { text_title }
                        </Link>
                    </h2>
                </div>
                <div className = "item-subtitle">
                    <h3>
                        <span className = "subtitle-tags pull-left">
                            <i className = "fa fa-tags"></i>&nbsp;
                            <span className = "tags-val">{ text_tag }</span>
                        </span>
                        <span className = "subtitle-date">
                            <i className = "fa fa-calendar"></i>&nbsp;
                            <span className = "date-val">{ text_date }</span>
                        </span>
                    </h3>
                </div>
                <div className = "item-abstract">
                    <p>{ text_abstract }</p>
                </div>
            </div>
        );
    };
};

export default DirectoryItem;