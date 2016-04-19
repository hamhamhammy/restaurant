import uiRouter from 'angular-ui-router';

import LoginController from './controller';
import LoginRoutes from './routes';
//import LoginFormComponent from 'spa_account/components/login-form';

export default angular
    .module('spa-account.login', [
        uiRouter
    ])
    .controller('LoginController', LoginController)
    .config(LoginRoutes)
    .name;


//    .controller('LoginController', LoginController)
