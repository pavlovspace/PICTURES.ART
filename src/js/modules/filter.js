const filter = () => {
    const menu = document.querySelector('.portfolio-menu')
    const items = menu.querySelectorAll('li')
    const wrapper = document.querySelector('.portfolio-wrapper')
    const no = document.querySelector('.portfolio-no')

    const typeFilter = (markType) => {
        wrapper.querySelectorAll('.all').forEach((mark) => {
            mark.style.display = 'none'
            mark.classList.remove('animated', 'fadeIn')
        })

        if (markType) {
            markType.forEach((mark) => {
                mark.style.display = 'block'
                mark.classList.add('animated', 'fadeIn')
            })
        }
    }

    menu.addEventListener('click', (e) => {
        const target = e.target,
            targetClass = target.classList,
            filterType = target.classList[0]

        if (target && target.tagName == 'LI') {
            items.forEach((btn) => btn.classList.remove('active'))
            target.classList.add('active')

            const markType = wrapper.querySelectorAll(`.${filterType}`)
            typeFilter(markType)
        }
        if (targetClass.contains('grandmother') || targetClass.contains('granddad')) {
            no.style.display = 'block'
            no.classList.add('animated', 'fadeIn')
        } else {
            no.style.display = 'none'
            no.classList.remove('animated', 'fadeIn')
        }
    })
}

export default filter
