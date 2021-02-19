import * as ActionTypes from './ActionTypes'; //asterisk imports ALL exports from ActionTypes.js
import { baseUrl } from "../shared/baseUrl";

import { CAMPSITES } from "../shared/campsites";

//Action Creator Function v
export const addComment = (campsiteId, rating, author, text) => ({ //pass in values from comments
    type: ActionTypes.ADD_COMMENT, //access the add_comment from actionTypes
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text,
    }

});


//CAMPSITES

export const fetchCampsites = () => dispatch => {
    dispatch(campsitesLoading());

    return fetch(baseUrl + 'campsites')
        .then(response => response.json())
        .then(campsites => dispatch(addCampsites(campsites)));
};

export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});


//COMMENTS ACTION

export const fetchComments = () => dispatch => {    
    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

//PROMOTIONS ACTIONS

export const fetchPromotions = () => dispatch => {
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)));
};

export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});