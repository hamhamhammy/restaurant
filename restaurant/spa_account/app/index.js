// ES6 polyfills for Internet Explorer
import 'babel-polyfill';
// This is required to get babel compiled
// code to work on IE10
// They should fix it soon but until then
// we need this
// more info https://phabricator.babeljs.io/T3041
import 'ima.js-babel6-polyfill';

// Dependencies
import angular from 'angular';
import ngResource from 'angular-resource';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';

import routes from './routes';

// Components
import LoginFormComponent from './components/login-form';
import RegisterFormComponent from './components/register-form';

// Modules
import LoginModule from './modules/login';
import LogoutModule from './modules/logout';
import RegisterModule from './modules/register';

// Global style
import './main.scss';

export default angular
    .module('spa-account', [
        // Dependencies
        ngResource,
        uiBootstrap,
        uiRouter,

        // Components
        LoginFormComponent,
        RegisterFormComponent,

        // Modules
        LoginModule,
        LogoutModule,
        RegisterModule

    ])
    .config(routes);
    // .config(RouteConfig)
    // .run(Replay);
