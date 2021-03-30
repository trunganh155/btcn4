const todos = [{
    name: 'Thức dậy',
    done: false,
}];

exports.add = function (name) {
    todos.push({ name, done: false });
};

exports.findAll = function () {
    return todos;
};

exports.markAsDone = function (id) {
    todos[id].done = true;
};