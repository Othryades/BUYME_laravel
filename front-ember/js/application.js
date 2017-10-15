window.Todos = Ember.Application.create();

// Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

Todos.ApplicationAdapter = DS.RESTAdapter .extend({
    host: 'http://localhost/Works/Buyme_Test/back-laravel/public/todos',
    namespace: 'todos'
});

// Todos.ApplicationSerializer = DS.RESTSerializer.extend({
//     primaryKey: '_id',
//     serializeId: function(id) {
//         return id.toString();
//     }
// });

// Todos.ApplicationAdapter = DS.LSAdapter.extend({
//     namespace: 'todos-emberjs'
// });

// Todos.ApplicationAdapter = DS.RESTAdapter.reopen({
//     url: 'http://localhost/Works/Buyme_Test/back-laravel/public'
// });

