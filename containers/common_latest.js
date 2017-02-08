import React from 'react';
import CommonLatestItem from '../components/common_latest_item';
import common_getDomain from '../modules/get_domain';

class CommonLatest extends React.Component {
    constructor() {
        super();

        this.state = {
            latest: []
        };
    };

    componentDidMount() {
        const domain     = common_getDomain();
        const requestUrl = domain + '/getLatest.node';

        var self = this;

        $.post(requestUrl, function(data) {
            self.setState({ 
                latest: data 
            });
		});
    };

    render() {
        return (
            <div className = "content-block">
                <dl 
                    id = "latestList" 
                    className = "comm-dl"
                >
                    <dt>Latest</dt>
                    {
                        this.state.latest.map((latestItem, latestIndex) => <CommonLatestItem latestItem = { latestItem } latestIndex = { latestIndex } key = { latestIndex } />)
                    }
                </dl>
            </div>
        );
    };
};

export default CommonLatest;