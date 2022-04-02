const header_btn = document.querySelector ("header .wrapper-arrow > .arrow")
const header = document.querySelector ("header")
const header_links = document.querySelectorAll ("header nav ul li a")

// Display and hide responsive menu
header_btn.addEventListener ("click", function (e) {
    header.classList.toggle ("open")
})

// Add event to each header link
for (let header_link of header_links) {
    let header_link_id = Array.from(header_links).indexOf (header_link)

    // Activate service card
    header_link.addEventListener ("click", function (e) {
        active_card (header_link_id)
    })
}