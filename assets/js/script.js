let headsFlips = 0
let tailsFlips = 0
let headsPercent = '0%'
let tailsPercent = '0%'
let totalFlips = 0

document.addEventListener('DOMContentLoaded', function () {
  
document.querySelector('#flip').addEventListener('click', function() {
    let coinFlip = Math.round((Math.random() * 2));
    console.log(coinFlip)
    if (coinFlip % 2 == 0) {
        console.log()
        headsFlips++
        totalFlips++
        console.log(`totalFlips is ${totalFlips}`)
        console.log(headsFlips)
        document.querySelector('#penny-image').src = 'assets/images/penny-heads.jpg'
        document.querySelector('#message').textContent = 'You Flipped Heads!'
        document.querySelector('#heads').textContent = headsFlips
        if (tails == 0){
            return false
    } else {
        document.querySelector('#heads-percent').textContent = headsFlips/totalFlips * 100 + '%'
        document.querySelector('#tails-percent').textContent = tailsFlips/totalFlips * 100 + '%'
    }
       
    } else {
        console.log()
        tailsFlips++
        totalFlips++
        console.log(`totalFlips is ${totalFlips}`)
        console.log(tailsFlips)
        document.querySelector('#penny-image').src = 'assets/images/penny-tails.jpg'
        document.querySelector('#message').textContent = 'You Flipped Tails!'
        document.querySelector('#tails').textContent = tailsFlips
        if (heads == 0){
            return false
    } else {
        document.querySelector('#tails-percent').textContent = tailsFlips/totalFlips * 100 + '%'
        document.querySelector('#heads-percent').textContent = headsFlips/totalFlips * 100 + '%'
    }
}
})


    
    document.querySelector('#clear').addEventListener('click', function() {
        headsFlips = 0
        tailsFlips = 0
        headsPercent = '0%'
        tailsPercent = '0%'
        totalFlips = 0
        document.querySelector('#penny-image').src = 'assets/images/penny-heads.jpg'
        document.querySelector('#message').textContent = "Let's Get Flipping!"
        document.querySelector('#heads').textContent = headsFlips
        document.querySelector('#tails').textContent = tailsFlips
        document.querySelector('#heads-percent').textContent = headsPercent
        document.querySelector('#tails-percent').textContent = tailsPercent
        
    })

    })