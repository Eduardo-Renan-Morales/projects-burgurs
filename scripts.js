const list = document.querySelector('ul')
const buttonShowAll = document.querySelector(".all-the-itens")
const buttonMapAll = document.querySelector(".discount-button")
const amount = document.querySelector(".amount")
const buttonFilterVegan = document.querySelector(".filter-vegans")

function fomatCurruency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
    return newValue
}

function showAll(productArray) {
    let myLi = ''

    productArray.forEach((product) => {
        myLi += `
                    <li >
                        <img src=${product.src}>
                        <p>${product.name}</p>
                        <p class="item-price">R$ ${fomatCurruency( product.price)}</p>
                    </li>
                `
    })

    list.innerHTML = myLi
}

function mapaAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,          //    ...  =  spreed operator 
        price: product.price * 0.9,
    }))

    showAll(newPrices)
}
function totalValueOfroducts() {

    const valortotal = menuOptions.reduce((acc, value) => {
        return acc + value.price
    }, 0)

    list.innerHTML = `       
    <li >
        <p> O valor total da sua compra é de R$ ${fomatCurruency(valortotal)}</p>
    </li>
 `
}

function filterVegans() {
    const vegans = menuOptions.filter((product) => product.vegan === true)

    showAll(vegans)
}
buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapaAllItems)
amount.addEventListener('click', totalValueOfroducts)
buttonFilterVegan.addEventListener('click', filterVegans)