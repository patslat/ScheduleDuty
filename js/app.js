App = Ember.Application.create();

App.Router.map(function() {
});

App.IndexRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('schedule')
  }
});
