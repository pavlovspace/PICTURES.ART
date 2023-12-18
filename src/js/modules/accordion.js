const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector)

    btns.forEach((btn) => {
        btn.addEventListener('click', function () {
            if (!this.classList.contains('active-style')) {
                btns.forEach((btn) => {
                    btn.classList.remove('active-style')
                    btn.nextElementSibling.classList.remove('active-content')
                    btn.nextElementSibling.style.maxHeight = '0px'
                })

                this.classList.add('active-style')
                this.nextElementSibling.classList.add('active-content')
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px'
            } else {
                this.classList.remove('active-style')
                this.nextElementSibling.classList.remove('active-content')
                this.nextElementSibling.style.maxHeight = '0px'
            }
        })
    })
}

export default accordion
