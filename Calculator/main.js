function showValue(element) {
    
    let input = document.getElementById("input");
    input.value += element;

}

function clears() {

    input.value = "";

}

function equals() {

    input.value = eval(input.value)
}