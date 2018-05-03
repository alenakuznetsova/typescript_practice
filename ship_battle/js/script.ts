let size: number;  

function generateShipNum(size: number) {
  let result: number = Math.floor(Math.random() * (size));
  return result;
}

function clearOldField(size: number){
  for(let i=0; i < size*size; i++){
    let desk = document.getElementsByClassName('desk')[0];
    desk.innerHTML = '';
  }          
}     

function printImg() {   
  size = document.getElementById('field-size').value; 
  clearOldField(size); 
  
  let desk = document.getElementsByClassName('desk')[0];
    for(let i = 0; i < size; i++) {
      let ship = generateShipNum(size);
        for(let j = 0; j < size; j++) {
          let container = document.createElement('li');
          container.className = 'flip-container';
          desk.appendChild(container);

          let flipper = document.createElement('div');
          flipper.className = 'flipper';
          flipper.onclick = function(){                    
            this.style.transform = 'rotateY(180deg)';
          }
          
          container.appendChild(flipper);

          let front = document.createElement('div');
          front.className = 'front';
          flipper.appendChild(front);		
          
          let back = document.createElement('div');
          back.className = 'back';

          if(j == ship){
          back.style.background = '#FF4436';
        }
          
          flipper.appendChild(back);                   
        }             
        let newBr = document.createElement('br');
        desk.appendChild(newBr);                
    } 
    document.getElementById('ships').innerHTML = `You have ${size} ships on field`;          
}