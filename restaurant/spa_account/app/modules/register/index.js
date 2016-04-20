import uiRouter from 'angular-ui-router';

import RegisterRoutes from './routes';
import RegisterFormComponent from 'spa_account/components/register-form';

export default angular
    .module('spa-account.register', [
        uiRouter,
        RegisterFormComponent
    ])
    .config(RegisterRoutes)
    .name;
