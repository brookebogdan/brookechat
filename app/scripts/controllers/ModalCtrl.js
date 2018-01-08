(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        var modal = this;
        modal.cancel = function () {
            $uibModalInstance.dismiss();
        };

        modal.createRoom = function () {
            Room.add(modal.newRoom);
            $uibModalInstance.close();
        };

        modal.createUsername = function () {
            $cookies.put('brookeChatCurrentUser', modal.username);
            $uibModalInstance.close();
        }
    }

    angular
        .module('brookeChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();
