import React from 'react';
import CommonTimelineItem from '../components/common_timeline_item';

import common_getDomain from '../modules/get_domain';

class CommonTimeline extends React.Component {
    constructor() {
        super();

        this.state = { 
            timeline: []
        };
    };

    componentDidMount() {
        const domain     = common_getDomain();
        const requestUrl = domain + '/getTimeline.node';

        var self = this;

        $.post(requestUrl, function(data) {
            self.setState({
                timeline: data
            });
		});
    };

    render() {
        return (
            <div className = "content-block">
                <dl 
                    id = "timeList" 
                    className = "comm-dl"
                >
                    <a className = "content-icon">
                        <i className = "fa fa-history"></i>
                    </a>
                    <dt id = "timeLineTitle">
                        Timeline<br/>
                        <div id = "timeBlock">
                            <div className = "crappy-plastic-part-made-in-china">
                                <div className = "pad">
                                    <ul id = "hours-tens"><li>&nbsp;</li><li>1</li></ul>
                                    <ul id = "hours-ones"><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul>

                                    <ul className = "delimiter"><li>:</li></ul>

                                    <ul id = "minutes-tens"><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul>
                                    <ul id = "minutes-ones"><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul>

                                    <ul className = "delimiter"><li>.</li></ul>

                                    <ul id = "seconds-tens"><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul>
                                    <ul id = "seconds-ones"><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul>

                                    <ul id = "ampm"><li>am</li><li>pm</li></ul>
                                </div>
                            </div>
                        </div>
                    </dt>
                    {
                        this.state.timeline.map((timelineItem, timelineIndex) => {
                            return (
                                <CommonTimelineItem 
                                    key                   = { timelineIndex } 
                                    timelineItem          = { timelineItem } 
                                    changeDirectoryFilter = { this.props.changeDirectoryFilter }
                                />
                            )
                        })
                    }
                </dl>
            </div>
        );
    };
};

export default CommonTimeline;