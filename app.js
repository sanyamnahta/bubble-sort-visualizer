let grid = document.querySelector('.grid');
let timeout = 1000;
let squares = [];

for(let i = 0; i<10; i++){
    let square = document.createElement('div');
    square.setAttribute('id', i);
    square.innerHTML = Math.floor(Math.random() * 100) + 1;;
    grid.append(square);
    squares.push(square);
}

function bubble_sort(){

    for(let i = 0; i<9; i++){
        for(let j = 0; j< (squares.length - i - 1); j++){
            setTimeout(() => {
                if(j>0)
                {
                squares[j-1].classList.remove('ex');
                squares[j].classList.remove('ex');
                }
                if(parseInt(squares[j].innerHTML) > parseInt(squares[j+1].innerHTML)){
                    if(j>0){
                        squares[j-1].classList.remove('exchange');
                        squares[j].classList.remove('exchange');
                        squares[j+1].classList.remove('exchange');
                    }
                    squares[j+1].classList.add('exchange');
                    squares[j].classList.add('exchange');

                    setTimeout(() => {
                        let temp =  squares[j].innerHTML;
                        squares[j].innerHTML = squares[j+1].innerHTML;  
                        squares[j+1].innerHTML = temp;
                    }, 500);

                    // if(j === squares.length - i -2){
                        setTimeout(() => {
                            squares[j].classList.remove('exchange');
                            squares[j+1].classList.remove('exchange'); 
                        }, 1000);
                    // }
                }
                else{
                    squares[j+1].classList.add('ex');
                    squares[j].classList.add('ex');
                    setTimeout(() => {
                        squares[j].classList.remove('ex');
                        squares[j+1].classList.remove('ex'); 
                    }, 1000);
                }
                
            }, timeout);
            timeout += 2000;
        }
    }

    for(let i = 0; i<10; i++){
        squares[j].classList.remove('exchange');
    }
}


bubble_sort();  