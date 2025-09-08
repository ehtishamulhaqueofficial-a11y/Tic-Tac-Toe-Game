let boxes = document.querySelectorAll('.box');
let resetButton = document.getElementById('resetButton');
let newBtn = document.querySelector('.new-btn');
let msgContainer = document.querySelector('.msgContainer');
let msg = document.getElementById('msg');

// also access reset button by writing as 
// let resetButton = document.querySelector('#resetButton');

// 2D Array
let turn = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) =>{

    box.addEventListener('click', () => {
        
        if(turn == true ){
            box.style.color = 'red';
            box.innerText = 'O';
            turn = false;
            
        }
        else{
            box.style.color = 'green';
            box.innerText = 'X';
            turn = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        
        if(count == 9 && !isWinner)
        {
            gameDraw();
        }

    });
})

let gameDraw = () => {
    msg.innerText = `Game Is Draw `;
    msg.style.color = "black";
    msgContainer.classList.remove("hide");
    boxes.forEach((box) => {
        box.disabled = true;  // Disable boxes on draw
    });
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`;
    msg.style.color = "Green";
    msgContainer.classList.remove("hide");

    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const checkWinner = () => {
    for(let patterns of winPatterns){

        // console.log(patterns[0], patterns[1], patterns[2]);
        // console.log(boxes[patterns[0]], boxes[patterns[1]], boxes[patterns[2]]);

        let box1 = boxes[patterns[0]].innerText;
        let box2 = boxes[patterns[1]].innerText;
        let box3 = boxes[patterns[2]].innerText;

        if(box1 != '' && box2 != '' && box3 != '') {
            if(box1 == box2 && box2 == box3){
                console.log(box1 , " is the winner");
                showWinner(box1);
                return true; // stop when we find winner if not add this then someone win at 9th turn it declare draw message
            }
        }
    }
    return false;
}

resetButton.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerText = '';
        box.disabled = false;
        box.style.color = ''
        count = 0;
    });
        turn = true;  // every time when game start is start with O
        msgContainer.classList.add("hide");
    });
    
newBtn.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerText = '';
        box.disabled = false;
        count = 0;
    });
        turn = true // every time when game start is start with O
        msgContainer.classList.add("hide");
})



