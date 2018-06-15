import React from 'react';

import { render } from 'react-dom';


// Import css
import css from './styles/style.styl';

// Import the Components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// Impor the react router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

Raven.config(sentry_url, {
    tags: {
        git_commit: 'aasdf455',
        userLevel: 'editor'
    }
}).install();

// // Log a Exception[Note-use this code in try cacth, added here just for testing.]
// logException(new Error('download faild'), {
//     email: 'asdfasdf@gmail.com'
// });

// purposly creating an error to test Raven and Sentry
//console.log(window.doesNotExist.nope);

// Raven.captureMessage('Something bad account');
// // submit a crash report
// Raven.showReportDialog();

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
  );
  

render(router, document.getElementById('root'));