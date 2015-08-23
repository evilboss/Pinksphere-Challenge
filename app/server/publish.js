


Meteor.publish('messages', function (channel) {
  return Messages.find({channel: channel});

});

Meteor.publish('channels', function () {
  return Channels.find();
});


Meteor.publish('userData', function () {
  return Meteor.users.find();
});

Meteor.publish('notification', function () {
  return Notification.find();
});