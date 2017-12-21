(function() {
  function ModalCtrl(Room, $uibModal) {
    this.open = function() {
      var modalInstance = $uibModal.open({
        templateUrl : '/templates/modal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: 'modal'
      });

      modalInstance.result.then(function(name) {
        this.room = name;
        Room.add(this.room);
      }, function() {
        $log.info('Modal dismissed at ' + new Date());
      });
    };
  }

  angular
    .module('brookeChat')
    .controller('ModalCtrl', ['Room', '$uibModal', ModalCtrl]);
})();
