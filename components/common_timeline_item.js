import React from 'react';
import { Link } from 'react-router';

class CommonTimelineItem extends React.Component {
    constructor() {
        super();

        this.clickHandler = this.clickHandler.bind(this);
    };

    clickHandler(e) {
        const { timelineItem, changeDirectoryFilter } = this.props;

        changeDirectoryFilter({
            keyword    : timelineItem.timeline,
            keywordType: 'timeline'
        });
    };

    render() {
        const { timeline, papersCount } = this.props.timelineItem;

        return (
            <dd>
                <Link 
                    to = "/directory"
                    onClick = { (e) => this.clickHandler(e) }
                >
                    <span className = "time-val">{ timeline }</span>
                    (<span className = "count">{ papersCount }</span>)
                </Link>
            </dd>
        );
    };
};

export default CommonTimelineItem;