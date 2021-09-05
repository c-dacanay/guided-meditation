console.log('ayooooo')
let colorFeel = document.getElementById('colorfeel');
let defaultColor = "#0000ff";
let praySequence = [];

let feeling = document.getElementById('feel')
console.log(feel)

function prayer(a) {
    console.log(a)
    let question = document.getElementById(a).value
    praySequence.push(question)
    console.log(praySequence)
}

//Colors
colorFeel.addEventListener("change", watchColorPicker, false);
function watchColorPicker(event) {
    let wrapper = document.getElementsByClassName('wrapper') 
    wrapper[0].style.backgroundColor = event.target.value;
    window.location.href="#mantrabox"
}