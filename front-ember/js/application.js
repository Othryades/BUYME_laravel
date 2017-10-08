window.Todos = Ember.Application.create();

// Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

Todos.ApplicationAdapter = DS.MyAdapter.extend({
    baseUrl: 'http://localhost/Works/Buyme_Test_Back/public/tes'
});
