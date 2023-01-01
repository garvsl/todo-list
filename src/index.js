import { compareAsc, format } from 'date-fns'

function createProject(name, todo) {
    return {
        name: 'Default',
        todo,
    }
}

function createTodo(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
        status: false,
    }
}

function todoStatus(todo) {
    todo.todo.status = true
    return todo.todo
}

const gym = createTodo('gym', 'go to the gym', '1/1/23', 'now')
const normal = createProject('Default', gym)

console.log(normal)
console.log(todoStatus(normal))
