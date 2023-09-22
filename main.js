const input = document.getElementById('bin-num');
const output = document.getElementById('dec-num');
const convertBtn = document.getElementById('convert-btn');
const cleanBtn = document.getElementById('clean-btn');

convertBtn.addEventListener('click', function(event) {
    
    event.preventDefault();

    const binNum = input.value;

    if(/^[01]+$/.test(binNum)) {
        const decNum = parseInt(binNum, 2);
        output.textContent = decNum;
    } else{
        alert("Entrada inválida. Debes introducir un número binario");
    }

});

cleanBtn.addEventListener('click', function(event) {
    
    event.preventDefault();
    input.value = "";
    output.textContent = "";
});