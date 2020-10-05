$(document).ready(onReady);

function onReady(){
    console.log('hi from jq');
    $("#buttonGenerate").on('click', generate)
}

function generate() {
    console.log('git generate');
    $("#boxContainer").append(`
        <div>a</div>
    `)
}

console.log('hi');
