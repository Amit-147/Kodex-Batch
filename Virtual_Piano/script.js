function btn(classname) {
    return document.querySelector(classname)
}

// btn selection

var btnA = btn(".btnA")
var btnS = btn(".btnS")
var btnD = btn(".btnD")
var btnF = btn(".btnF")
var btnG = btn(".btnG")
var btnH = btn(".btnH")
var btnI = btn(".btnI")
var btnJ = btn(".btnJ")
var btnK = btn(".btnK")
var btnL = btn(".btnL")
var btnC = btn(".btnC")
var btnB = btn(".btnB")
var btnM = btn(".btnM")

// Audio Creation
var audioA = new Audio()
var audioS = new Audio()
var audioD = new Audio()
var audioF = new Audio()
var audioG = new Audio()
var audioH = new Audio()
var audioI = new Audio()
var audioJ = new Audio()
var audioK = new Audio()
var audioL = new Audio()
var audioC = new Audio()
var audioB = new Audio()
var audioM = new Audio()




document.body.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'KeyA':
            btnA.classList.add('keyPress')
            audioA.src = './assets/wav_a1.wav'
            audioA.currentTime = 0
            audioA.play()
            break
        case 'KeyS':
            btnS.classList.add('keyPress')
            audioS.src = './assets/wav_a1s.wav'
            audioS.currentTime = 0
            audioS.play()
            break
        case 'KeyD':
            btnD.classList.add('keyPress')
            audioD.src = './assets/wav_b1.wav'
            audioD.currentTime = 0
            audioD.play()
            break
        case 'KeyF':
            btnF.classList.add('keyPress')
            audioF.src = './assets/wav_b1.wav'
            audioF.currentTime = 0
            audioF.play()
            break
        case 'KeyG':
            btnG.classList.add('keyPress')
            audioG.src = './assets/wav_c1.wav'
            audioG.currentTime = 0
            audioG.play()
            break
        case 'KeyH':
            btnH.classList.add('keyPress')
            audioH.src = './assets/wav_c1s.wav'
            audioH.currentTime = 0
            audioH.play()
            break
        case 'KeyI':
            btnI.classList.add('keyPress')
            audioJ.src = './assets/wav_d1.wav'
            audioJ.currentTime = 0
            audioJ.play()
            break
        case 'KeyJ':
            btnJ.classList.add('keyPress')
            audioK.src = './assets/wav_d1s.wav'
            audioK.currentTime = 0
            audioK.play()
            break
        case 'KeyK':
            btnK.classList.add('keyPress')
            audioL.src = './assets/wav_e1.wav'
            audioL.currentTime = 0
            audioL.play()
            break
        case 'KeyL':
            btnL.classList.add('keyPress')
            audioL.src = './assets/wav_e1.wav'
            audioL.currentTime = 0
            audioL.play()
            break
        case 'KeyC':
            btnC.classList.add('keyPress')
            audioK.src = './assets/wav_f1s.wav'
            audioK.currentTime = 0
            audioK.play()
            break
        case 'KeyB':
            btnB.classList.add('keyPress')
            audioL.src = './assets/wav_g1.wav'
            audioL.currentTime = 0
            audioL.play()
            break
        case 'KeyM':
            btnM.classList.add('keyPress')
            audioL.src = './assets/wav_g1s.wav'
            audioL.currentTime = 0
            audioL.play()
            break

    }

    setTimeout(() => {
        btnA.classList.remove('keyPress')
        btnS.classList.remove('keyPress')
        btnD.classList.remove('keyPress')
        btnF.classList.remove('keyPress')
        btnG.classList.remove('keyPress')
        btnH.classList.remove('keyPress')
        btnI.classList.remove('keyPress')
        btnJ.classList.remove('keyPress')
        btnK.classList.remove('keyPress')
        btnL.classList.remove('keyPress')
        btnC.classList.remove('keyPress')
        btnB.classList.remove('keyPress')
        btnM.classList.remove('keyPress')
    }, 200)

})