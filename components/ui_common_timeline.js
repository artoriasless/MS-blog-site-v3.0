import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import PluginRoundAbout from '../modules/plugin_round_about';

class TimelineItem extends React.Component {
    render() {
        const { timeline, papersCount } = this.props.timelineItem;

        return (
            <dd>
                <Link
                    to = { {
                        pathname: "/directoryFilter"
                    } }
                >
                    <span className = "time-val">{ timeline }</span>
                    (<span className = "count">{ papersCount }</span>)
                </Link>
            </dd>
        );
    };
};

class UI_commonTimeline extends React.Component {
    componentDidMount() {
        const { initTimeline } = this.props;
        
        initTimeline();
    };

    render() {
        const { timeline } = this.props;

        return (
            <div className = "content-block">
                <dl 
                    id = "timeList" 
                    className = "comm-dl"
                >
                    <a className = "content-icon">
                        <FontAwesome
                            name = "history"
                            tag  = "i"
                        />
                        &nbsp;
                    </a>
                    <dt id = "timeLineTitle">
                        Timeline<br/>
                        <PluginRoundAbout />
                    </dt>
                    {
                        timeline.map((timelineItem, timelineIndex) => {
                            return (
                                <TimelineItem
                                    key          = { 'timelineKey_' + timelineIndex }
                                    timelineItem = { timelineItem }
                                />
                            );
                        })
                    }
                </dl>
            </div>
        );
    };
};

export default UI_commonTimeline;