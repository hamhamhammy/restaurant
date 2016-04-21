import LoginFormController from './controller';
import LoginFormTemplate from './template.html';
import AuthenticationAPI from 'spa_common/api/authentication'
import UsersAPI from 'spa_common/api/users'
// import UserService from 'spa_common/services/user-service';
// import Device from 'spa_common/utils/services/device';


export default angular
    .module('spa-account.components.login-form', [
        AuthenticationAPI,
        UsersAPI
        // UserService,
        // Device
    ])
    .controller('LoginFormController', LoginFormController)
    .component('loginForm', {
        controller: LoginFormController,
        controllerAs: 'ctrl',
        bindings: {
            username: '@?'
        },
        template: LoginFormTemplate
    })
    .name;
