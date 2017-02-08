import React from 'react';
import { Link } from 'react-router';

class CommonLatestItem extends React.Component {
    render() {
        const { latestItem, latestIndex } = this.props;
        const param_title  = '【' + latestItem.date + '】' + latestItem.title;
        const param_dataNo = parseInt(latestIndex) + 1 + ' . ';
        const text_title   = latestItem.title;
        const itemId       = latestItem.id;
        const passState    = {
                currentPaperId: itemId
            };

        return (
            <dd>
                <Link 
                    to = { {
                        pathname: "/paperId=" + itemId,
                        state   : passState
                    } }
                    title = { param_title }
                    data-no = { param_dataNo } 
                >
                    { text_title }
                </Link>
            </dd>
        );
    };
};

export default CommonLatestItem;