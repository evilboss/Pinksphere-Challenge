/*****************************************************************************/
/* NotificationList: Event Handlers */
/*****************************************************************************/
Template.NotificationList.events({
    'click #acceptSession': function (e) {
        var myChannel = Channels.findOne({name: Meteor.user().emails[0].address});
        var sessionRequest = $('#userRequest').val();
        console.log(myChannel);
        Channels.update({_id: myChannel._id}, {$set:{disciple:sessionRequest}});


    }
});

/*****************************************************************************/
/* NotificationList: Helpers */
/*****************************************************************************/
Template.NotificationList.helpers({});

/*****************************************************************************/
/* NotificationList: Lifecycle Hooks */
/*****************************************************************************/
Template.NotificationList.onCreated(function () {
});

Template.NotificationList.onRendered(function () {
});

Template.NotificationList.onDestroyed(function () {
});
