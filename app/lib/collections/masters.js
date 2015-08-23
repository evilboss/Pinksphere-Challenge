Masters = new Mongo.Collection('masters');
MastersSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Title"
  },
  email:{
    type: String,
    label: "Email"
  }
});

if (Meteor.isServer) {
  Masters.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Masters.deny({
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
}
