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



  function control (e) {
    squares[currentIndex].classList.remove('snake') // remove snake class
    if(e.keycode === 39) {
      direction = 1 //   if we press right
    } else if (e.keycode === 38) {
      direction = -width//  up arrow makes snake go back 10 divs (up)
    } else if (e.keycode === 37) {
      direction = -1//  left
    } else if (e.keycode === 40) {
      direction = +width//  down
    }
  }

  document.addEventListener('keyup', control)

})
