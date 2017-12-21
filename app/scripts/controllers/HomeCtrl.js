(function() {
  function HomeCtrl(Room, Message, $uibModal) {
    var home = this;
    home.rooms = Room.all;
    home.currentRoom = null;

    home.setCurrentRoom = function (room) {
      home.currentRoom = room;
      home.messages = Message.getByRoomId(home.currentRoom.$id);
      console.log("Messages: " + messages);
    }

  }

  angular
  .module('brookeChat')
  .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})()
