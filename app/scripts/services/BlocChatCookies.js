(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('brookeChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/login.html',
                size: 'sm',
                controller: 'ModalCtrl as modal',
                keyboard: false,
                backdrop: 'static'
            });
        }
    }

    angular
        .module('brookeChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
