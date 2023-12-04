const modals = () => {
    let btnPressed
    let removedBtn

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
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

                btnPressed = true

                if (destroy) {
                    removedBtn = item
                    item.remove()
                }

                windows.forEach((item) => {
                    item.style.display = 'none'
                    item.classList.add('animated', 'fadeIn')
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
            if (e.target === modal) {
                windows.forEach((element) => {
                    element.style.display = 'none'
                })

                if (removedBtn) {
                    document.body.appendChild(removedBtn)
                }

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
    }

    // Function to display a modal window after a certain time
    function showModalByTime(selector, time) {
        setTimeout(() => {
            let display

            document.querySelectorAll('[data-modal]').forEach((element) => {
                if (getComputedStyle(element).display !== 'none') {
                    display = 'block'
                }
            })

            if (!display) {
                let selectorPopup = document.querySelector(selector)
                selectorPopup.style.display = 'block'
                document.body.style.overflow = 'hidden'
                scroll = calcScroll()
                document.body.style.marginRight = `${scroll}px`
            }
        }, time)
    }

    // if the user did not click on the button popup will appear
    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)

            if (!btnPressed && window.scrollY + document.documentElement.clientHeight >= scrollHeight) {
                document.querySelector(selector).click()
            }
        })
    }

    // showModalByTime('.popup-consultation', 60000)
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close')
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close')
    openByScroll('.fixed-gift')
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true)
}

export default modals
