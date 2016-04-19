export default /* @ngInject */
function routes($stateProvider, $locationProvider, $resourceProvider) {
    // Enables HTML Push State
    $locationProvider.html5Mode(true);

    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = true;

    $stateProvider

    // Parent abstract state for application wide dependency resolution.
    .state('account', {
        abstract: true,
        template: '<div class="AccountView" ui-view/>'
    })

    // 404 state
    .state('account.not-found', {
        url: '*path',
        template: '404 account page goes here'
    });
}
