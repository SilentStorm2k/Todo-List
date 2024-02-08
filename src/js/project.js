import Todo from "./todo";

export default class Project {
    constructor (name, todos = []) {
        this.name = name;
        this.todos = todos;
    }
    changeProjectName (name) {
        this.name = name;
    }
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