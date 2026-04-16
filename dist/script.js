const canvas = document.getElementById('snowman');
const ctx = canvas.getContext('2d');
const flakeSize = 10;
 
document.addEventListener('DOMContentLoaded', function () {
    drawGround();
    drawSnowText();
    drawSnowman();
    drawSnowflakes();
});
 
//Creates the ground and background
function drawGround() {
    ctx.fillStyle = '#7472724d';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#c9290d';
    ctx.fillRect(0, 230, canvas.width, canvas.height - 230);
}
 
//Displays the "Snow" text
function drawSnowText() {
    ctx.font = '80px Verdana';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillStyle = 'red';
    ctx.fillText('SNOW', canvas.width / 2, 10);
}
 
//Creates three white circles for the snowman
function drawSnowman() {

    //Bottom circle
    ctx.beginPath();
    ctx.arc(150, 200, 50, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
 
    //Middle circle
    ctx.beginPath();
    ctx.arc(150, 120, 40, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
 
    //Top circle
    ctx.beginPath();
    ctx.arc(150, 60, 25, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
}

//Displays a single diamond snowflake
function drawOneFlake(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + flakeSize / 2, y + flakeSize / 2);
    ctx.lineTo(x, y + flakeSize);
    ctx.lineTo(x - flakeSize / 2, y + flakeSize / 2);
    ctx.closePath();
    ctx.fillStyle = '#eee';
    ctx.fill();
}
 
//Calls drawOneFlake() 100 times to display 100 snow flakes
function drawSnowflakes() {
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        drawOneFlake(x, y);
    }
}
 

 