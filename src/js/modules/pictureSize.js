const pictureSize = (imgSelector) => {
    const imgBlocks = document.querySelectorAll(imgSelector)

    function showImg(block) {
        const img = block.querySelector('img')

        // img/sizes.png  ==>  img/sizes-1.png
        img.src = img.src.slice(0, -4) + '-1.png'

        // 'p:not(.sizes-hit' =  find all <p>tag  which do not have the class .sizes-hit
        block.querySelectorAll('p:not(.sizes-hit').forEach((p) => {
            p.style.display = 'none'
        })
    }

    function hideImg(block) {
        const img = block.querySelector('img')

        img.src = img.src.slice(0, -6) + '.png'
        block.querySelectorAll('p:not(.sizes-hit').forEach((p) => {
            p.style.display = 'block'
        })
    }

    imgBlocks.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            showImg(element)
        })

        element.addEventListener('mouseleave', () => {
            hideImg(element)
        })
    })
}

export default pictureSize
