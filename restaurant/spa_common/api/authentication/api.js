export default class AuthenticationAPI {

    /* @ngInject */
    constructor($resource) {
        // Locals
        const rootURL = '/api/auth';

        // Resource Definition
        this.api = $resource(rootURL, {}, {
            getCached: {
                cache: true
            },
            register: {
                method: 'POST',
                url: rootURL + '/register'
            },
            login: {
                method: 'POST',
                url: rootURL + '/login'
            },
            logout: {
                method: 'POST',
                url: rootURL + '/logout'
            }
        });
    }

    // getInfo() {
    //     return this.api.getCached().$promise;
    // }

    register(email, username, password) {
        return this.api.register({ email, username, password }).$promise;
    }

    login(username, password) {
        return this.api.login({ username, password }).$promise;
    }

    logout() {
        return this.api.logout().$promise;
    }
}
