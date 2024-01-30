const getRandomIntNumberInRange = (min,max) => {
    return Math.floor((Math.random() * max) + min);
}

document.querySelector('.dice').addEventListener('click',() => {
    // alert("test")
    const new_num = getRandomIntNumberInRange(1,6)
    const new_im = './img/' + new_num + '.svg'
    document.querySelector('img').src = new_im
})