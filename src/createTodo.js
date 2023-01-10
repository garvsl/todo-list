import { compareAsc, format, min } from 'date-fns'

export default function createProject(title) {
    return {
        title,
        todo: [],
    }
}

export function createTodo(title, dueDate) {
    const date = dueDate.split('-')
    const month = date[1] - 1
    const day = date[2]
    const year = date[0]
    const actualDate = format(new Date(year, month, day), 'MM/dd/yyyy')
    return {
        title,
        actualDate,
    }
}

export function todoStatus(todo) {
    todo.todo.status = true
    return todo.todo
}

const gym = createTodo('clean the toilet', '2023-11-13')
const normal = createProject(gym).todo
