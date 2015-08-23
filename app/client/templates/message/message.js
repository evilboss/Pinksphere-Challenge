/*****************************************************************************/
/* Message: Event Handlers */
/*****************************************************************************/
Template.Message.events({
});

/*****************************************************************************/
/* Message: Helpers */
/*****************************************************************************/
Template.Message.helpers({
    'isRight':function(){
        if(this.user == Meteor.user()._id){
            return 'right';
        }else{
            return ''
        }

    }
});

/*****************************************************************************/
/* Message: Lifecycle Hooks */
/*****************************************************************************/
Template.Message.onCreated(function () {
});

Template.Message.onRendered(function () {
});

Template.Message.onDestroyed(function () {
});
