
function isWinner(){
  let resultArr = [
    (arr[0]+arr[1]+arr[2]),
    (arr[3]+arr[4]+arr[5]),
    (arr[6]+arr[7]+arr[8]),
    (arr[0]+arr[3]+arr[6]),
    (arr[1]+arr[4]+arr[7]),
    (arr[2]+arr[5]+arr[8]),
    (arr[0]+arr[4]+arr[8]),
    (arr[2]+arr[4]+arr[6]),
  ];
  let winner = '';
  resultArr.forEach(item=>{
    if(item === 'XXX') winner = "X";
    if(item === 'OOO') winner = "O";
  })
  return winner;
}
function getXorO(){
  return isX ? 'X' : 'O'
}

function toggleClass(){
  document.querySelectorAll('.box').forEach(item=>{
    if(arr[item.id[4]] === 0){
      item.classList.toggle('hoverX')
      item.classList.toggle('hoverO')
    }
  })
}

let isX = true;
let arr = [];


function start(){
  let arena = document.querySelector('.arena');
  arena.innerHTML = '';
  isX = true;
  arr = [];
  for(let i=0;i<9;i++){
    arr.push(0);
    let box = document.createElement('div');
    box.id = 'box-' + i;
    box.classList.add('box')
    box.classList.add('hoverX');
    box.addEventListener('click',function(e){
      if(arr[e.target.id[4]] === 0){
        toggleClass();
        e.target.classList.remove('hoverX')
        e.target.classList.remove('hoverO')
        e.target.innerHTML = getXorO();
        arr[e.target.id[4]] = getXorO();
        isX = !isX;
      }
      if(isWinner() !== ''){ 
        alert(isWinner() + "- is Winn!!!")
        start()
      }
    })
    arena.append(box);
  }
}

start()