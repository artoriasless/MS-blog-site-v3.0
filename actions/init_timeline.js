const INIT_TIMELINE = 'INIT_TIMELINE';

var initTimelineAction = (data) => {
    return ({
        type   : INIT_TIMELINE,
        payload: {
            data: data
        }
    });
};

export {
    INIT_TIMELINE,
    initTimelineAction
}