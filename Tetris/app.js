document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const scoreDisplay = document.querySelector('#score')
  const highScoreDisplay = document.querySelector('#highScore')
  const startBtn = document.querySelector('#start-button')
  const resetBtn = document.querySelector('#resetBtn');
  const width = 10
  let nextRandom = 0
  let timerId
  let score = 0
  let highScore = 0
  let rotatesound = document.getElementById('audio')
  let completerowsound = document.getElementById('audio1')
  let endsound = document.getElementById('audio2')
  let startsound = document.getElementById('audio3')
  let landsound = document.getElementById('audio4')

  function preload () {
    rotatesound = loadSound ('JBBcode/Tetris/sounds/rotatesound.wav')
    completerowsound = loadSound ('JBBcode/Tetris/sounds/completerowsound.wav')
    endsound = loadSound ('JBBcode/Tetris/sounds/endsound.mp3')
    startsound = loadSound ('JBBcode/Tetris/sounds/startsound.mp3')
    landsound = loadSound ('JBBcode/Tetris/sounds/landsound.wav')
  }

  const colors = [
    'orange',
    'red',
    'purple',
    'green',
    'blue'
  ]
  const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
  ]
  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1]
  ]
  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
  ]
  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
  ]
  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
  ]
  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]
  let currentPosition = 4
  let currentRotation = 0
  //  random select tetro and its first rotation
  let random = Math.floor(Math.random() * theTetrominoes.length)
  let current = theTetrominoes[random][currentRotation]
  //  draw the tetromino
  function draw () {
    current.forEach(index => {
      squares[currentPosition + index].classList.add('tetromino')
      squares[currentPosition + index].style.backgroundColor = colors[random]
    })
  }
  //  undraw
  function undraw () {
    current.forEach(index => {
      squares[currentPosition + index].classList.remove('tetromino')
      squares[currentPosition + index].style.backgroundColor = ''
    })
  }

  /*  function restart () {
  score = 0
  ERASE TETROMINOES
  Start()
} */

  function control (e) {
    if (e.keyCode === 37 || e.keyCode === 65) {
      moveLeft()
    } else if (e.keyCode === 38 || e.keyCode === 87) { // Arrows or WASD
      rotatesound.play()
      rotate()
    } else if (e.keyCode === 39 || e.keyCode === 68) {
      moveRight()
    } else if (e.keyCode === 40 || e.keyCode === 83) {
      moveDown()
    /*  } else if (e.keyCode === 82) { // Restart with R
      restart()
    }*/
    } // remove when function installed
  }

  document.addEventListener('keyup', control)
  //  (event, function)
  function moveDown () {
    undraw()
    currentPosition += width
    draw()
    freeze()
  }
  //  freeze function
  function freeze () {
    if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
      current.forEach(index => squares[currentPosition + index].classList.add('taken'))
      //  start a new tetromino falling
      landsound.play()
      random = nextRandom
      nextRandom = Math.floor(Math.random() * theTetrominoes.length)
      current = theTetrominoes[random][currentRotation]
      currentPosition = 4
      draw()
      displayShape()
      addScore()
      gameOver()
    }
  }
  //  move tet left until at edge
  function moveLeft () {
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
    if (!isAtLeftEdge) currentPosition -= 1

    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition += 1
    }
    draw()
  }

  function moveRight () {
    undraw()
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
    if (!isAtRightEdge) currentPosition += 1
    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition -= 1
    }
    draw()
  }

  function isAtRight () {
    return current.some(index => (currentPosition + index + 1) % width === 0)
  }

  function isAtLeft () {
    return current.some(index => (currentPosition + index) % width === 0)
  }

  function checkRotatedPosition (P) {
    P = P || currentPosition // get current position.  Then, check if the piece is near the left side.
    if ((P + 1) % width < 4) { // add 1 because the position index can be 1 less than where the piece is (with how they are indexed).
      if (isAtRight()) { // use actual position to check if it's flipped over to right side
        currentPosition += 1 //  if so, add one to wrap it back around
        checkRotatedPosition(P) //  check again.  Pass position from start, since long block might need to move more.
      }
    } else if (P % width > 5) {
      if (isAtLeft()) {
        currentPosition -= 1
        checkRotatedPosition(P)
      }
    }
  }

  function rotate () {
    undraw()
    currentRotation++
    if (currentRotation === current.length) { //  if the current rotation gets to 4, make it go back to 0
      currentRotation = 0
    }
    current = theTetrominoes[random][currentRotation]
    checkRotatedPosition()
    draw()
  }

  //  show on deck tetromino in mini-grid display
  const displaySquares = document.querySelectorAll('.mini-grid div')
  const displayWidth = 4
  const displayIndex = 0

  //  the Tetrominos without rotations
  const upNextTetrominoes = [
    [1, displayWidth + 1, displayWidth * 2 + 1, 2], //  l
    [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1], // z
    [1, displayWidth, displayWidth + 1, displayWidth + 2], // t
    [0, 1, displayWidth, displayWidth + 1], //  o
    [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1] //  i
  ]

  //  display the shape in the mini-grid display
  function displayShape () {
    //  remove any trace of a tetromino form the entire grid
    displaySquares.forEach(square => {
      square.classList.remove('tetromino')
      square.style.backgroundColor = ''
    })
    upNextTetrominoes[nextRandom].forEach(index => {
      displaySquares[displayIndex + index].classList.add('tetromino')
      displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom]
    })
  }
  //  add functionality to the button
  startBtn.addEventListener('click', () => {
    if (timerId) { //PAUSE
      clearInterval(timerId)
      timerId = null
    } else {
      startsound.play() //PLAY
      draw()
      timerId = setInterval(moveDown, 1000)
      nextRandom = Math.floor(Math.random() * theTetrominoes.length)
    }
  })

  resetBtn.addEventListener('click', () => {
         location.reload()
         return false
     })

  /*restartBtn.addEventListener('click', () => {
    startsound.play()
    displayShape()
    score = 0
    scoreDisplay.innerHTML = score
    clearBoard() //ADD FUNCTIONALITY
    freeze(current)
    if (row.some(index => squares[index].classList.contains('taken' || 'tetromino'))) {
      startsound.play()
      undraw()
      displaySquares.forEach(square => {
        square.classList.remove('tetromino')
        square.style.backgroundColor = '' }) // play if pieces on bottom
    /*  squares[displayIndex + index].classList.remove('tetromino')
      index.forEach(index => {     // NEEDED?
        squares[index].classList.remove('taken')   // NEEDED?
        squares[index].classList.remove('tetromino')  // NEEDED?
        squares[index].style.backgroundColor = ''  // NEEDED?
      })
      const squaresRemoved = squares.splice(i, index) // (position, number to delete, add)
      squares = squaresRemoved.concat(squares) // NEEDED?
      squares.forEach(cell => grid.appendChild(cell)) // NEEDED?
*/
  //  }
  //}
//)
  //  add score
  function addScore () {
    for (let i = 0; i < 199; i += width) { // MAX SCORE
      const row = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9]

      if (row.every(index => squares[index].classList.contains('taken'))) {
        score += 10
        completerowsound.play() // sound effect for row completion
        scoreDisplay.innerHTML = score
        row.forEach(index => {
          squares[index].classList.remove('taken')
          squares[index].classList.remove('tetromino')
          squares[index].style.backgroundColor = ''
        })
        const squaresRemoved = squares.splice(i, width)
        squares = squaresRemoved.concat(squares)
        squares.forEach(cell => grid.appendChild(cell)) //  new squares onto grid
      }
    }
  }

  // game over
  function gameOver () {
    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      endsound.play()
      clearInterval(timerId)
      scoreDisplay.innerHTML = 'You scored ' + score + '. Game Over!'
      if (score >= highScore) {
        highScore = score
        highScoreDisplay.innerHTML = highScore
      }
    }
  }
})
