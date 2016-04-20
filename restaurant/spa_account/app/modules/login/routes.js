import template from './template.html';

export default /* @ngInject */
function routes($stateProvider) {
    $stateProvider.state('account.login', {
        url: '/login',
        title: 'Login',
        template
    });
}
