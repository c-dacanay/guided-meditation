console.log('ayooooo')
let colorFeel = document.getElementById('colorfeel');
let defaultColor = "#0000ff";
let praySequence = [];
let sequence = 0;

let feeling = document.getElementById('feel')
let keySequence = document.getElementsByClassName('svgKey')
console.log(keySequence)

// Get all the inputs
function prayer(a) {
    console.log(a)
    //put the responses into an array
    if (a) {
        let question = document.getElementById(a).value
        praySequence.push(question)
        console.log(praySequence)
    }
    keySequence[sequence].style.fill = 'white';
    sequence++
    console.log(keySequence[sequence])
}

//Colors
colorFeel.addEventListener("change", watchColorPicker, false);
function watchColorPicker(event) {
    let wrapper = document.getElementsByClassName('wrapper') 
    wrapper[0].style.backgroundColor = event.target.value;
    window.location.href="#mantrabox"
}