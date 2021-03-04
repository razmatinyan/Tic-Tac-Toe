const area = document.querySelector('#area')
let move = 0; // Step
let result = ''
const contentWrapper = document.querySelector('#content')
const modalResult = document.querySelector('#modal-result-wrapper')
const overlay = document.querySelector('#overlay')
const btnClose = document.querySelector('#btn-close')

// Steps
area.addEventListener('click', e => {
   if (e.target.className == 'box') {
      if (move % 2 === 0) {
         e.target.innerHTML = 'X'
      }
      else {
         e.target.innerHTML = '0'
      }

      e.target.style.pointerEvents = 'none'
      move++
      check()
   }
})

const check = () => {
   const boxes = document.querySelectorAll('.box')
   const win = [ // Winning Combinations
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // horizontal win

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // vertical win

      [0, 4, 8],
      [2, 4, 6], // diagonal win
   ];
   for (let i = 0; i < win.length; i++) {
      // Winning combination's for X
      if
         (boxes[win[i][0]].innerHTML == 'X' &&
         boxes[win[i][1]].innerHTML == 'X' &&
         boxes[win[i][2]].innerHTML == 'X') {
         result = "X's"
         prepareResult(result)
         console.log('first')
      }

      else if
         // Winning combination's for X
         (boxes[win[i][0]].innerHTML == '0' &&
         boxes[win[i][1]].innerHTML == '0' &&
         boxes[win[i][2]].innerHTML == '0') {
         result = "0's"
         prepareResult(result)
         console.log('second')
      }

      else if
         // Combinations for No One
         (
         // for X
         // for X
         (
            (move == 9 && boxes[win[i][0]].innerHTML == 'X' && boxes[win[i][1]].innerHTML == 'X' && boxes[win[i][2]].innerHTML != 'X'
            )

            ||

            (move == 9 && boxes[win[i][0]].innerHTML == 'X' && boxes[win[i][1]].innerHTML != 'X' && boxes[win[i][2]].innerHTML == 'X'
            )

            ||

            (move == 9 && boxes[win[i][0]].innerHTML != 'X' && boxes[win[i][1]].innerHTML == 'X' && boxes[win[i][2]].innerHTML == 'X'
            )

            ||

            (move == 9 && boxes[win[i][0]].innerHTML == 'X' && boxes[win[i][1]].innerHTML != 'X' && boxes[win[i][2]].innerHTML != 'X'
            )

            ||

            (move == 9 && boxes[win[i][0]].innerHTML != 'X' && boxes[win[i][1]].innerHTML == 'X' && boxes[win[i][2]].innerHTML != 'X'
            )

            ||

            (move == 9 && boxes[win[i][0]].innerHTML != 'X' && boxes[win[i][1]].innerHTML != 'X' && boxes[win[i][2]].innerHTML == 'X'
            )
         )

         ||

         // for 0
         // for 0

         (
            (move == 9 && boxes[win[i][0]].innerHTML == '0' && boxes[win[i][1]].innerHTML == '0' && boxes[win[i][2]].innerHTML != '0'
            )

            ||

            (move == 9 && boxes[win[i][0]].innerHTML == '0' && boxes[win[i][1]].innerHTML != '0' && boxes[win[i][2]].innerHTML == '0'
            )

            ||

            (move == 9 && boxes[win[i][0]].innerHTML != '0' && boxes[win[i][1]].innerHTML == '0' && boxes[win[i][2]].innerHTML == '0'
            )

            ||

            (move == 9 && boxes[win[i][0]].innerHTML == '0' && boxes[win[i][1]].innerHTML != '0' && boxes[win[i][2]].innerHTML != '0'
            )

            ||

            (move == 9 && boxes[win[i][0]].innerHTML != '0' && boxes[win[i][1]].innerHTML == '0' && boxes[win[i][2]].innerHTML != '0'
            )

            ||

            (move == 9 && boxes[win[i][0]].innerHTML != '0' && boxes[win[i][1]].innerHTML != '0' && boxes[win[i][2]].innerHTML == '0'
            )
         )
      ) {
         result = "No One's"
         prepareResult(result)
         console.log("third")
      }
   }
}

// PopUp & Who is winner function?
const prepareResult = winner => {
   contentWrapper.innerHTML = `Winner's are ${winner} !`

   modalResult.style.display = 'block'
}

// PopUp & Page Reload
const closeModal = () => {
   modalResult.style.display = 'none'
   location.reload()
}

overlay.addEventListener('click', closeModal)
btnClose.addEventListener('click', closeModal)