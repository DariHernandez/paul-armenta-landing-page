const checkbox_chanel_other = document.querySelector ("#canal-d")
const input_chanel_other = document.querySelector ("#chanel-other")

checkbox_chanel_other.addEventListener ("change", function (e) {
    if (checkbox_chanel_other.checked) {
        input_chanel_other.classList.remove ("hide")
    } else {
        input_chanel_other.classList.add ("hide")
    }
})