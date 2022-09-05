let currenInput = document.querySelector('.currenInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');
let realTimeScreenValue = []

clearbtn.addEventListener("click", () => {
    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currenInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = "rgba(150, 150, 150, 0.87)";
})

buttons.forEach(btn) => { 
    btn.addEventListener("click", () => {
        if(!btn.id.match('erase'))
        {
            realTimeScreenValue.push(btn.value)
            currenInput.innerHTML = realTimeScreenValue.join('');
            if(btn.classList.contains('num_btn')){
                answerScreen.innerHTML =eval(realTimeScreenValue.join(''));

            }
        }
        if(btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currenInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));

        }
        if(btn.id.match('evaluate')) {
            currenInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";

        }
        if(typeof eval(realTimeScreenValue.join('')) == 'undefined')
        {
            answerScreen.innerHTML = 0
        }

    })
}