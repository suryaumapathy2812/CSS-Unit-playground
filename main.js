const abs_unit_section = document.getElementById("unit-absolute");
const abs_inputs = Array.from(abs_unit_section.getElementsByClassName("unit-input"))

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


const rel_unit_section = document.getElementById("unit-relative");
const rel_inputs = Array.from(rel_unit_section.getElementsByClassName("unit-input"));

const parent_inputs = [];
const child_inputs = [];

rel_inputs.forEach(function (input) {
    if (input.dataset.level === "parent") {
        parent_inputs.push(input);
    } else {
        child_inputs.push(input);
    }
})

console.log(parent_inputs)
console.log(child_inputs)


parent_inputs.forEach(function (input) {
    input.addEventListener("change", function (event) {
        const input_target = event.target.dataset.target;
        const target = Array.from(rel_unit_section.getElementsByClassName(input_target))[0];
        const font_size = event.target.value;
        const unit = input_target.split("-")[2]
        console.log(target);
        console.log(font_size);
        console.log(unit);

        target.style.fontSize = font_size + unit;
    })
})

child_inputs.forEach(function (input) {
    input.addEventListener("change", function (event) {
        const input_target = event.target.dataset.target;
        const target = Array.from(rel_unit_section.getElementsByClassName(input_target))[0];
        const font_size = event.target.value;
        const unit = input_target.split("-")[2]
        console.log(target);
        console.log(font_size);
        console.log(unit);

        target.style.fontSize = font_size + unit;
    })
})

var viewPortWidth;
var viewPortHeight;

if (typeof window.innerWidth != 'undefined') {
    viewPortWidth = window.innerWidth,
        viewPortHeight = window.innerHeight
}

console.log("Viewport Weight ==> " + viewPortWidth)
console.log("Viewport Height ==> " + viewPortHeight)