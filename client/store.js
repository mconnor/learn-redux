import { createStore, compse } from 'redux';
//This library is not necessary for using Redux together with React Router.
// You can use the two together just fine without any additional libraries.
// It is useful if you care about recording, persisting, and replaying user actions, using time travel.
// If you don't care about these features, just use Redux and React Router directly.
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';


import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
