import angular from 'angular';

import ngResource from 'angular-resource';

import UsersAPI from './api';

export default angular
    .module('api.users', [
        ngResource
    ])
    .service('UsersAPI', UsersAPI)
    .name;
