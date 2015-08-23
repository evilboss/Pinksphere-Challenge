ChatController = RouteController.extend({
    waitOn: function () {
        return this.subscribe('messages'), this.subscribe('channels'), this.subscribe('userData'), this.subscribe('notification');
    },
    data: {
        Messages: Messages.find({}),
        Channels: Channels.find()

    },
    onAfterAction: function () {
        Meta.setTitle('ChatRoom');
    },
    onBeforeAction: function () {
        this.next();
    },

    action: function () {
        this.render();
    },
    room: function () {
        Session.set('channel', this.params.channel);
        this.render('Chatroom');
    }
});
