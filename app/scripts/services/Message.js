(function() {
  function Message($firebaseArray) {
    var Message = {};

    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function (roomId) {
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    }

    Message.send = function (message) {
      message.sentAt = firebase.database.ServerValue.TIMESTAMP;
      messages.$add(message);
    }

    return Message;

  }

  angular
  .module('brookeChat')
  .factory('Message', ['$firebaseArray', Message]);

})();
