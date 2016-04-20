import RegisterFormController from './controller';
import RegisterFormTemplate from './template.html';
import AuthenticationAPI from 'spa_common/api/authentication'


export default angular
    .module('spa-account.components.register-form', [
        AuthenticationAPI
    ])
    .controller('RegisterFormController', RegisterFormController)
    .component('registerForm', {
        controller: RegisterFormController,
        controllerAs: 'ctrl',
        bindings: {
            username: '@?'
        },
        template: RegisterFormTemplate
    })
    .name;
