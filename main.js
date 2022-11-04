const abs_unit_section = document.getElementById("unit-absolute");
const abs_inputs = Array.from(abs_unit_section.getElementsByClassName("unit-input"))
console.log(abs_inputs)

abs_inputs.forEach(function (input) {

    input.addEventListener("change", function (event) {
        const input_target = event.target.dataset.target;
        const target = Array.from(abs_unit_section.getElementsByClassName(input_target))[0];
        const font_size = event.target.value;
        const unit = input_target.split("-")[1]
        console.log(target);
        console.log(font_size);
        console.log(unit);

        target.style.fontSize = font_size + unit;
    })

})