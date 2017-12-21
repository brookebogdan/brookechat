(function() {
  // function HomeCtrl(Room, Message, $uibModal) {
  function HomeCtrl(Room, $uibModal) {
    var home = this;
    home.rooms = Room.all;
    home.currentRoom = null;

    home.setCurrentRoom = function (room) {
      home.currentRoom = room;
      //home.messages = Message.getByRoomId(home.currentRoom.$id);
      //console.log(home.messages)
    }

  }

  angular
  .module('brookeChat')
  //.controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
  .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})()
