const sliders = (slides, direction, prev, next) => {
    let slideIndex = 1,
        paused = false

    const items = document.querySelectorAll(slides)
 
    function showSlides(number) {
        if (number > items.length) {
            slideIndex = 1
        }

        if (number < 1) {
            slideIndex = items.length
        }

        items.forEach((element) => {
            element.classList.add('animated')
            element.style.display = 'none' })
        items[slideIndex - 1].style.display = 'block'
    }
    showSlides(slideIndex)

    function plusSlide(number) {
        showSlides((slideIndex += number))
    }

    try {
        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next)

        prevBtn.addEventListener('click', () => {
            plusSlide(-1)
            items[slideIndex - 1].classList.remove('slideInLeft')
            items[slideIndex - 1].classList.add('slideInRight')
        })

        nextBtn.addEventListener('click', () => {
            plusSlide(1)
            items[slideIndex - 1].classList.remove('slideInRight')
            items[slideIndex - 1].classList.add('slideInLeft')
        })
    } catch (e) {
        console.log(e)
    }

    function activateAnimation() {
        if (direction === 'vertical') {
            // paused = setInterval(() => {
                plusSlide(1)
                items[slideIndex - 1].classList.add('slideInDown')
            // }, 3000)
        } else {
            // paused = setInterval(() => {
                plusSlide(1)
                items[slideIndex - 1].classList.remove('slideInLeft')
                items[slideIndex - 1].classList.add('slideInRight')
            // }, 3000)
        }
    }

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused)
    })

    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation()
    })

    activateAnimation()
}

export default sliders
