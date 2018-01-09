(function() {
  function HomeCtrl(Room, Message, $uibModal, $cookies) {
    var Home = {};

    Home.rooms = Room.all;
    Home.currentRoom = null;
    Home.currentUser = $cookies.get('brookeChatCurrentUser');

    Home.addRoom = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        size: 'sm',
        controller: 'ModalCtrl as modal'
      });
    }

    Home.setCurrentRoom = function (room) {

      Home.currentRoom = room;
      Home.messages = Message.getByRoomId(Home.currentRoom.$id);
    }

    Home.sendMessage = function () {
      Home.newMessage.roomId = Home.currentRoom.$id;
      Home.newMessage.username = Home.currentUser;
      Message.send(Home.newMessage);
    }

    return Home;
  }

  angular
  .module('brookeChat')
  .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
