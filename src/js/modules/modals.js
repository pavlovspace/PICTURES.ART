const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay) {
        const triggers = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll()

        // Opening Modal on Trigger Click
        triggers.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault()
                }

                windows.forEach((item) => {
                    item.style.display = 'none'
                })

                modal.style.display = 'block'
                document.body.style.overflow = 'hidden'
                document.body.style.marginRight = `${scroll}px`
            })
        })

        // Closing Modal on Close Button Click
        close.addEventListener('click', () => {
            windows.forEach((element) => {
                element.style.display = 'none'
            })

            modal.style.display = 'none'
            document.body.style.overflow = ''
            document.body.style.marginRight = `0px`
        })

        // Closing Modal on Overlay Click
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay === true) {
                windows.forEach((element) => {
                    element.style.display = 'none'
                })

                modal.style.display = 'none'
                document.body.style.overflow = ''
                document.body.style.marginRight = `0px`
            }
        })

        // Function to calculate browser scrollbar width
        function calcScroll() {
            let div = document.createElement('div')

            div.style.width = '50px'
            div.style.height = '50px'
            div.style.overflowY = 'scroll'
            div.style.visibility = 'hidden'

            document.body.appendChild(div)
            let scrollWidth = div.offsetWidth - div.clientWidth
            div.remove()

            return scrollWidth
        }

        // Function to display a modal window after a certain time
        function showModalByTime(selector, time) {
            setTimeout(() => {
                let display = false

                document.querySelectorAll('[data-modal]').forEach((element) => {
                    if (getComputedStyle(element).display !== 'none') {
                        display = 'block'
                    }
                })

                if (display === false) {
                    let selectorPopup = document.querySelector(selector)
                    selectorPopup.style.display = 'block'
                    document.body.style.overflow = 'hidden'
                }
            }, time)
        }
        // showModalByTime('.popup-consultation', 60000)
    }

    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close', true)
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close', true)
}

export default modals
