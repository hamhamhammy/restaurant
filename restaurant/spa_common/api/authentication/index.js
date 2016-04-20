import angular from 'angular';

import ngResource from 'angular-resource';

import AuthenticationAPI from './api';

export default angular
    .module('api.authentication', [
        ngResource
    ])
    .service('AuthenticationAPI', AuthenticationAPI)
    .name;
