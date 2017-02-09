import { GET_TAGS,      getTagsAction }      from './get_tags';
import { GET_LATEST,    getLatestAction }    from './get_latest';
import { GET_TIMELINE,  getTimelineAction }  from './get_timeline';
import { GET_DIRECTORY, getDirectoryAction } from './get_directory';
import { GET_PAPER,     getPaperAction }     from './get_papaer';

const actionTypes = {
    'GET_TAGS'     : GET_TAGS, 
    'GET_LATEST'   : GET_LATEST,
    'GET_TIMELINE' : GET_TIMELINE,
    'GET_DIRECTORY': GET_DIRECTORY,
    'GET_PAPER'    : GET_PAPER
};

export {
    actionTypes, 

    getTagsAction, 
    getLatestAction, 
    getTimelineAction, 
    getDirectoryAction, 
    getPaperAction
};