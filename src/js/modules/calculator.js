import { getResource } from '../services/requests'

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

    const updateTotalPrice = () => {
        const sizeValue = sizeBlock.value
        const materialValue = materialBlock.value
        const optionValue = optionsBlock.value

        getResource('assets/db.json')
            .then((res) => getPrices(res.prices))
            .catch((error) => console.log(error))

        function getPrices(response) {
            const sizeItem = response[0][sizeValue]
            const materialItem = response[1][materialValue]
            const optionItem = response[2][optionValue]

            sizePrice = sizeItem || 0
            materialPrice = materialItem || 0
            optionPrice = optionItem || 0

            console.log('Size Price:', sizePrice)
            console.log('Material Price:', materialPrice)
            console.log('Option Price:', optionPrice)

            updateTotalPrice()
        }

        function updateTotalPrice() {
            if (sizeValue === '' || materialValue === '') {
                showPrice.textContent = 'Proszę wybrać rozmiar i materiał obrazu'
            } else if (promocodeBlock.value === 'IWANTPOPART') {
                showPrice.textContent = Math.round(price * 0.7)
            } else {
                price = Math.round(Number(sizePrice) + Number(materialPrice) + Number(optionPrice))
                console.log((showPrice.textContent = price + ' zł'))
                showPrice.textContent = price + 'zł'
            }
        }
    }

    sizeBlock.addEventListener('change', updateTotalPrice)
    materialBlock.addEventListener('change', updateTotalPrice)
    optionsBlock.addEventListener('change', updateTotalPrice)
    promocodeBlock.addEventListener('input', updateTotalPrice)
}

export default calculator
