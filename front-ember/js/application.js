window.Todos = Ember.Application.create();

// Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

Todos.ApplicationAdapter = DS.RESTAdapter .extend({
    host: 'http://localhost/Works/Buyme_Test/back-laravel/public',
    url: 'http://localhost/Works/Buyme_Test/back-laravel/public',
    namespace: 'todos'
});
//
// Todos.ApplicationAdapter = DS.LSAdapter.extend({
//     namespace: 'todos-emberjs'
// });
