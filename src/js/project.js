import Todo from "./todo";

export default class Project {
    constructor (name, todos = []) {
        this.name = name;
        this.todos = todos;
    }
    get name ()         { return this._name; }
    get todos ()        { return this._todos; }
    set name (newName)  { this._name = newName; }
    addTodo (todo) {
        if (todo instanceof Todo)
            this.todos.push(todo);
    }
    deleteTodo (todo) {
        const todoIndex = this.todos.indexOf(todo);
        if (todoIndex >= 0)
            this.todos.splice(todoIndex, 1);
    }
}