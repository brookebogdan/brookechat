(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all
    }

    angular
        .module('brookeChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
