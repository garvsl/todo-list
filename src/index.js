import { compareAsc, format, min } from 'date-fns'
import mobileBut from './mobileButton'
import index from './createPage'

// need to use lots of the date functions

function createProject(name, todo) {
    return {
        name: 'Default',
        todo,
    }
}

function createTodo(title, description, dueDate, priority) {
    const date = dueDate.split('/')
    const month = date[0]
    const day = date[1]
    const year = date[2]
    const actualDate = format(new Date(year, month, day), 'MM/dd/yyyy')
    console.log(actualDate)
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

const gym = createTodo('gym', 'go to the gym', '0/3/2023', 'now')
const normal = createProject('Default', gym)

mobileBut()

console.log(normal)
console.log(todoStatus(normal))
