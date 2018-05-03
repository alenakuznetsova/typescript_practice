var size;
function generateShipNum(size) {
    var result = Math.floor(Math.random() * (size));
    return result;
}
function clearOldField(size) {
    for (var i = 0; i < size * size; i++) {
        var desk = document.getElementsByClassName('desk')[0];
        desk.innerHTML = '';
    }
}
function printImg() {
    size = document.getElementById('field-size').value;
    clearOldField(size);
    var desk = document.getElementsByClassName('desk')[0];
    for (var i = 0; i < size; i++) {
        var ship = generateShipNum(size);
        for (var j = 0; j < size; j++) {
            var container = document.createElement('li');
            container.className = 'flip-container';
            desk.appendChild(container);
            var flipper = document.createElement('div');
            flipper.className = 'flipper';
            flipper.onclick = function () {
                this.style.transform = 'rotateY(180deg)';
            };
            container.appendChild(flipper);
            var front = document.createElement('div');
            front.className = 'front';
            flipper.appendChild(front);
            var back = document.createElement('div');
            back.className = 'back';
            if (j == ship) {
                back.style.background = '#FF4436';
            }
            flipper.appendChild(back);
        }
        var newBr = document.createElement('br');
        desk.appendChild(newBr);
    }
    document.getElementById('ships').innerHTML = "You have " + size + " ships on field";
}
