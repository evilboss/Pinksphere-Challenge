Channels = new Mongo.Collection('channels');

ChannelsSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Title",
        max: 200
    },
    master: {
        type: String,
        label: "Master"
    },
    disciple: {
        type: String,
        label: "Master"
    }
});


if (Meteor.isServer) {
    Channels.allow({
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

    Channels.deny({
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
}
