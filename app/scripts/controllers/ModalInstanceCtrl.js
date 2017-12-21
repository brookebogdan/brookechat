(function() {
    function ModalInstanceCtrl($uibModalInstance) {
       this.ok = function() {
            $uibModalInstance.close(this.newRoom);
        };

        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }

    angular
        .module('brookeChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();
