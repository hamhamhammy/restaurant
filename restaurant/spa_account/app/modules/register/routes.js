import template from './template.html';

export default /* @ngInject */
function routes($stateProvider) {
    $stateProvider.state('account.register', {
        url: '/register',
        title: 'Register',
        template
    });
}
