// import _clone from 'lodash/clone';
// import _head from 'lodash/head';
// import _has from 'lodash/has';
// import _forOwn from 'lodash/forOwn';


export default class LoginController {

    /* @ngInject */
    constructor($timeout) {
        this.$timeout = $timeout;
        console.log('LoginController constructor');
    }

    submit() {
        console.log('LoginController submit');
    }
}
