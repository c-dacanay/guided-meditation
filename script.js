let colorFeel = document.getElementById('colorfeel');
let defaultColor = "#0000ff";
let praySequence = [];
let sequence = 0;
let keySequence = document.getElementsByClassName('svgKey')
let prayerInput = document.getElementById('prayerInput')
let praying = true;
let debugPray = ['feeling', 'mantra', 'blessing', 'beautiful']

if (praying) {
    let hide = document.getElementById('intros');
    hide.style.display = 'none';
    console.log('true');
    document.getElementById('prayer').style.display = 'block';
    praySequence = debugPray
    pray();
}

function pray(){
    let prayerDiv = document.getElementById('prayerDisplay');
    prayerDiv.innerHTML = praySequence[0]
    prayerInput.addEventListener("keypress", submitOnEnter)
}

function submitOnEnter(event) {
    if(event.which === 13){
        event.preventDefault(); // Prevents the addition of a new line in the text field (not needed in a lot of cases)
        checkStrings();
    }
}

function checkStrings(){
    console.log(prayerInput.value, praySequence[sequence])
    if (prayerInput.value === praySequence[sequence]){
        console.log('yeee')
    }
}

// Get all the inputs
function prayerPrep(a) {
    // console.log(a)
    //put the responses into an array
    if (a) {
        let question = document.getElementById(a).value
        praySequence.push(question)
    }
    keySequence[sequence].style.fill = 'white';
    sequence++
    if (sequence >= 4) {
        praying = true;
        console.log('help')
    }
    console.log(praySequence)
}

//Colors
colorFeel.addEventListener("change", watchColorPicker, false);
function watchColorPicker(event) {
    let wrapper = document.getElementsByClassName('wrapper') 
    wrapper[0].style.backgroundColor = event.target.value;
    window.location.href="#mantrabox"
}