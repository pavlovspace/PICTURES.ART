const calculator = (size, material, options, promocode, showResult) => {
    let price = 0,
        sizePrice = 0,
        materialPrice = 0,
        optionPrice = 0

    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        showPrice = document.querySelector(showResult)

    const SIZE_PRICES = {
        '40x50': 160,
        '50x70': 160,
        '70x70': 160,
        '70x100': 160,
    }

    const MATERIAL_PRICES = {
        'Płótno z włókna': 100,
        'Lniana płótno': 150,
        'Bawełniane płótno': 230,
    }

    const OPTION_PRICES = {
        'Pokrycie żel artystyczny': 50,
        'Szybkie wykonanie': 50,
        'Dostawa gotowych prac': 70,
    }

    const updateTotalPrice = () => {
        const sizeValue = sizeBlock.value
        const materialValue = materialBlock.value
        const optionValue = optionsBlock.value

        sizePrice = SIZE_PRICES[sizeValue] || 0
        materialPrice = MATERIAL_PRICES[materialValue] || 0
        optionPrice = OPTION_PRICES[optionValue] || 0

        if (sizeValue == '' || materialValue == '') {
            showPrice.textContent = 'Proszę wybrać rozmiar i materiał obrazu'
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            showPrice.textContent = Math.round(price * 0.7)
        } else {
            price = Math.round(Number(sizePrice) + Number(materialPrice) + Number(optionPrice))
            console.log((showPrice.textContent = price + ' zł'))
            showPrice.textContent = price + 'zł'
        }
    }


    sizeBlock.addEventListener('change', updateTotalPrice)
    materialBlock.addEventListener('change', updateTotalPrice)
    optionsBlock.addEventListener('change', updateTotalPrice)
    promocodeBlock.addEventListener('input', updateTotalPrice)
}

export default calculator
