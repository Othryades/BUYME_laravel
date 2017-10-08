window.Todos = Ember.Application.create();

// Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

Todos.ApplicationAdapter = DS.MyAdapter.extend({
    baseUrl: 'http://localhost/Works/zzz/todo-master/back/laravel/public/todos'
});
