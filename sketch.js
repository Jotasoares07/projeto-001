let xbolinha = 300;
let ybolinha = 200;
let diametro = 20;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xbolinha,ybolinha ,diametro );
  xbolinha += velocidadeXBolinha;
  xbolinha += velocidadeYBolinha;
  
   if (xbolinha + raio > width ||
      xbolinha - raio < 0){
      velocidadeXBolinha *= -1;
}
   if (yBolinha + raio > height || 
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}