$(document).ready(onReady);

function onReady(){
    console.log('hi from jq');
    $("#buttonGenerate").on('click', generate)
}
let counter = 0
function generate() {
    console.log('git generate');
    counter++
    $("#boxContainer").append(`
        <div>
            <p>${counter}<p>
            <button id=buttonYellow>Yellow</button>
            <button id=buttonDelete>Delete</button>
        </div>
    `)
}

console.log('hi');
