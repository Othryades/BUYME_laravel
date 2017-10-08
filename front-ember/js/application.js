window.Todos = Ember.Application.create();

// Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

Todos.ApplicationAdapter = DS.MyAdapter.extend({
    url: 'http://localhost/Works/Buyme_Test/back-laravel/public/todos'
});
