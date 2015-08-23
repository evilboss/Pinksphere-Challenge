/*****************************************************************************/
/* Channel: Event Handlers */
/*****************************************************************************/
Template.Channel.events({
    'click .channel': function (e) {
        Session.set('channel', this.name);

    }
});

/*****************************************************************************/
/* Channel: Helpers */
/*****************************************************************************/
Template.Channel.helpers({
    active: function () {
        if (Session.get('channel') === this.name) {
            return "active";
        } else {
            return "";
        }
    }
});

/*****************************************************************************/
/* Channel: Lifecycle Hooks */
/*****************************************************************************/
Template.Channel.onCreated(function () {
});

Template.Channel.onRendered(function () {
});

Template.Channel.onDestroyed(function () {
});
