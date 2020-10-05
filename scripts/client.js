$(document).ready(onReady);

function onReady(){
    console.log('hi from jq');
    $("#buttonGenerate").on('click', generate)
    $('#boxContainer').on('click', '#buttonYellow', yellow);
    $('#boxContainer').on('click', '#buttonDelete', deleteFunction);


}
let counter = 0
function generate() {
    console.log('generate');
    counter++
    $("#boxContainer").append(`
        <div class=red>
            <p>${counter}<p>
            <button id=buttonYellow>Yellow</button>
            <button id=buttonDelete>Delete</button>
        </div>
    `)
}

function yellow() {
    console.log('hi from yellow');
    $(this).closest('div').addClass('yellow');
    
}

function deleteFunction() {
    console.log('hi from delete');
    $(this).closest('div').remove();

    
}

console.log('hi');
