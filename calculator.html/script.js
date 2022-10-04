let bar = document.getElementById('bar');
buttons = document.querySelectorAll('button');
let barValue = '';
for (set of buttons) {
    set.addEventListener('click', (e) => {
        buttonValue = e.target.innerText;
        console.log('Button text is ', buttonValue);
        if (buttonValue == 'x') {
            buttonValue = '*';
            barValue += buttonValue;
            bar.value = buttonValue;
        }
        else if (buttonValue == 'AC') {
            barValue = "";
            bar.value = barValue;
        }
        else if (buttonValue == '=') {
            bar.value = eval(barValue);
        }
        else{
            barValue += buttonValue;
            bar.value = barValue;
        }
    })

}