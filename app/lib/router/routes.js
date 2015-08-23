Router.route('/', {
    name: 'home',
    layoutTemplate: 'publicLayout'
});

Router.route('/dashboard', {
    name: 'dashboard',
    controller: 'DashboardController',
    action: 'action',
    where: 'client'
});
Router.route('/chatroom/:channel', {
    name: 'chatroom',
    controller: 'ChatController',
    action: 'room',
    where: 'client'
});

Router.plugin('ensureSignedIn', {
    only: ['dashboard']
});
