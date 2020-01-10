/* eslint-disable indent */
function init() {
  //Enums are used to represent a fixed number of possible values.
  //The directions object is now an implementation of an enum with four possible values. 
  //Use enums if there are a definite number of fixed values for any one variable
  const directionsEnum = {
    RIGHT: 'right',
    LEFT: 'left', 
    UP: 'up', 
    DOWN: 'down'
  }



  //dom variables
  const grid = document.querySelector('.grid')
  const startBtn = document.querySelector('.start')
  // const scoreDiv = document.querySelector('.score')
  const width = 11
  // const move = setInterval(movement, 500)
  const clear = clearInterval
  let apple = generateApple(width)
  const board = []
  

  
  

  //FUNCTIONS
  function initBoard() {
    grid.innerHTML = ''

    // make a loop which goes through each element of the board
    // and creates a new array which will be the width

    for (let i = 0; i < width; i++) {
      board[i] = new Array(width)

      // make another loop within the function for (the height) {
      //   crate a new square every Time
      //   in the  square add the class list of 'grid item'
      //   append child
      // }
  
      for (let j = 0; j < width; j++) {
        const square = document.createElement('div')
        square.classList.add('grid-item')
        // board[j] = new Array(width)
        board[i][j] = square
        //node.appendChild(node)
        //You can also use this method to move an element from one element to another
        grid.appendChild(square)
        
      }
    }
  }
  
   var snake = {
    direction: directionsEnum.RIGHT,
    body: [],
   
    createSnake: function() {
      this.body.push({ x: 1, y: 1 })
    },
   
    drawSnake: function() {
      //make a loop going through all the cells length 
      //for every cell on the row x and each 
      //column y add a class list of head
      for (let i = 0; i < this.body.length; i++) {
        board[this.body[i].x][this.body[i].y].classList.add('head')
      }
    },
    
    snakeDirection: function()  {
      const headX = this.body[0].x
      const headY = this.body[0].y

    
      if (this.direction === directionsEnum.RIGHT) {
        if (headY === board.length - 1)
        headY = 0
        else
        nextY = headY + 1
        nextX = headX
      } else if (this.direction === directionsEnum.LEFT) {
        if (headY === 0)
        nextY = board.length - 1
        else
        nextY = headY - 1
        nextX = headX
      } else if (this.direction === directionsEnum.UP) {
        if (headX === board.length - 1 )
        nextX = 0
        else
        nextX = headX - 1
        nextY = headY
      } else if (this.direction === directionsEnum.DOWN) {
        if (headX === 0)
        nextX = headX + 1
        else
        nextX = board.length - 1
        nextY = headY
      }
      
      
    }
     
   }

   function handleKeyDown(e) {
    
    switch (e.keyCode) {
      case 39: //right
        snake.direction = directionsEnum.RIGHT
        // if ([headX][headY] % width < width - 1) {
        //   [headX][headY]++
        // }

        break
      case 37: //left
        snake.direction = directionsEnum.LEFT
      console.log('hello')
        break
      case 40: //down
        snake.direction = directionsEnum.DOWN

        break
      case 38: //up
        snake.direction = directionsEnum.UP

        break
      default:
        console.log('player shouldnt move')
    } 
    
  }

//   function moveSnake() {
//     for (let i = 0; i < width; i++){
//       for (let j = 0; j < width; j++) {
//      if (board[i][j].classList.contains('head'))
//        board[i][j].classList.remove('head')
//     }
//   }
//  }

  function generateApple(width) {
    return ({ x: Math.floor(Math.random() * width), y: Math.floor(Math.random() * width) })
    
  }
  // apple = generateApple(width)
  //  board[apple.x][apple.y].classList.add('apple')
  // board[apple.x][apple.y].classList.remove('apple')


  function startGame() {
  
  }
  // handleKeyDown()
  // moveSnake()
  initBoard()
  generateApple()
  snake.createSnake()
  snake.drawSnake()
  snake.snakeDirection()
  
  //calling functions
  
  

  window.addEventListener('keydown', handleKeyDown)
  startBtn.addEventListener('click', startGame)
}
window.addEventListener('DOMContentLoaded', init)









//     function handleKeyDown(e) {
//       let direction = directionsEnum.RIGHT
//       const headX = body[0]
//       const headY = body[0]

//       switch (e.keyCode) {
//       case 39: //right
//       if (this.direction === directionsEnum.RIGHT) {
//         if (headY === board.length - 1)
//           nextY = 0
//         else
//         nextY = headY + 1
//         nextX = headX
//     }
//     break
//     case 37:    //left
//     if (this.direction === directionsEnum.LEFT) {
//       if (headY === 0)
//       nextY = board.length - 1
//       else
//       nextY = headY - 1
//       nextX = headX
//     }
//     break
//     case 40: //down
//     if (this.direction === directionsEnum.DOWN) {
//       if (headX === 0)
//       nextX = headX + 1
//       else
//       nextX = board.length - 1
//       nextY = headY
//     }
//     break
//     case 38: // up
//     if (this.direction === directionsEnum.UP) {
//       if (headX === board.length - 1 )
//       nextX = 0
//       else
//       nextX = headX - 1
//       nextY = headY
//   }
//   break
//   default:
//         console.log('player shouldnt move')
//  }
// }



  // function direction()  {
  //   const direction = directionsEnum.RIGHT
  //   const headX = body[0].x
  //   const headY = body[0].y

  //   if (!direction) {
  //     console.log('use arrow keys')
  //     throw new Error('use arrow keys')
  //   } else if (this.direction === directionsEnum.RIGHT) {
  //     if (headY === board.length - 1)
  //       nextY = 0
  //     else
  //     nextY = headY + 1
  //     nextX = headX
  //   } else if (this.direction === directionsEnum.LEFT) {
  //     if (headY === 0)
  //     nextY = board.length - 1
  //     else
  //     nextY = headY - 1
  //     nextX = headX
  //   } else if (this.direction === directionsEnum.UP) {
  //     if (headX === board.length - 1 )
  //     nextX = 0
  //     else
  //     nextX = headX - 1
  //     nextY = headY
  //   } else if (this.direction === directionsEnum.DOWN) {
  //     if (headX === 0)
  //     nextX = headX + 1
  //     else
  //     nextX = board.length - 1
  //     nextY = headY
  //   }
  // }