import { isPast, parseISO, isToday } from 'date-fns'
import createProject, { createTodo, todoStatus } from './createTodo'

// so make a list for each project/tab and whcihever list it is in the new task will be appened to that, the only thing this doesnt apply
// to is the inbox/today/upcoming those are automatic due to the date, so basically only the projects
//
// yes that sounds good, but how will that be done? for the library there was a library list named globally at the beginning, but for this you
// basically need a different list for each project/inbox
// these lists can be created when the projects are made, but how would you access them afterwards?
//
// when u create the project it will make a createproject with its name and it has a list, for each element in the list it will create a task
// when u click the add new under the project it pushes it to the list
//
// ok so for each element in the list it will create it, but how can i incoporate the add new task to push it to the list.
// it already has the add new task

// still have to do the todostatus

export default function buttonEffect(indexList, todayList, upcomingList) {
    const content = document.getElementById('content')
    const projectNew = document.querySelector('.new')
    const projects = document.querySelector('.projects')
    const main = document.querySelector('.main')
    let taskNew = document.querySelector('.newer')

    projectNew.addEventListener('click', () => {
        projectNew.style.display = 'none'

        const yesno = document.createElement('div')
        yesno.classList.add('yesno')
        projects.appendChild(yesno)

        const textbox = document.createElement('input')
        textbox.maxLength = 12
        textbox.type = 'text'
        textbox.required = true
        yesno.appendChild(textbox)

        const ansCover = document.createElement('div')
        ansCover.classList.add('anscover')
        yesno.appendChild(ansCover)

        const yes = document.createElement('button')
        yes.classList.add('yes')
        yes.type = 'submit'
        yes.innerHTML =
            '<svg style="width:24px;height:24px" viewBox="0 0 24 24">     <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /> </svg>'
        ansCover.appendChild(yes)

        const no = document.createElement('button')
        no.type = 'reset'
        no.innerHTML =
            '<svg style="width:24px;height:24px" viewBox="0 0 24 24">     <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /> </svg>'
        no.classList.add('no')
        ansCover.appendChild(no)

        textbox.style.opacity = '1'
        yes.style.opacity = '1'
        no.style.opacity = '1'

        yes.addEventListener('click', () => {
            if (textbox.value) {
                yesno.remove()
                const project = createProject(textbox.value)

                // projectArray.push(project)
                // console.log(projectArray)

                const projectNewer = document.createElement('div')
                projectNewer.classList.add('project')
                projectNewer.classList.add('new')
                projects.appendChild(projectNewer)

                const projectNewTag = document.createElement('h3')
                projectNewTag.textContent = `${textbox.value}`
                projectNewer.appendChild(projectNewTag)

                projectNew.style.display = 'flex'

                projects.appendChild(projectNew)

                const noper = document.createElement('button')
                noper.classList.add('noper')
                noper.type = 'reset'
                noper.innerHTML =
                    '<svg style="width:24px;height:24px" viewBox="0 0 24 24">     <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /> </svg>'
                projectNewer.appendChild(noper)

                noper.addEventListener('click', () => {
                    projectNewer.remove()
                    const title = document.querySelector('.todo')
                    title.textContent = 'Inbox'
                })

                projectNewer.addEventListener('click', () => {
                    const title = document.querySelector('.todo')
                    const tabs = document.querySelectorAll('.tab')
                    const news = document.querySelectorAll('.new')
                    const tasks = document.querySelectorAll('.tasks')
                    title.textContent = `${textbox.value}`
                    tabs.forEach((element) => {
                        element.style.color = 'black'
                        element.style.backgroundColor = 'transparent'
                    })
                    news.forEach((element) => {
                        element.style.color = 'black'
                        element.style.backgroundColor = 'transparent'
                    })
                    const taskes = document.querySelectorAll('.tasks')
                    taskes.forEach((element) => {
                        element.remove()
                    })
                    projectNewer.style.backgroundColor = 'rgb(196, 70, 70)'
                    projectNewer.style.color = 'white'

                    // whenever u makea  new project the event listene ris added to it so it makes more and more forms, u can add an if that if there is already one then
                    // stop or u can stop it at the root

                    project.todo.forEach((element) => {
                        const task = document.createElement('div')
                        task.classList.add('task')
                        task.classList.add('tasks')
                        main.appendChild(task)
                        const checkbox = document.createElement('input')
                        checkbox.type = 'checkbox'
                        task.appendChild(checkbox)
                        const textarea = document.createElement('h3')
                        textarea.textContent = `${element.title}`
                        task.appendChild(textarea)
                        const dueofDate = document.createElement('h3')
                        dueofDate.textContent = `${element.actualDate}`
                        dueofDate.classList.add('dueofdate')
                        task.appendChild(dueofDate)
                        const no = document.createElement('button')
                        no.classList.add('nope')
                        no.type = 'reset'
                        no.innerHTML =
                            '<svg style="width:24px;height:24px" viewBox="0 0 24 24">     <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /> </svg>'
                        task.appendChild(no)
                        no.addEventListener('click', () => {
                            task.remove()
                        })

                        const splitup = element.actualDate.split('/')
                        const newdate = `${splitup[2]}-${splitup[0]}-${splitup[1]}`
                        const parsedIso = parseISO(newdate)
                        if (isToday(parsedIso)) {
                            dueofDate.style.color = 'green'
                        } else if (isPast(parsedIso)) {
                            dueofDate.style.color = 'red'
                        } else if (!isPast(parsedIso)) {
                            dueofDate.style.color = 'blue'
                        }
                    })

                    const allNew = document.querySelectorAll('.newer')
                    allNew.forEach((element) => {
                        element.remove()
                    })
                    const newestTask = document.createElement('div')
                    newestTask.classList.add('task')
                    newestTask.classList.add('new')
                    newestTask.classList.add('newer')

                    const newerSvg = document.createElement('svg')
                    newerSvg.innerHTML =
                        '<svg style="width: 24px; height: 24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /> </svg>'
                    newestTask.appendChild(newerSvg)

                    const newerAdd = document.createElement('h3')
                    newerAdd.textContent = 'Add new task'
                    newestTask.appendChild(newerAdd)

                    main.appendChild(newestTask)

                    const taskSvg = document.createElement('svg')
                    taskSvg.innerHTML =
                        '<svg style="width: 24px; height: 24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /> </svg>'
                    taskNew.appendChild(taskSvg)

                    const addNew = document.createElement('h3')
                    addNew.textContent = 'Add new task'
                    taskNew.appendChild(addNew)

                    taskNew = document.querySelector('.newer')
                    taskNew.addEventListener('click', () => {
                        const formed = document.createElement('div')
                        formed.classList.add('formed')
                        document.body.appendChild(formed)
                        content.style.pointerEvents = 'none'
                        content.style.filter = 'blur(5px)'
                        const clickexit = document.createElement('button')
                        clickexit.type = 'reset'
                        clickexit.classList.add('clickexit')
                        clickexit.innerHTML =
                            '<svg style="width:24px;height:24px" viewBox="0 0 24 24">     <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /> </svg>'
                        formed.appendChild(clickexit)

                        const taskcontainer = document.createElement('div')
                        taskcontainer.classList.add('container')
                        formed.appendChild(taskcontainer)

                        const tasklabel = document.createElement('label')
                        tasklabel.textContent = 'Task'
                        taskcontainer.appendChild(tasklabel)

                        const taskname = document.createElement('input')
                        taskcontainer.appendChild(taskname)
                        taskname.required = 'true'

                        const datecontainer = document.createElement('div')
                        datecontainer.classList.add('container')
                        formed.appendChild(datecontainer)

                        const datelabel = document.createElement('label')
                        datelabel.textContent = 'Deadline'
                        datecontainer.appendChild(datelabel)

                        const dateitself = document.createElement('input')
                        dateitself.type = 'date'
                        datecontainer.appendChild(dateitself)
                        dateitself.required = 'true'

                        const buttoncreate = document.createElement('button')
                        buttoncreate.classList.add('buttoncreate')
                        buttoncreate.textContent = 'Create'
                        formed.appendChild(buttoncreate)

                        clickexit.addEventListener('click', () => {
                            formed.remove()
                            content.style.pointerEvents = 'all'
                            content.style.filter = 'none'
                        })

                        function butcreate() {
                            if (taskname.value && dateitself.value) {
                                const createdTodo = createTodo(
                                    taskname.value,
                                    dateitself.value
                                )
                                // console.log(createdTodo)

                                const task = document.createElement('div')
                                task.classList.add('task')
                                task.classList.add('tasks')
                                main.appendChild(task)
                                const checkbox = document.createElement('input')
                                checkbox.type = 'checkbox'
                                task.appendChild(checkbox)
                                const textarea = document.createElement('h3')
                                textarea.textContent = `${createdTodo.title}`
                                task.appendChild(textarea)
                                const dueofDate = document.createElement('h3')
                                dueofDate.textContent = `${createdTodo.actualDate}`
                                dueofDate.classList.add('dueofdate')
                                task.appendChild(dueofDate)
                                const no = document.createElement('button')
                                no.classList.add('nope')
                                no.type = 'reset'
                                no.innerHTML =
                                    '<svg style="width:24px;height:24px" viewBox="0 0 24 24">     <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /> </svg>'
                                task.appendChild(no)
                                no.addEventListener('click', () => {
                                    task.remove()
                                })

                                const parsedIso = parseISO(dateitself.value)
                                if (isToday(parsedIso)) {
                                    dueofDate.style.color = 'green'
                                    indexList.push(createdTodo)
                                    todayList.push(createdTodo)
                                } else if (isPast(parsedIso)) {
                                    dueofDate.style.color = 'red'
                                    indexList.push(createdTodo)
                                } else if (!isPast(parsedIso)) {
                                    dueofDate.style.color = 'blue'
                                    upcomingList.push(createdTodo)
                                    indexList.push(createdTodo)
                                }

                                // const allNew =
                                //     document.querySelectorAll('.newer')
                                // allNew.forEach((element) => {
                                //     element.remove()
                                // })
                                // const newestTask = document.createElement('div')
                                // newestTask.classList.add('task')
                                // newestTask.classList.add('new')
                                // newestTask.classList.add('newer')

                                // const newerSvg = document.createElement('svg')
                                // newerSvg.innerHTML =
                                //     '<svg style="width: 24px; height: 24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /> </svg>'
                                // newestTask.appendChild(newerSvg)

                                // const newerAdd = document.createElement('h3')
                                // newerAdd.textContent = 'Add new task'
                                // newestTask.appendChild(newerAdd)

                                // main.appendChild(newestTask)

                                // const taskSvg = document.createElement('svg')
                                // taskSvg.innerHTML =
                                //     '<svg style="width: 24px; height: 24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /> </svg>'
                                // taskNew.appendChild(taskSvg)

                                // const addNew = document.createElement('h3')
                                // addNew.textContent = 'Add new task'
                                // taskNew.appendChild(addNew)
                                taskNew = document.querySelector('.newer')
                                main.appendChild(taskNew)
                                formed.remove()
                                content.style.pointerEvents = 'all'
                                content.style.filter = 'none'

                                project.todo.push(createdTodo)
                            } else {
                                alert('Incomplete')
                            }
                        }

                        buttoncreate.addEventListener('click', butcreate)
                    })

                    // const buttoncreate = document.querySelector('.buttoncreate')
                    // buttoncreate.addEventListener('click', () => {})
                })
            }
        })
        no.addEventListener('click', () => {
            yesno.style.opacity = '0'
            yesno.remove()
            projectNew.style.display = 'flex'
            setTimeout(() => {
                projectNew.style.opacity = '1'
            }, 250)
        })
    })

    // make this into new js

    // taskNew.addEventListener('mouseover', () => {

    // })

    // taskNew.addEventListener('mouseout', () => {
    //     no.remove()
    // })
}

// so when u switch a project, have it run the responding function, inside said function will be the todos that need to be done.
// you can use the name of the thing as a holder but idk dont be too reliant on the dom

// its literally the same thing as library...you just wanted to be differnt and used the text area which basically makes it impossible

// add event listener to checkbox
