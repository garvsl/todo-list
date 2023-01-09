import index from './createPage'
import './styles.css'

index()

function storageAvailable(type) {
    let storage
    try {
        storage = window[type]
        const x = '__storage_test__'
        storage.setItem(x, x)
        storage.removeItem(x)
        return true
    } catch (e) {
        return (
            e instanceof DOMException &&
            (e.message === 22 ||
                e.message === 1014 ||
                e.name === 'QuotaExceededError' ||
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            storage &&
            storage.length !== 0
        )
    }
}

if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    // if (!localStorage.getItem('bgcolor')) {
    //     populateStorage()
    // } else {
    //     setStyles()
    // }
} else {
    // Too bad, no localStorage for us
}
