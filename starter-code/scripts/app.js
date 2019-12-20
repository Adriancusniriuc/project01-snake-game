function init() {
  //dom variables
  const grid = document.querySelector('.grid')
  const squares = []
  const width = 11
  let headIndex = 1
  const move = setInterval(movement, 500)
  const clear = clearInterval
  const apple = generateApple(121)
  const startBtn = document.querySelector('.start')
  
  
  //game variables
  let snakeX
  let snakeY
  let snakeDirection
  let snakeLength = 1
  let head = 1 

  // let square = { snake:0}

  Array(width * width).join('.').split('.').forEach(() => {
    let y = 0; y < grid.Height; y++
    let x = 0; x < grid.Width; x++
    const square = document.createElement('div')
    square.classList.add('grid-item')
    squares.push(square)
    grid.appendChild(square)
  })

  squares[headIndex].classList.add('head')
  function handleKeyDown(e) {
    switch (e.keyCode) {
      case 39: //right
        if (headIndex % width < width - 1) {
          headIndex++
        }
        break
      case 37: //left
        if (headIndex % width > 0) {
          headIndex--
        }
        break
      case 40: //down
        if (headIndex + width < width * width) {
          headIndex += width 
        }
        break
      case 38: //up
        if (headIndex - width >= 0) {
          headIndex -= width  
        } 
        break
      default:
        console.log('player shouldnt move')
    } 
    
    squares.forEach(square => square.classList.remove('head'))
    squares[headIndex].classList.add('head')

  }

  function movement() {
    squares[headIndex].classList.remove('head')
    // headIndex++   this works but on green so it doesn't run continuously 
    squares[headIndex].classList.add('head')
    
  }


  function generateApple(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }
  squares[apple].classList.add('apple')

  // function eatApple() {
  //   if (squares.apple === 1){
  //     snakeLength++
  //     squares.apple = 0
  //     generateApple()
  //   }
  // }
  
  
  function startGame() {
    //start button not working, game starts automatically
    movement()
    generateApple()
  }

  startBtn.addEventListener('click', startGame)
  window.addEventListener('keydown', handleKeyDown)
}
window.addEventListener('DOMContentLoaded', init)


