import uiRouter from 'angular-ui-router';

import LoginRoutes from './routes';
import LoginFormComponent from 'spa_account/components/login-form';

export default angular
    .module('spa-account.login', [
        uiRouter,
        LoginFormComponent
    ])
    .config(LoginRoutes)
    .name;
