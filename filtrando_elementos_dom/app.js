// get filter element
// get cards elements

// add input event for the filter element

// filter function
// if the filter is not empty
// for each card of cards
// get card heading (title)
// tranform to lower case
// transform filter text to lower case
// if card title does not include the filter text
// hide the card element
// else
// unhide the card element
// else
// for each card of cards
// unhide the card element

let search = document.getElementById('input_filter')
let cards = document.querySelectorAll('.cards li')

search.addEventListener('input', () => {

    if (cards.value != '') {
        for (let card of cards) {

            let title = card.querySelector('h2')

            title = title.textContent.toLowerCase()

            let filterTitle = search.value.toLowerCase()

            if (!title.includes(filterTitle)) {
                card.style.display = 'none'
            } else {
                card.style.display = 'block'
            }

        }

    } else {
        console.log('mmmmm, value does not exist :(')
    }

})

