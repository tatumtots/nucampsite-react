import { createStore, combineReducers }from 'redux';
import { Promotions } from "./promotions";
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';

export const ConfigureStore = () => {
    const store = createStore(
       combineReducers({
           campsites: Campsites,
           comments: Comments,
           partners: Partners,
           promotions: Promotions
       })
    );
    return store;
}