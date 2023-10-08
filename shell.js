define(function (require) {
    const ko = require('knockout');
    const todos = ko.observableArray();
    const todo = ko.observable();
    async function write (duration, text) {
        setTimeout (() => {
            todos.splice (0, 0, text);
        }, duration * 1000);
    }
    return {
        todo,
        todos,
        addTodo: () => {
            todos.splice(0, 0, todo());
            todo ('');
        },
        canActivate: () => {
            console.log ('looool do something to see if we can activate looooool')
            return true;
        },
        activate: async () => {
            const response = await fetch ('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            await Promise.all (data.map ((t, i) => write (1.25 * i, t.title)));
        },
        canDeactivate: () => {
            return true;
        },
        deactivate: () => {
            todos ([]);
        }
    };
});