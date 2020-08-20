document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const scoreDisplay = document.querySelector('span')
  const startBtn = document.query('.start')

  const width = 10
  let currentIndex = 0//  first div in grid
  let appleIndex = 0
  let currentSnake = [2,1,0] // 2 = head, 0 = tail, 1 = body
  let direction = 1
  let score = 0
  let intervalTime = 0
  let speed = .9
  let interval = 0

//  start restart
function startGame() {
  currentSnake.forEach(index => squares[index].classList.remove('snake')) // each index of current snake array
  squares[appleIndex].classList.remove('apple')
  clearInterval(interval)
  score = 0
  //randomzie apple
  direction = 1
  scoreDisplay.innerText = score
  intervalTime = 1000
  currentSnake = [2, 1, 0]
  currentIndex = 0
  currentSnake.forEach(index => squares[index].classList.add('snake'))
  interval = setInterval(moveOutcomes, intervalTime)
}

//  function for outcomes
function moveOutcomes() {}
//  function snake hits border/self
  if(
    (currentSnake[0] + width >= (width * width) && direction === width) || //if snake hits the bottom
    (currentSnake[0] % width === width -1 && direction === 1) || //if snake hits right wall
    (currentSnake[0] % width === 0 && direction === -1) || // if snake hits left wall
    (currentSnake[0] - width < 0 && direction === -width) //  if snake hits top
    squares[currentSnake[0] + direction].classList.contains('snake') // snake overlaps itself
  ) {
    return clearInterval(interval) //clear interval if any of above occur.
  }

  const tail = currentsnake.pop() // removes last of the array and shows it
  squares[tail].classList.remove('snake') //removes class of snake from the tail pieces
  currentSnake.unshift(currentSnake[0] + direction) //direction for the head
//  function snake gets apple
if(squares[currentSnake[0]].classList.contains('apple') } {
  squares[currentSnake[0]].classList.remove('apple')
  squares[tail].classList.add('snake')]
  currentSnake.push(tail)
  randomApple()
  score++
  scoreDisplay.textContent = score
  clearInterval(interval)
  intervalTime = intervalTIme * speed
  interval = setInteval(moveOutcomes, intervalTime)
}
//generate new apple after it is eaten
function ranomApple() {
  do{
    appleIndex = Math.floor(Math.random() * squares.length)
  } while(squares[appleIndex].classList.contains('snake'))
  squares[appleIndex].classList.add('apple')
}// EXTRA?
}


squares[currentSnake[0]}.classList.add('snake')

  function control (e) {
    squares[currentIndex].classList.remove('snake') // remove snake class from being left behind
    if(e.keycode === 39) {
      direction = 1 //   if we press right
    } else if (e.keycode === 38) {
      direction = -width//  up arrow makes snake go back 10 divs (up)
    } else if (e.keycode === 37) {
      direction = -1//  left
    } else if (e.keycode === 40) {
      direction = +width//  down, snake appears 10 divs away
    }
  }

document.addEventListener('keyup', control)
startBtn.addEventListener('click', startGame)
})
