textEl = document.getElementById('text')
speedEl = document.getElementById('speed')
text = 'chargoggagoggmanchauggagoggchaubunagungamaugg'
textPosition = 1
speed = 500

writeText()

function writeText(){
    textEl.innerText = text.slice(0, textPosition)
    textPosition++
    if(textPosition>text.length){
        textPosition = 1
    }
    // funkcija koja ja povikuvame na odreden broj milisekundi

    setTimeout(writeText,speed)
}

speedEl.addEventListener('input', (e) =>  {
    speed=500
})