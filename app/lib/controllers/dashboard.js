DashboardController = AppController.extend({
  waitOn: function() {
    return this.subscribe('channels');
  },
  data: {
    items: Items.find({}),
    Channels: Channels.find()


  },
  action: function () {
    this.render('dashboard');
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
