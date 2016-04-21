export default class UsersAPI {

    /* @ngInject */
    constructor($resource) {
        // Locals
        const rootURL = '/api/users';

        // Resource Definition
        this.api = $resource(rootURL, {}, {
            getCached: {
                cache: true
            },
            getUserDetails: {
                method: 'GET',
                cache: true,
                url: rootURL + '/user/:id'
            }
        });
    }

    getUserDetails(params) {
        return this.api.getUserDetails(params).$promise;
    }
}
