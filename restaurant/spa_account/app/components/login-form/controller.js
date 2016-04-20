// import _startsWith from 'lodash/startsWith';

export default class LoginFormController {

    /* @ngInject */
    constructor($state, $scope, $location, $window) {
        this.$state = $state;
        this.$scope = $scope;
        this.$location = $location;
        this.$window = $window;
        this.queryParams = this.$location.search();
        console.log('LoginForm component constructor');
    }

    forgotPasswordClick() {
        this.$state.go('account.forgot-password', { username: this.username });
        return false;
    }

    submitForm() {
        this.loginError = false;

        // this.UserService.login(this.username, this.password).then((userService) => {
        //     userService.getDetails().then(() => {
        //         if (this.queryParams.next) {
        //             const a = document.createElement('a');
        //             a.href = this.queryParams.next;
        //             let next = a.pathname + a.search + a.hash;
        //
        //             // Note: ensures next starts with /
        //             if (!_startsWith(next, '/')) {
        //                 next = '/' + next;
        //             }
        //             this._redirect(next);
        //         } else {
        //             this._redirect('/');
        //         }
        //     });
        // })
        // .catch(() => {
        //     this.loginError = true;
        // });
    }

    _redirect(url) {
        this.$window.location.href = url;
    }
}
