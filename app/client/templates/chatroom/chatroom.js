/*****************************************************************************/
/* Chatroom: Event Handlers */
/*****************************************************************************/
Template.Chatroom.events({
    'click #requestSession': function (e) {
        console.log('click');
        var currentDiciple = Meteor.user()._id;
        var discipleMail = Meteor.user().emails[0].address;

        var Notifications = Notification.find({disciple: discipleMail, disciple: currentDiciple});
        console.log(Notifications.count());
        if (Notifications.count() === 0) {
            Notification.insert({discipleMail: discipleMail, disciple: currentDiciple});
        }else{
            Session.set('errpr','Already Requested');
        }
    }
});

/*****************************************************************************/
/* Chatroom: Helpers */
/*****************************************************************************/
Template.Chatroom.helpers({
    'chatName': function () {
        return Session.get('channel');
    },
    'isDissiple': function () {
        var currentChannel = Channels.findOne({name: Session.get('channel')});
        console.log(currentChannel.disciple);
        console.log(Meteor.user()._id);
        if (currentChannel.disciple== Meteor.user()._id||currentChannel.master==Meteor.user()._id) {
            return true;
        }
        return false;
    }
});

/*****************************************************************************/
/* Chatroom: Lifecycle Hooks */
/*****************************************************************************/
Template.Chatroom.onCreated(function () {
});

Template.Chatroom.onRendered(function () {
});

Template.Chatroom.onDestroyed(function () {
});
