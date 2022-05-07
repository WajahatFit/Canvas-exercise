const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
console.log(ctx);

const hospitalImg = new Image();
hospitalImg.src = 'images/hospital.png';



const ambulanceImg = new Image();
ambulanceImg.src = 'images/ambulance.png';



const planeImg = new Image();
planeImg.src = 'images/plane.png';


const policeCarImg = new Image();
policeCarImg.src = 'images/policeCar.png';

const moon = new Image();
moon.src = 'images/moon.png'

const plane = {
    x: 20,
    y: 191,
    width: 150,
    height: 120
}

const hospital = {
    x: 10,
    y: 295,
    width: 200,
    height: 300
}


const ambulance = {
    x: 900,
    y: 505,
    width: 100,
    height: 100
}

const policeCar = {
    x: 760,
    y: 520,
    width: 100,
    height: 90
}
const sun = {
    x: 260,
    y: 10,
    width: 160,
    height: 190
}

window.onload = function () {
    ctx.drawImage(hospitalImg, hospital.x, hospital.y, hospital.width, hospital.height);
    ctx.drawImage(ambulanceImg, ambulance.x, ambulance.y, ambulance.width, ambulance.height);
    ctx.drawImage(planeImg, plane.x, plane.y, plane.width, plane.height);
    ctx.drawImage(policeCarImg, policeCar.x, policeCar.y, policeCar.width, policeCar.height);
    ctx.drawImage(moon, sun.x, sun.y, sun.height, sun.width );
}

function moveVehicles() {
    ctx.clearRect(0, 0, 1000, 600);
    policeCar.x = policeCar.x -10; 
    ambulance.x = ambulance.x -10;
    plane.x = plane.x +10;
    plane.y = plane.y -3;

    if(policeCar.x && ambulance.x <0){
        policeCar.x = +840;
        ambulance.x = +1000;
    }
    if (plane.x > 900){
        plane.y = 191;
        plane.x = 1;
    }


    ctx.drawImage(hospitalImg, hospital.x, hospital.y, hospital.width, hospital.height);
    ctx.drawImage(ambulanceImg, ambulance.x, ambulance.y, ambulance.width, ambulance.height);
    ctx.drawImage(policeCarImg, policeCar.x, policeCar.y, policeCar.width, policeCar.height);
    ctx.drawImage(moon, sun.x, sun.y, sun.height, sun.width );
    ctx.drawImage(planeImg, plane.x, plane.y, plane.width, plane.height);
}

setTimeout(function(){
    let interval = setInterval(moveVehicles, 100)
}, 1000)