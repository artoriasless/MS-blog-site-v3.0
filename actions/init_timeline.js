const INIT_TIMELINE = 'INIT_TIMELINE';

var initTimelineAction = () => {
    return ({
        type   : INIT_TIMELINE,
        payload: {
            postName: '/getTimeline.node',
            jsonData: {}
        }
    });
};

export {
    INIT_TIMELINE,
    initTimelineAction
}