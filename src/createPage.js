import { check } from 'prettier'
import mobileBut from './mobileButton'
import buttonEffect from './buttonEffects'
import createProject from './createTodo'

export default function index() {
    // header

    const content = document.getElementById('content')

    const header = document.createElement('header')
    header.classList.add('head')
    content.appendChild(header)

    const title = document.createElement('h1')
    title.classList.add('title')
    title.textContent = 'Todo-list'
    header.appendChild(title)

    const panel = document.createElement('div')
    panel.classList.add('panel')
    content.appendChild(panel)

    const tabs = document.createElement('div')
    tabs.classList.add('tabs')
    panel.appendChild(tabs)

    const tabOne = document.createElement('div')
    tabOne.classList.add('tab')
    tabOne.classList.add('tabOne')
    tabs.appendChild(tabOne)

    const svgInbox = document.createElement('svg')
    svgInbox.innerHTML =
        '<svg style="width: 24px; height: 24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" /> </svg>'
    tabOne.appendChild(svgInbox)

    const inbox = document.createElement('h3')
    inbox.textContent = 'Inbox'
    tabOne.appendChild(inbox)

    const tabTwo = document.createElement('div')
    tabTwo.classList.add('tab')
    tabTwo.classList.add('tabTwo')
    tabs.appendChild(tabTwo)

    const svgToday = document.createElement('svg')
    svgToday.innerHTML =
        '<svg style="width: 24px; height: 24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" /> </svg>'
    tabTwo.appendChild(svgToday)

    const today = document.createElement('h3')
    today.textContent = 'Today'
    tabTwo.appendChild(today)

    const tabThree = document.createElement('div')
    tabThree.classList.add('tab')
    tabThree.classList.add('tabThree')
    tabs.appendChild(tabThree)

    const svgUpcoming = document.createElement('svg')
    svgUpcoming.innerHTML =
        '<svg style="width: 24px; height: 24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" /> </svg>'
    tabThree.appendChild(svgUpcoming)

    const upcoming = document.createElement('h3')
    upcoming.textContent = 'Upcoming'
    tabThree.appendChild(upcoming)

    const projects = document.createElement('div')
    projects.classList.add('projects')
    panel.appendChild(projects)

    const project = document.createElement('div')
    project.classList.add('project')
    projects.appendChild(project)

    const svgProject = document.createElement('svg')
    svgProject.innerHTML =
        '<svg style="width: 24px; height: 24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M4 4C2.89 4 2 4.89 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8C22 6.89 21.1 6 20 6H12L10 4H4M4 8H20V18H4V8M12 9V11H15V9H12M16 9V11H19V9H16M12 12V14H15V12H12M16 12V14H19V12H16M12 15V17H15V15H12M16 15V17H19V15H16Z" /> </svg>'
    project.appendChild(svgProject)

    const projectTag = document.createElement('h3')
    projectTag.textContent = 'Projects:'
    project.appendChild(projectTag)

    const projectNew = document.createElement('div')
    projectNew.classList.add('project')
    projectNew.classList.add('new')
    projects.appendChild(projectNew)

    const projectNewTag = document.createElement('h3')
    projectNewTag.textContent = 'Add Project'
    projectNew.appendChild(projectNewTag)

    const projectSvg = document.createElement('svg')
    projectSvg.innerHTML =
        '<svg style="width: 24px; height: 24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /> </svg>'
    projectNew.appendChild(projectSvg)

    // main

    const main = document.createElement('div')
    main.classList.add('main')
    content.appendChild(main)

    const todoTitle = document.createElement('h2')
    todoTitle.classList.add('todo')
    todoTitle.textContent = 'Inbox'
    main.appendChild(todoTitle)

    const task = document.createElement('div')
    task.classList.add('task')
    main.appendChild(task)

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    task.appendChild(checkbox)

    const textarea = document.createElement('h3')
    textarea.textContent = '...'
    task.appendChild(textarea)

    const dueofDate = document.createElement('h3')
    dueofDate.textContent = 'mm/dd/yyyy'
    dueofDate.classList.add('dueofdate')
    task.appendChild(dueofDate)

    const no = document.createElement('button')
    no.classList.add('nope')
    no.type = 'reset'
    no.innerHTML =
        '<svg style="width:24px;height:24px" viewBox="0 0 24 24">     <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /> </svg>'
    task.appendChild(no)

    const newtask = document.createElement('div')
    newtask.classList.add('task')
    newtask.classList.add('new')
    newtask.classList.add('newer')
    main.appendChild(newtask)

    const taskSvg = document.createElement('svg')
    taskSvg.innerHTML =
        '<svg style="width: 24px; height: 24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /> </svg>'
    newtask.appendChild(taskSvg)

    const addNew = document.createElement('h3')
    addNew.textContent = 'Add new task'
    newtask.appendChild(addNew)

    mobileBut()
    buttonEffect()

    no.addEventListener('click', () => {
        task.remove()
    })

    tabOne.addEventListener('click', () => {
        todoTitle.textContent = 'Inbox'
        tabOne.style.backgroundColor = 'rgb(196, 70, 70)'
        tabOne.style.color = 'black'
        tabTwo.style.backgroundColor = 'transparent'
        tabThree.style.backgroundColor = 'transparent'
    })

    tabTwo.addEventListener('click', () => {
        todoTitle.textContent = 'Today'
        tabTwo.style.backgroundColor = 'rgb(196, 70, 70)'
        tabOne.style.color = 'black'
        tabOne.style.backgroundColor = 'transparent'
        tabThree.style.backgroundColor = 'transparent'
    })

    tabThree.addEventListener('click', () => {
        todoTitle.textContent = 'Upcoming'
        tabThree.style.backgroundColor = 'rgb(196, 70, 70)'
        tabOne.style.color = 'black'
        tabTwo.style.backgroundColor = 'transparent'
        tabOne.style.backgroundColor = 'transparent'
    })
}
