function playSong(audioSelector) {
    const element = document.querySelector(audioSelector)

    if (element && element.localName === 'audio') {
        element.play()
    } else  {
        console.info('Element not found or invalid selector')
    }
}

const keyList = document.querySelectorAll(".tecla")

for(let counter = 0; counter < keyList.length; counter ++) {
    const key = keyList[counter]
    const instrument = key.classList[1]
    const audioId = `#som_${instrument}`

    key.onclick = () => {
        playSong(audioId)
    };
}

key.onkeydown = (event) => {
    if (event.code === 'Space' || event.code === 'Enter') {
        key.classList.add('ativa')
    }

    key.onkeyup = () => {
        key.classList.remove('ativa')
    }
}