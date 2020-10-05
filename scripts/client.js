$(document).ready(onReady);

function onReady(){
    $("#buttonGenerate").on('click', generate)
    $('#boxContainer').on('click', '#buttonYellow', yellow);
    $('#boxContainer').on('click', '#buttonDelete', deleteFunction);


}
let counter = 0
function generate() {
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
    $(this).closest('div').addClass('yellow');
    
}

function deleteFunction() {
    $(this).closest('div').remove();

    
}

