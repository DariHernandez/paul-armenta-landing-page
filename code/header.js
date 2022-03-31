const header_btn = document.querySelector ("header .wrapper-arrow > .arrow")
const header = document.querySelector ("header")

// Display and hide responsive menu
header_btn.addEventListener ("click", function (e) {
    header.classList.toggle ("open")
})