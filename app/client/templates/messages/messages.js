/*****************************************************************************/
/* Messages: Event Handlers */
/*****************************************************************************/
Template.Messages.events({
});

/*****************************************************************************/
/* Messages: Helpers */
/*****************************************************************************/
Template.Messages.helpers({
    messages: Messages.find({})
});
Template.Messages.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('messages', Session.get('channel'));
    });
});


Template.Messages.onRendered(function () {
});

Template.Messages.onDestroyed(function () {
});
