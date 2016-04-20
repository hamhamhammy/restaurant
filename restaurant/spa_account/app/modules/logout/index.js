import uiRouter from 'angular-ui-router';

import AuthenticationAPI from 'spa_common/api/authentication'
import LogoutRoutes from './routes';

export default angular
    .module('spa-account.logout', [
        uiRouter,
        AuthenticationAPI
    ])
    .config(LogoutRoutes)
    .name;
