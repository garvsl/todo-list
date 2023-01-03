export default function mobileBut() {
    const header = document.querySelector('.head')

    const mobile = document.createElement('div')
    mobile.classList.add('mobile')
    header.appendChild(mobile)

    const pieceOne = document.createElement('div')
    pieceOne.classList.add('piece')
    mobile.appendChild(pieceOne)

    const pieceTwo = document.createElement('div')
    pieceTwo.classList.add('piece')
    mobile.appendChild(pieceTwo)

    const pieceThree = document.createElement('div')
    pieceThree.classList.add('piece')
    mobile.appendChild(pieceThree)

    function mobileEvent() {
        // const smallMenu = document.createElement('div')
        // smallMenu.classList.add('smallMenu')
        // smallMenu.style.opacity = '1'

        // header.appendChild(smallMenu)

        // animate it coming down

        // smallMenu.style.top = '70px'
        pieceOne.style.transformOrigin = 'center'
        pieceTwo.style.transformOrigin = 'center'
        pieceOne.style.transform = 'rotate(-45deg)'
        pieceTwo.style.transform = 'rotate(45deg)'
        pieceTwo.style.marginTop = '-10px'
        pieceThree.style.opacity = '0'

        // smallMenu.appendChild(links)
        // links.style.display = 'flex'
        // setTimeout(() => {
        //     links.style.opacity = '1'
        // }, 250)
        mobile.removeEventListener('click', mobileEvent)
        mobile.addEventListener('click', mobileRemove)
    }

    mobile.addEventListener('click', mobileEvent)

    function mobileRemove() {
        // const smallMenu = document.querySelector('.smallMenu')

        pieceOne.style.transform = 'rotate(0deg)'
        pieceTwo.style.transform = 'rotate(-0deg)'
        pieceTwo.style.marginTop = '0'
        pieceThree.style.opacity = '1'

        // smallMenu.style.top = '0'

        mobile.removeEventListener('click', mobileRemove)
        // links.style.opacity = '0'
        // setTimeout(() => {
        //     smallMenu.remove()
        // }, 250)
        mobile.addEventListener('click', mobileEvent)
    }
}
