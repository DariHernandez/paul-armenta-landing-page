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

// Read redirect from other pages
let url_parts = window.location.href.split ("/")
let url_last_part = url_parts[url_parts.length - 1]
if (url_last_part.includes("#")) {

    if (url_last_part == "#service-a") {
        active_card (0)
    } else if (url_last_part == "#service-b") {
        active_card (1)
    } else if (url_last_part == "#service-c") {
        active_card (2)
    } else if (url_last_part == "#service-d") {
        active_card (3)
    } 
}