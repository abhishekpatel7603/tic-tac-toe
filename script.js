let boxes = document.querySelectorAll(".box");
let restartBtn = document.querySelector(".restart-btn");
let msg = document.querySelector(".msg");

let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],        
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const restartGame = ()=>{
    let turnO = true;
    enableBoxes();
    msg.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
        if(turnO){
            box.innerText = "O"
            turnO = false;
        }else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 === position2 && position2 === position3){
                console.log('winner');
                showWinner(position1);
            }
        }

          
    };
};


restartBtn.addEventListener("click", restartGame);

