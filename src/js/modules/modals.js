const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const triggers = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]')

        triggers.forEach((element) => {
            element.addEventListener('click', () => {
                modal.style.display = 'flex'
            })
        })

        close.addEventListener('click', () => {
            modal.style.display = 'none'
        })

        windows.forEach((element) => {
            element.addEventListener('click', (event) => {
                
                if (event.target == element) {
                    modal.style.display = 'none'
                }
            })
        })
    }

    bindModal('.button', '.popup-consultation', '.popup-content .popup-close')
}

export default modals
