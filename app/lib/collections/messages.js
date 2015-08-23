Messages = new Mongo.Collection('messages');

if (Meteor.isServer) {
  Messages.before.insert(function (userId, doc) {
    doc.createdAt = Date.now();
    doc.user = userId;
  });
  Messages.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

  Messages.deny({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    },

  });

}
