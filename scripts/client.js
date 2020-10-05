$(document).ready(onReady);

function onReady(){
    console.log('hi from jq');
    $("#buttonGenerate").on('click', generate)
}

function generate() {
    console.log('git generate');
}

console.log('hi');
