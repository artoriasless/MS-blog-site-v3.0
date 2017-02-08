const GET_TIMELINE = 'GET_TIMELINE';

var getTimelineAction = () => {
    return ({
        type   : GET_TIMELINE,
        payload: {
            postName: '/getTimeline'
        }
    });
};

export {
    GET_TIMELINE, 
    getTimelineAction
};