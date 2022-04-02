const services_cards_wrapper = document.querySelector (".services .cards")
const services_cards = document.querySelectorAll (".services .cards .card")

var actived_card = null

services_cards_wrapper.addEventListener ("mouseenter", function () {

    if (! actived_card) {
        // deactive all cards
        for (let services_card of services_cards) {
                services_card.classList.remove ("active")
        }
    }
})

services_cards_wrapper.addEventListener ("mouseleave", function () {
    if (! actived_card) {
        // Activate all cards
        for (let services_card of services_cards) {
            services_card.classList.add ("active")
        }
    }
})

function active_card (card_num) {
    
    // Deactivate all cards
    for (let services_card of services_cards) {
        services_card.classList.remove ("active")
    }

    // Keep active only specific card
    actived_card = services_cards[card_num]
    actived_card.classList.add ("active")
}