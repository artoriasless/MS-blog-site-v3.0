import React from 'react';
import { Link } from 'react-router';

class LatestItem extends React.Component {
    render() {
        const { latestItem, latestIndex } = this.props;
        const param_title  = '【' + latestItem.date + '】' + latestItem.title;
        const param_dataNo = parseInt(latestIndex) + 1 + '.';
        const text_title   = latestItem.title;
        const itemId       = latestItem.id;

        return (
            <dd>
                <Link 
                    to = { {
                        pathname: "/paper",
                    } }
                    title = { param_title }
                    data-no = { param_dataNo }
                >
                    { text_title }
                </Link>
            </dd>
        )
    };
};

class UI_commonLatest extends React.Component {
    componentDidMount() {
        const { initLatest } = this.props;

        initLatest();
    };

    render() {
        const { latest } = this.props;

        return (
            <div className = "content-block">
                <dl 
                    id = "latestList" 
                    className = "comm-dl"
                >
                    <dt>Latest</dt>
                    {
                        latest.map((latestItem, latestIndex) => {
                            return (
                                <LatestItem
                                    key         = { 'latestKey_' + latestIndex }
                                    latestItem  = { latestItem }
                                    latestIndex = { latestIndex }
                                />
                            )
                        })
                    }
                </dl>
            </div>
        );
    };
};

export default UI_commonLatest;