// Todos.TodosRoute = Ember.Route.extend({
//     model: function() {
//         console.log('this.ApplicationAdapter');
//         console.log(this.todos);
//         return this.ApplicationAdapter.findAll(this.store);
//         return [{"id":1,"complete":0,"text":"clean house"},{"id":2,"complete":0,"text":"buy food"},{"id":4,"complete":1,"text":"grosseries"}];
//         return this.store.find('todo');
//     }
// });

Todos.TodosRoute = Ember.Route.extend({
    model: function()
    {
        return $.getJSON("http://localhost/Works/Buyme_Test/back-laravel/public/todos");
    }
});

Todos.Router.map(function() {
    this.resource('todos', { path: '/' }, function() {
        // additional child routes
        this.route('active');
        this.route('completed');
    });
});

// ... additional lines truncated for brevity ...

Todos.TodosIndexRoute = Ember.Route.extend({
    model: function() {
        return this.modelFor('todos');
    }
});

// ... additional lines truncated for brevity ...
Todos.TodosActiveRoute = Ember.Route.extend({
    model: function(){
        return this.store.filter('todo', function(todo) {
            return !todo.get('isCompleted');
        });
    },
    renderTemplate: function(controller) {
        this.render('todos/index', {controller: controller});
    }
});

Todos.TodosCompletedRoute = Ember.Route.extend({
    model: function() {
        return this.store.filter('todo', function(todo) {
            return todo.get('isCompleted');
        });
    },
    renderTemplate: function(controller) {
        this.render('todos/index', {controller: controller});
    }
});

