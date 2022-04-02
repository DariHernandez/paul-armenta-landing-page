const header_btn = document.querySelector ("header .wrapper-arrow > .arrow")
const header = document.querySelector ("header")
const header_links = document.querySelectorAll ("header nav ul li a")

// Display and hide responsive menu width button
header_btn.addEventListener ("click", function (e) {
    header.classList.toggle ("open")
})

// Add event to each header link
for (let header_link of header_links) {
    let header_link_id = Array.from(header_links).indexOf (header_link)

    
    // Add event listener for each menu option
    header_link.addEventListener ("click", function (e) {
        // Hide responsive menu when selecr option
        header.classList.remove ("open")
        
        // Activate service card
        active_card (header_link_id)
    })

}