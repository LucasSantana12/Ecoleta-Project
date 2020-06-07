//Preenchendo o select com os estado. Usando a API  do IBGE
function populateUfs() {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {

            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}
populateUfs()

//----------------------------------------------------------------------------------------
//Preenchendo o select de cidades, referente ao estado selecionado, usando a api do IBGE

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")



    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex

    stateInput.value = event.target.options[indexOfSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {

            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false
        })
}


document.
    querySelector("select[name =uf]")
    .addEventListener("change", getCities)


//--------------------------------------------------------------------------------
//itens de coleta
//pegar todos os lis

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (let item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []


function handleSelectedItem(event) {

    const itemLi = event.target

    // add ou remover uma classe com js
    itemLi.classList.toggle("selected")

    const itemId = event.target.dataset.id

    // verificar itens selecionados e quais itens
    // pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId //Serar true or false
        return itemFound
    })

    //se estiver selecionado, remova
    if (alreadySelected >= 0) {
        // tire da seleção
        const filteredItems = selectedItems.filter(item => {
            const itemsIsDifferent = item != itemId // false
            return itemsIsDifferent
        })

        selectedItems = filteredItems
    } else {
        // se nao estiver selecionado, selecione
        selectedItems.push(itemId)
    }
    // atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems
}