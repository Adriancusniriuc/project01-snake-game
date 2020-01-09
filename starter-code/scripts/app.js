function init() {
  //dom variables
  const grid = document.querySelector('.grid')
  const squares = []
  const width = 11
  let headIndex = [3,2,1]
  let move = null
  // let clear = clearInterval
  const startBtn = document.querySelector('.start')
  // const board = []
  const scoreDiv = document.querySelector('.score')
  let score = 1
  let direction = null
  let isGameOver = false
  let speed = 300
 

  //Creating the grid
  function createGrid() {
    Array(width * width).join('.').split('.').forEach(() => {
      const square = document.createElement('div')
      square.classList.add('grid-item')
      squares.push(square)
      grid.appendChild(square)
    })
  }
  createGrid()
 

  function handleKeyDown(e) {
    switch (e.keyCode) {
      case 39: if (direction !== 'left') direction = 'right'
       
        break

        // if (headIndex % width < width - 1) {
        //   headIndex++
        // }

      case 37: if (direction !== 'right') direction = 'left'
        // if (headIndex % width > 0) {
        //   headIndex--
        // }
        break
      case 40: if (direction !== 'up') direction = 'down'
        // if (headIndex + width < width * width) {
        //   headIndex += width 
        // }
        break
      case 38: if (direction !== 'down') direction = 'up'
        // if (headIndex - width >= 0) {
        //   headIndex -= width  
        // } 
        break
      default:
        console.log('player shouldnt move')
    } 
    
  }
  function addSnake(){
    headIndex.map(index => squares[index].classList.add('head'))
    isColission()
  }
  // addSnake()

  function removeSnake() {
   
    headIndex.map(index => squares[index].classList.remove('head'))
  }

  // function handleDirection() {
  //   snake.unshift(playerIndex)
  //   snake = snake.slice(0, foodEaten)
  //   switch (direction) {
  //     case 'right':
  //       if (playerIndex % width < width - 1) {
  //         playerIndex++
  //       } else {
  //         playerIndex = playerIndex - width + 1
  //       }
  //       break
  //     case 'left':
    

  function movement() {
  
    if (direction === 'right' && headIndex[0] % width < width - 1) {
      removeSnake()
      headIndex.pop()
      headIndex.unshift(headIndex[0] + 1)
      addSnake()    
      
    } else if (direction === 'right' && headIndex[0] % width >= width - 1) {
      killGame()
    } 

    if (direction === 'left' && headIndex[0] % width > 0) {
      removeSnake()
      headIndex.pop()
      headIndex.unshift(headIndex[0] - 1)
      addSnake()
    } else if (direction === 'left' &&  headIndex[0] % width <= 0) {
      killGame()
    }   
    // playerIndex + width < width * width
    if (direction === 'up' && headIndex[0] - width >= 0 ) {
      removeSnake()
      headIndex.pop()
      headIndex.unshift(headIndex[0] - 11)
      addSnake()
    } else if (direction === 'up' && headIndex[0] - width < 0){
      killGame()
    }
    
    
    if (direction === 'down' && headIndex[0] + width < width * width) {
      removeSnake()
      // if snake hits a wall
      headIndex.pop()
      headIndex.unshift(headIndex[0] + width)
      addSnake()
    } else if (direction === 'down') {
      console.log('you died')
      killGame()
    }
    eatApple()
    
  }
  movement()

  // function notOnSnake() {
  //   const apple = generateApple()
  //   // for (let i = 0; i < squares.length; i++) {
  //   if (squares[apple].classList.contains('head')) {
  //     console.log('on snake')
  //   }
      
  // }
  
  // notOnSnake()
  

  
 
  function eatApple() {
    if (squares[headIndex[0]].classList.contains('apple') ) {
      headIndex.unshift(headIndex[0]) 
      removeApple()
      scoreDiv.innerHTML = 'Beers   ' + score
      score++
      clearInterval(move)
      speed = speed - 10
      move = setInterval(movement, speed) 
      generateApple()
     
      console.log(move)
    } 
    
    
  }
  eatApple()
  // if head index contains class apple 
  // removeclass
  // generateApple
 
  function removeApple() {
    squares.forEach(square => square.classList.remove('apple'))
  }
  
  function generateApple() {
    const apple =  Math.floor(Math.random() * Math.floor(width * width))
    squares[apple].classList.add('apple')
    if (squares[apple].classList.contains('head')) {
      console.log('on snake')
      removeApple()
      generateApple()
    }

  }
  // generateApple()
  
  
  function isColission() {
    for (let i = 1; i < squares.length; i++) {
      if (headIndex[0] === headIndex[i]) {
        console.log('crash')
        killGame()
      } 
    }
  }

  function clearGrid() {
    
    squares.forEach(square => square.classList.remove('head'))
    
  }
  
  console.log(squares)
  
  function killGame() {
    isGameOver = false
    clearInterval(move)
    alert('GAME OVER!')
    removeApple()
    clearGrid()
    score = 0
    scoreDiv.innerHTML = 'Beers   ' + score
    // createGrid.innerHTML = ''
    headIndex = [3,2,1]
    direction = 'right'
  }
  

  function startButton() {
    if (!isGameOver) {
      addSnake()
      generateApple()
      speed = 300
      move = setInterval(movement, speed)
    } else {
      clearInterval(move)
    }
    
   
  } 
  
  startBtn.addEventListener('click', startButton)
  window.addEventListener('keydown', handleKeyDown)
}
window.addEventListener('DOMContentLoaded', init)


// clearInterval(move)
















