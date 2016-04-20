// import template from './template.html';

export default /* @ngInject */
function routes($stateProvider) {
    $stateProvider.state('account.logout', {
        url: '/logout',
        title: 'Logout',
        resolve: {
            logout: ($window, AuthenticationAPI) => {
                return AuthenticationAPI.logout().then(() => {
                    $window.location.href = '/account/login'
                })
            }
        },
        template: "logging user out"
    });
}
