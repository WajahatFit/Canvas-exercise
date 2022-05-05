const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
console.log(ctx);

const hospitalImg = new Image();
hospitalImg.src = '/hospital.png';
hospitalImg.onload = function () {


const ambulanceImg = new Image();
ambulanceImg.src = '/ambulance.png';
ambulanceImg.onload = function () {


const planeImg = new Image();
planeImg.src = '/plane.png';


const policeCarImg = new Image();
policeCarImg.src = '/policeCar.png';

const burnningSun = new Image();
burnningSun.src = '/burnningSun.jpeg'


//window .onload not drawing anything

window.onload = function () {
    ctx.drawImage(hospitalImg, hospital.x, hospital.y, hospital.width, hospital.height);
    ctx.drawImage(ambulanceImg, ambulance.x, ambulance.y, ambulance.width, ambulance.height);
    ctx.drawImage(planeImg, plane.x, plane.y, plane.width, plane.height);
    ctx.drawImage(policeCarImg, policeCar.x, policeCar.y, policeCar.width, policeCar.height);
}



const plane = {
    x: 200,
    y: 10,
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
// 

function moveVehiclesOnGround() {
    policeCar.x -= 10; 
    ambulance.x -=10;
    ctx.drawImage(policeCarImg, policeCar.x, policeCar.y, policeCar.width, policeCar.height);
    ctx.drawImage(ambulanceImg, ambulance.x, ambulance.y, ambulance.width, ambulance.height);
}
