/**
 * Created by evilboss on 8/23/15.
 */
Template._appHeader.helpers({
    notificationCount: function(){
        return Notification.find().count();
    },
    notifications: function(){
        return Notification.find().fetch();
    }


});
Template._appHeader.events({

});
