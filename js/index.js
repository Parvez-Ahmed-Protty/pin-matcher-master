function getPin(){
    const pin = parseInt(Math.random() * 10000) ;
    const pinString = pin + '';
    if (pinString.length == 4){
        return pin ;
    }
    else {
        return getPin();
    }
}
document.getElementById('generator-pin').addEventListener('click', function(){
    const pin = getPin();
    const generatorInput = document.getElementById('generator-input');
    generatorInput.value = pin ;
})
document.getElementById('key-pat').addEventListener('click', function(event){
    const number = event.target.innerText ;
    const keyType = document.getElementById('key-type');
    if (isNaN(number)){
        if (number == 'C'){
            keyType.value = '';
        }
        else if (number == '<'){
            // meet section
        }
    }
    else {
        const previousType = keyType.value ;
        keyType.value = previousType+number ;
    }
})
document.getElementById('verify-pin').addEventListener('click', function(){
    const generatorInputPin = document.getElementById('generator-input').value ;
    const keyTypePin = document.getElementById('key-type').value ;
    if (generatorInputPin == keyTypePin){
        document.getElementById('notify-success').style.display = 'block';
        document.getElementById('notify-fail').style.display = 'none';
    }
    else {
        document.getElementById('notify-fail').style.display = 'block';
        document.getElementById('notify-success').style.display = 'none';
    }
})